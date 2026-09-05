import React, { useState, useEffect, useRef } from 'react';
import {
  Question,
  Subject,
  UserQuestionResponse,
  TestResult,
  QuestionStatus,
  SubjectStats,
  GoogleUser
} from './types';
import { JEE_PREVIOUS_YEAR_QUESTIONS } from './data/questions';
import CBTHeader from './components/CBTHeader';
import QuestionArea from './components/QuestionArea';
import QuestionPalette from './components/QuestionPalette';
import AnswerSolutionWindow from './components/AnswerSolutionWindow';
import PerformanceAnalytics from './components/PerformanceAnalytics';
import ExamSetupView from './components/ExamSetupView';
import VersionBadge from './components/VersionBadge';
import GoogleAuthButton from './components/GoogleAuthButton';
import {
  SubmitConfirmationModal,
  QuestionPaperModal,
  InstructionsModal
} from './components/TestModals';

const STORAGE_KEY = 'jee_mains_cbt_test_history_v1';
const USER_STORAGE_KEY = 'jee_mains_cbt_google_user_v1';

export default function App() {
  // Navigation View State
  const [view, setView] = useState<'setup' | 'exam' | 'analytics'>('setup');

  // Google User Authentication State
  const [currentUser, setCurrentUser] = useState<GoogleUser | null>(() => {
    try {
      const savedUser = localStorage.getItem(USER_STORAGE_KEY);
      return savedUser ? JSON.parse(savedUser) : null;
    } catch {
      return null;
    }
  });

  const handleUserLogin = (user: GoogleUser) => {
    setCurrentUser(user);
    try {
      localStorage.setItem(USER_STORAGE_KEY, JSON.stringify(user));
    } catch (e) {
      console.warn('Could not save user to localStorage', e);
    }
  };

  const handleUserLogout = () => {
    setCurrentUser(null);
    try {
      localStorage.removeItem(USER_STORAGE_KEY);
    } catch (e) {
      console.warn('Could not clear user from localStorage', e);
    }
  };

  // Active Questions List
  const [questions, setQuestions] = useState<Question[]>(JEE_PREVIOUS_YEAR_QUESTIONS);
  const [currentSubject, setCurrentSubject] = useState<Subject>('physics');
  const [currentQuestionId, setCurrentQuestionId] = useState<string>('');

  // Responses and Live Tracking State
  const [userResponses, setUserResponses] = useState<Record<string, UserQuestionResponse>>({});
  const [timeRemainingSeconds, setTimeRemainingSeconds] = useState<number>(3600);
  const [activeQuestionTimerSeconds, setActiveQuestionTimerSeconds] = useState<number>(0);

  // Modals & Panels
  const [isAnswerWindowOpen, setIsAnswerWindowOpen] = useState<boolean>(false);
  const [isSubmitModalOpen, setIsSubmitModalOpen] = useState<boolean>(false);
  const [isQuestionPaperModalOpen, setIsQuestionPaperModalOpen] = useState<boolean>(false);
  const [isInstructionsModalOpen, setIsInstructionsModalOpen] = useState<boolean>(false);

  // Analytics & History
  const [currentResult, setCurrentResult] = useState<TestResult | null>(null);
  const [pastResults, setPastResults] = useState<TestResult[]>([]);

  // Test Session Configuration
  const [examConfig, setExamConfig] = useState<{
    year: number | 'all';
    subjectFilter: 'all' | Subject;
    mode: 'exam' | 'practice';
    durationMinutes: number;
    title: string;
  }>({
    year: 'all',
    subjectFilter: 'all',
    mode: 'exam',
    durationMinutes: 60,
    title: 'JEE (Main) - 5-Year Comprehensive Mock Test',
  });

  // Load Past History from LocalStorage
  useEffect(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved) {
        setPastResults(JSON.parse(saved));
      }
    } catch (err) {
      console.warn('Could not read past results from localStorage', err);
    }
  }, []);

  // Global Test Countdown Timer & Per-Question Timer
  useEffect(() => {
    if (view !== 'exam') return;

    const timer = setInterval(() => {
      // 1. Decrement overall test time
      setTimeRemainingSeconds((prev) => {
        if (prev <= 1) {
          clearInterval(timer);
          handleFinalSubmit();
          return 0;
        }
        return prev - 1;
      });

      // 2. Increment time spent on the current active question
      setActiveQuestionTimerSeconds((prev) => prev + 1);

      if (currentQuestionId) {
        setUserResponses((prev) => {
          const existing = prev[currentQuestionId] || {
            questionId: currentQuestionId,
            timeSpentSeconds: 0,
            status: 'not_answered',
            visitedCount: 1,
          };
          return {
            ...prev,
            [currentQuestionId]: {
              ...existing,
              timeSpentSeconds: existing.timeSpentSeconds + 1,
            },
          };
        });
      }
    }, 1000);

    return () => clearInterval(timer);
  }, [view, currentQuestionId]);

  // When a question is switched, update its status to 'not_answered' if still 'not_visited'
  const handleSelectQuestion = (qId: string) => {
    const targetQ = questions.find((q) => q.id === qId);
    if (!targetQ) return;

    // Update subject tab if jumping across subjects
    if (targetQ.subject !== currentSubject) {
      setCurrentSubject(targetQ.subject);
    }

    setCurrentQuestionId(qId);

    // Sync active per-question timer with stored time
    const existingResp = userResponses[qId];
    setActiveQuestionTimerSeconds(existingResp?.timeSpentSeconds || 0);

    // Mark as visited / not_answered if never visited before
    setUserResponses((prev) => {
      const cur = prev[qId];
      if (!cur || cur.status === 'not_visited') {
        return {
          ...prev,
          [qId]: {
            questionId: qId,
            timeSpentSeconds: cur?.timeSpentSeconds || 0,
            status: 'not_answered',
            visitedCount: (cur?.visitedCount || 0) + 1,
          },
        };
      }
      return {
        ...prev,
        [qId]: {
          ...cur,
          visitedCount: cur.visitedCount + 1,
        },
      };
    });
  };

  // Start Test Handler from Setup View
  const handleStartExam = (config: {
    year: number | 'all';
    subjectFilter: 'all' | Subject;
    mode: 'exam' | 'practice';
    durationMinutes: number;
  }) => {
    // Filter questions based on configuration
    let filtered = [...JEE_PREVIOUS_YEAR_QUESTIONS];
    if (config.year !== 'all') {
      filtered = filtered.filter((q) => q.year === config.year);
    }
    if (config.subjectFilter !== 'all') {
      filtered = filtered.filter((q) => q.subject === config.subjectFilter);
    }

    // Determine exam title
    const yearLabel = config.year === 'all' ? '5-Year All Papers' : `JEE Main ${config.year}`;
    const subjLabel =
      config.subjectFilter === 'all'
        ? 'Full Test (Phy, Chem, Math)'
        : config.subjectFilter.toUpperCase();
    const title = `${yearLabel} • ${subjLabel}`;

    setQuestions(filtered);
    setExamConfig({ ...config, title });

    // Initialize responses map
    const initialResponses: Record<string, UserQuestionResponse> = {};
    filtered.forEach((q) => {
      initialResponses[q.id] = {
        questionId: q.id,
        timeSpentSeconds: 0,
        status: 'not_visited',
        visitedCount: 0,
      };
    });

    setUserResponses(initialResponses);
    setTimeRemainingSeconds(config.durationMinutes * 60);

    // Pick first question
    const firstSubject: Subject =
      config.subjectFilter !== 'all'
        ? config.subjectFilter
        : filtered.length > 0
        ? filtered[0].subject
        : 'physics';
    const firstQuestion = filtered.find((q) => q.subject === firstSubject) || filtered[0];

    setCurrentSubject(firstSubject);
    if (firstQuestion) {
      setCurrentQuestionId(firstQuestion.id);
      setActiveQuestionTimerSeconds(0);
      initialResponses[firstQuestion.id].status = 'not_answered';
      initialResponses[firstQuestion.id].visitedCount = 1;
    }

    setView('exam');
  };

  // Subject Navigation Handler
  const handleSubjectChange = (newSubject: Subject) => {
    setCurrentSubject(newSubject);
    const firstQInSubject = questions.find((q) => q.subject === newSubject);
    if (firstQInSubject) {
      handleSelectQuestion(firstQInSubject.id);
    }
  };

  // Option selection for MCQ
  const handleSelectOption = (optIndex: number) => {
    if (!currentQuestionId) return;
    setUserResponses((prev) => {
      const cur = prev[currentQuestionId] || {
        questionId: currentQuestionId,
        timeSpentSeconds: activeQuestionTimerSeconds,
        status: 'not_answered',
        visitedCount: 1,
      };
      return {
        ...prev,
        [currentQuestionId]: {
          ...cur,
          selectedOption: optIndex,
          status: 'answered',
        },
      };
    });
  };

  // Numerical Answer input
  const handleSetNumericalAnswer = (val: string) => {
    if (!currentQuestionId) return;
    setUserResponses((prev) => {
      const cur = prev[currentQuestionId] || {
        questionId: currentQuestionId,
        timeSpentSeconds: activeQuestionTimerSeconds,
        status: 'not_answered',
        visitedCount: 1,
      };
      const isFilled = val.trim() !== '';
      return {
        ...prev,
        [currentQuestionId]: {
          ...cur,
          numericalAnswer: val,
          status: isFilled ? 'answered' : 'not_answered',
        },
      };
    });
  };

  // Clear Response
  const handleClearResponse = () => {
    if (!currentQuestionId) return;
    setUserResponses((prev) => {
      const cur = prev[currentQuestionId];
      if (!cur) return prev;
      return {
        ...prev,
        [currentQuestionId]: {
          ...cur,
          selectedOption: undefined,
          numericalAnswer: undefined,
          status: 'not_answered',
        },
      };
    });
  };

  // Navigation Helpers (Previous / Next)
  const subjectQuestions = questions.filter((q) => q.subject === currentSubject);
  const currentIdxInSubject = subjectQuestions.findIndex((q) => q.id === currentQuestionId);
  const hasPrevious = currentIdxInSubject > 0;
  const hasNext = currentIdxInSubject < subjectQuestions.length - 1;

  const navigateNext = () => {
    if (hasNext) {
      handleSelectQuestion(subjectQuestions[currentIdxInSubject + 1].id);
    } else {
      // If at end of current subject, try moving to next subject
      const subjs: Subject[] = ['physics', 'chemistry', 'mathematics'];
      const curSubjIdx = subjs.indexOf(currentSubject);
      if (curSubjIdx < subjs.length - 1) {
        handleSubjectChange(subjs[curSubjIdx + 1]);
      }
    }
  };

  const navigatePrevious = () => {
    if (hasPrevious) {
      handleSelectQuestion(subjectQuestions[currentIdxInSubject - 1].id);
    }
  };

  // Save & Next Action
  const handleSaveAndNext = () => {
    if (currentQuestionId) {
      setUserResponses((prev) => {
        const cur = prev[currentQuestionId];
        if (!cur) return prev;
        const hasAnswer =
          cur.selectedOption !== undefined || (cur.numericalAnswer && cur.numericalAnswer.trim() !== '');
        return {
          ...prev,
          [currentQuestionId]: {
            ...cur,
            status: hasAnswer ? 'answered' : 'not_answered',
          },
        };
      });
    }
    navigateNext();
  };

  // Save & Mark for Review Action
  const handleSaveAndMarkForReview = () => {
    if (currentQuestionId) {
      setUserResponses((prev) => {
        const cur = prev[currentQuestionId];
        if (!cur) return prev;
        const hasAnswer =
          cur.selectedOption !== undefined || (cur.numericalAnswer && cur.numericalAnswer.trim() !== '');
        return {
          ...prev,
          [currentQuestionId]: {
            ...cur,
            status: hasAnswer ? 'answered_marked_for_review' : 'marked_for_review',
          },
        };
      });
    }
    navigateNext();
  };

  // Mark for Review & Next Action
  const handleMarkForReviewAndNext = () => {
    if (currentQuestionId) {
      setUserResponses((prev) => {
        const cur = prev[currentQuestionId];
        if (!cur) return prev;
        return {
          ...prev,
          [currentQuestionId]: {
            ...cur,
            status: 'marked_for_review',
          },
        };
      });
    }
    navigateNext();
  };

  // Submit Exam & Compute Analytics
  const handleFinalSubmit = () => {
    setIsSubmitModalOpen(false);

    let totalScore = 0;
    let totalAttempted = 0;
    let totalCorrect = 0;
    let totalIncorrect = 0;
    let totalUnattempted = 0;
    let totalTimeSpent = 0;

    const subjects: Subject[] = ['physics', 'chemistry', 'mathematics'];
    const subjectStats: Record<Subject, SubjectStats> = {
      physics: {
        score: 0,
        totalQuestions: 0,
        attempted: 0,
        correct: 0,
        incorrect: 0,
        unattempted: 0,
        accuracy: 0,
        timeSpentSeconds: 0,
        avgTimePerQuestion: 0,
      },
      chemistry: {
        score: 0,
        totalQuestions: 0,
        attempted: 0,
        correct: 0,
        incorrect: 0,
        unattempted: 0,
        accuracy: 0,
        timeSpentSeconds: 0,
        avgTimePerQuestion: 0,
      },
      mathematics: {
        score: 0,
        totalQuestions: 0,
        attempted: 0,
        correct: 0,
        incorrect: 0,
        unattempted: 0,
        accuracy: 0,
        timeSpentSeconds: 0,
        avgTimePerQuestion: 0,
      },
    };

    questions.forEach((q) => {
      const resp = userResponses[q.id];
      const timeOnQ = resp?.timeSpentSeconds || 0;
      totalTimeSpent += timeOnQ;

      const sStats = subjectStats[q.subject];
      sStats.totalQuestions++;
      sStats.timeSpentSeconds += timeOnQ;

      const isAttempted =
        resp &&
        (resp.selectedOption !== undefined ||
          (resp.numericalAnswer !== undefined && resp.numericalAnswer.trim() !== ''));

      if (!isAttempted) {
        totalUnattempted++;
        sStats.unattempted++;
        return;
      }

      totalAttempted++;
      sStats.attempted++;

      let isCorrect = false;
      if (q.type === 'mcq') {
        isCorrect = resp.selectedOption === Number(q.correctAnswer);
      } else {
        const cleanUser = (resp.numericalAnswer || '').trim();
        const cleanTarget = String(q.correctAnswer).trim();
        isCorrect =
          cleanUser === cleanTarget ||
          Math.abs(parseFloat(cleanUser) - parseFloat(cleanTarget)) < 0.05;
      }

      if (isCorrect) {
        totalScore += 4;
        totalCorrect++;
        sStats.score += 4;
        sStats.correct++;
      } else {
        totalScore -= 1;
        totalIncorrect++;
        sStats.score -= 1;
        sStats.incorrect++;
      }
    });

    // Compute accuracies and averages
    subjects.forEach((sub) => {
      const s = subjectStats[sub];
      s.accuracy = s.attempted > 0 ? Math.round((s.correct / s.attempted) * 100) : 0;
      s.avgTimePerQuestion = s.totalQuestions > 0 ? Math.round(s.timeSpentSeconds / s.totalQuestions) : 0;
    });

    const maxScore = questions.length * 4;
    const overallAccuracy = totalAttempted > 0 ? Math.round((totalCorrect / totalAttempted) * 100) : 0;

    // Normalization curve formula for estimated percentile:
    // Typical JEE Mains 300 marks curve: 200+ is 99%ile, 150 is 97%ile, 100 is 90%ile, 70 is 80%ile.
    const scoreFraction = Math.max(0, totalScore / maxScore);
    let estimatedPercentile = Math.min(
      99.98,
      Math.max(10, Math.round((Math.pow(scoreFraction, 0.75) * 98 + 2) * 100) / 100)
    );
    if (totalScore <= 0) estimatedPercentile = 15.0;

    // Estimated All India Rank (AIR) based on ~1.2 million JEE Mains test takers:
    const totalCandidates = 1200000;
    const estimatedAIR = Math.max(
      1,
      Math.round(((100 - estimatedPercentile) / 100) * totalCandidates)
    );

    const newResult: TestResult = {
      id: `test_${Date.now()}`,
      title: examConfig.title,
      year: examConfig.year,
      date: new Date().toLocaleDateString('en-US', {
        month: 'short',
        day: 'numeric',
        year: 'numeric',
        hour: '2-digit',
        minute: '2-digit',
      }),
      totalTimeSpentSeconds: totalTimeSpent,
      allocatedTimeSeconds: examConfig.durationMinutes * 60,
      totalScore,
      maxScore,
      estimatedPercentile,
      estimatedAIR,
      totalQuestions: questions.length,
      attempted: totalAttempted,
      correct: totalCorrect,
      incorrect: totalIncorrect,
      unattempted: totalUnattempted,
      overallAccuracy,
      subjectStats,
      responses: userResponses,
      mode: examConfig.mode,
    };

    setCurrentResult(newResult);
    const updatedHistory = [newResult, ...pastResults];
    setPastResults(updatedHistory);
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(updatedHistory.slice(0, 20)));
    } catch (e) {
      console.warn('LocalStorage save failed', e);
    }

    setView('analytics');
  };

  const activeQuestion = questions.find((q) => q.id === currentQuestionId) || questions[0];

  return (
    <div className="min-h-screen bg-slate-900 text-slate-900 flex flex-col font-sans">
      {/* 1. SETUP / LAUNCHPAD VIEW */}
      {view === 'setup' && (
        <ExamSetupView
          onStartExam={handleStartExam}
          onOpenAnswersWindow={() => setIsAnswerWindowOpen(true)}
          onOpenPastAnalytics={() => {
            if (pastResults.length > 0) {
              setCurrentResult(pastResults[0]);
              setView('analytics');
            }
          }}
          pastResults={pastResults}
          user={currentUser}
          onLogin={handleUserLogin}
          onLogout={handleUserLogout}
        />
      )}

      {/* 2. ACTIVE CBT EXAM VIEW */}
      {view === 'exam' && activeQuestion && (
        <div className="flex-1 flex flex-col h-screen overflow-hidden">
          {/* NTA Top Header */}
          <CBTHeader
            currentSubject={currentSubject}
            onSubjectChange={handleSubjectChange}
            timeRemainingSeconds={timeRemainingSeconds}
            onOpenInstructions={() => setIsInstructionsModalOpen(true)}
            onOpenQuestionPaper={() => setIsQuestionPaperModalOpen(true)}
            onOpenAnswerWindow={() => setIsAnswerWindowOpen(true)}
            onSubmitExam={() => setIsSubmitModalOpen(true)}
            examTitle={examConfig.title}
            isPracticeMode={examConfig.mode === 'practice'}
            user={currentUser}
            onLogin={handleUserLogin}
            onLogout={handleUserLogout}
          />

          {/* Main Layout: Question Area (left/center) + Question Palette (right) */}
          <div className="flex-1 flex overflow-hidden">
            <QuestionArea
              question={activeQuestion}
              questionIndex={currentIdxInSubject}
              totalQuestionsInSubject={subjectQuestions.length}
              userResponse={userResponses[activeQuestion.id]}
              currentQuestionTimeSeconds={activeQuestionTimerSeconds}
              onSelectOption={handleSelectOption}
              onSetNumericalAnswer={handleSetNumericalAnswer}
              onClearResponse={handleClearResponse}
              onSaveAndNext={handleSaveAndNext}
              onSaveAndMarkForReview={handleSaveAndMarkForReview}
              onMarkForReviewAndNext={handleMarkForReviewAndNext}
              onPreviousQuestion={navigatePrevious}
              onNextQuestion={navigateNext}
              hasPrevious={hasPrevious}
              hasNext={hasNext}
              isPracticeMode={examConfig.mode === 'practice'}
            />

            {/* Right Side Question Palette */}
            <div className="hidden lg:block">
              <QuestionPalette
                questions={questions}
                currentSubject={currentSubject}
                currentQuestionId={activeQuestion.id}
                responses={userResponses}
                onSelectQuestion={handleSelectQuestion}
                onSubmitExam={() => setIsSubmitModalOpen(true)}
              />
            </div>
          </div>
        </div>
      )}

      {/* 3. PERFORMANCE ANALYTICS VIEW */}
      {view === 'analytics' && currentResult && (
        <div className="flex-1 flex flex-col min-h-screen">
          <nav className="bg-slate-900 border-b border-slate-800 px-6 py-3 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded bg-sky-600 flex items-center justify-center font-bold text-white text-xs">
                JEE
              </div>
              <span className="text-white font-bold text-sm sm:text-base">
                Performance Analytics & Scorecard
              </span>
            </div>
            <div className="flex items-center gap-3">
              <VersionBadge compact={true} />
              <button
                onClick={() => setIsAnswerWindowOpen(true)}
                className="px-3 py-1.5 bg-sky-600 hover:bg-sky-500 text-white font-semibold rounded text-xs transition"
              >
                Inspect Answers & Question Time
              </button>
              <button
                onClick={() => setView('setup')}
                className="px-3 py-1.5 bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-700 rounded text-xs transition"
              >
                Back to Home
              </button>
              <GoogleAuthButton
                user={currentUser}
                onLogin={handleUserLogin}
                onLogout={handleUserLogout}
                compact={true}
              />
            </div>
          </nav>

          <PerformanceAnalytics
            testResult={currentResult}
            questions={questions}
            onOpenSolutionWindow={() => setIsAnswerWindowOpen(true)}
            onRetakeOrNewTest={() => setView('setup')}
            pastResults={pastResults}
          />
        </div>
      )}

      {/* 4. MODALS & SPECIALIZED WINDOWS */}
      {/* (A) The Dedicated Answers & Per-Question Time Tracking Window */}
      <AnswerSolutionWindow
        isOpen={isAnswerWindowOpen}
        onClose={() => setIsAnswerWindowOpen(false)}
        questions={questions}
        responses={userResponses}
        onSelectQuestionToTest={handleSelectQuestion}
        isPostExam={view === 'analytics'}
      />

      {/* (B) Final Submission Confirmation Modal */}
      <SubmitConfirmationModal
        isOpen={isSubmitModalOpen}
        onClose={() => setIsSubmitModalOpen(false)}
        onConfirmSubmit={handleFinalSubmit}
        questions={questions}
        responses={userResponses}
      />

      {/* (C) Full Question Paper Sheet */}
      <QuestionPaperModal
        isOpen={isQuestionPaperModalOpen}
        onClose={() => setIsQuestionPaperModalOpen(false)}
        questions={questions}
        onSelectQuestion={handleSelectQuestion}
      />

      {/* (D) Official Instructions Modal */}
      <InstructionsModal
        isOpen={isInstructionsModalOpen}
        onClose={() => setIsInstructionsModalOpen(false)}
      />
    </div>
  );
}
