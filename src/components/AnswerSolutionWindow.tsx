import React, { useState } from 'react';
import { Question, Subject, UserQuestionResponse } from '../types';
import { MathRenderer } from './MathRenderer';
import {
  X,
  Clock,
  CheckCircle2,
  XCircle,
  AlertCircle,
  Filter,
  Search,
  Sparkles,
  BookOpen,
  ArrowUpDown,
  Zap,
  HelpCircle,
  Award,
  Home,
  ChevronRight,
} from 'lucide-react';
import { SUBJECT_METADATA, YEARS_AVAILABLE } from '../data/questions';

interface AnswerSolutionWindowProps {
  isOpen: boolean;
  onClose: () => void;
  questions: Question[];
  responses: Record<string, UserQuestionResponse>;
  onSelectQuestionToTest?: (questionId: string) => void;
  isPostExam?: boolean;
}

export const AnswerSolutionWindow: React.FC<AnswerSolutionWindowProps> = ({
  isOpen,
  onClose,
  questions,
  responses,
  onSelectQuestionToTest,
  isPostExam = false,
}) => {
  const [selectedSubject, setSelectedSubject] = useState<'all' | Subject>('all');
  const [selectedStatus, setSelectedStatus] = useState<'all' | 'correct' | 'incorrect' | 'unattempted' | 'marked'>('all');
  const [selectedYear, setSelectedYear] = useState<'all' | number>('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [expandedSolutions, setExpandedSolutions] = useState<Record<string, boolean>>({});

  if (!isOpen) return null;

  const toggleExpand = (qId: string) => {
    setExpandedSolutions((prev) => ({ ...prev, [qId]: !prev[qId] }));
  };

  const expandAll = () => {
    const allExpanded: Record<string, boolean> = {};
    questions.forEach((q) => {
      allExpanded[q.id] = true;
    });
    setExpandedSolutions(allExpanded);
  };

  const collapseAll = () => {
    setExpandedSolutions({});
  };

  const formatTime = (totalSecs: number) => {
    const mins = Math.floor(totalSecs / 60);
    const secs = totalSecs % 60;
    if (mins === 0) return `${secs}s`;
    return `${mins}m ${secs}s`;
  };

  // Determine correctness and scoring for each question
  const getQuestionEvaluation = (q: Question) => {
    const resp = responses[q.id];
    if (!resp) {
      return { isAttempted: false, isCorrect: false, score: 0, statusLabel: 'Unattempted' };
    }

    if (q.type === 'mcq') {
      if (resp.selectedOption === undefined) {
        return { isAttempted: false, isCorrect: false, score: 0, statusLabel: 'Unattempted' };
      }
      const isCorrect = resp.selectedOption === Number(q.correctAnswer);
      return {
        isAttempted: true,
        isCorrect,
        score: isCorrect ? 4 : -1,
        statusLabel: isCorrect ? 'Correct (+4)' : 'Incorrect (-1)',
      };
    } else {
      // numerical
      if (!resp.numericalAnswer || resp.numericalAnswer.trim() === '') {
        return { isAttempted: false, isCorrect: false, score: 0, statusLabel: 'Unattempted' };
      }
      const cleanUserAns = resp.numericalAnswer.trim();
      const cleanCorrect = String(q.correctAnswer).trim();
      const isCorrect =
        cleanUserAns === cleanCorrect ||
        Math.abs(parseFloat(cleanUserAns) - parseFloat(cleanCorrect)) < 0.05;
      return {
        isAttempted: true,
        isCorrect,
        score: isCorrect ? 4 : -1,
        statusLabel: isCorrect ? 'Correct (+4)' : 'Incorrect (-1)',
      };
    }
  };

  // Filter questions
  const filteredQuestions = questions.filter((q) => {
    if (selectedSubject !== 'all' && q.subject !== selectedSubject) return false;
    if (selectedYear !== 'all' && q.year !== selectedYear) return false;

    const evalResult = getQuestionEvaluation(q);
    const resp = responses[q.id];
    const isMarked =
      resp?.status === 'marked_for_review' || resp?.status === 'answered_marked_for_review';

    if (selectedStatus === 'correct' && (!evalResult.isAttempted || !evalResult.isCorrect)) return false;
    if (selectedStatus === 'incorrect' && (!evalResult.isAttempted || evalResult.isCorrect)) return false;
    if (selectedStatus === 'unattempted' && evalResult.isAttempted) return false;
    if (selectedStatus === 'marked' && !isMarked) return false;

    if (searchQuery.trim() !== '') {
      const qLower = searchQuery.toLowerCase();
      const textMatch =
        q.questionText.toLowerCase().includes(qLower) ||
        q.topic.toLowerCase().includes(qLower) ||
        q.subtopic.toLowerCase().includes(qLower);
      if (!textMatch) return false;
    }

    return true;
  });

  // Calculate timing & score analytics across all questions
  let totalTimeTracked = 0;
  let attemptedCount = 0;
  let correctCount = 0;
  let fastestTime = Infinity;
  let slowestTime = 0;

  questions.forEach((q) => {
    const resp = responses[q.id];
    const t = resp?.timeSpentSeconds || 0;
    totalTimeTracked += t;
    if (resp && (resp.selectedOption !== undefined || resp.numericalAnswer)) {
      attemptedCount++;
      if (t > 0 && t < fastestTime) fastestTime = t;
      if (t > slowestTime) slowestTime = t;
    }
    const evalRes = getQuestionEvaluation(q);
    if (evalRes.isCorrect) correctCount++;
  });

  const avgTimePerAttempt = attemptedCount > 0 ? Math.round(totalTimeTracked / attemptedCount) : 0;

  return (
    <div className="fixed inset-0 z-50 bg-slate-950/70 backdrop-blur-xs flex items-center justify-center p-2 sm:p-4 animate-in fade-in duration-200">
      <div className="bg-white w-full max-w-5xl h-[92vh] rounded-xl shadow-2xl border border-slate-300 flex flex-col overflow-hidden text-slate-900">
        {/* Modal Top Header */}
        <div className="bg-slate-900 text-white px-4 sm:px-5 py-3 flex flex-wrap items-center justify-between gap-3 border-b border-slate-800">
          <div className="flex items-center gap-2 sm:gap-3 flex-wrap">
            <button
              onClick={onClose}
              className="flex items-center gap-1.5 px-2.5 py-1 rounded bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white border border-slate-700 text-xs font-semibold transition cursor-pointer shadow-xs"
              title="Return to Home Screen"
            >
              <Home className="w-3.5 h-3.5 text-sky-400" />
              <span>Home</span>
            </button>
            <ChevronRight className="w-3.5 h-3.5 text-slate-600 shrink-0" />
            <div className="w-7 h-7 rounded-lg bg-sky-500/20 text-sky-400 border border-sky-500/30 flex items-center justify-center">
              <BookOpen className="w-3.5 h-3.5" />
            </div>
            <div>
              <h2 className="text-sm sm:text-base font-bold tracking-wide flex items-center gap-2">
                <span>Answers & Question Time Tracking Console</span>
                <span className="text-[10px] sm:text-xs font-normal text-sky-300 bg-sky-950 px-2 py-0.5 rounded border border-sky-800 hidden sm:inline">
                  15-Year Solved Archive (2010-2024)
                </span>
              </h2>
              <p className="text-[11px] sm:text-xs text-slate-400">
                Inspect official answers, detailed step-by-step solutions, and time spent on each question.
              </p>
            </div>
          </div>

          <button
            id="close-answer-window-btn"
            onClick={onClose}
            className="text-slate-400 hover:text-white p-1.5 rounded-lg hover:bg-slate-800 transition cursor-pointer"
            title="Close Window"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Aggregate Time & Performance Metrics Ribbon */}
        <div className="bg-slate-50 border-b border-slate-200 px-5 py-3 grid grid-cols-2 sm:grid-cols-4 gap-3 text-xs">
          <div className="bg-white p-2.5 rounded-lg border border-slate-200 shadow-xs flex items-center gap-2.5">
            <div className="p-2 rounded-md bg-sky-50 text-sky-600">
              <Clock className="w-4 h-4" />
            </div>
            <div>
              <div className="text-slate-500 font-medium">Total Time Spent</div>
              <div className="text-sm font-bold text-slate-900 font-mono">
                {formatTime(totalTimeTracked)}
              </div>
            </div>
          </div>

          <div className="bg-white p-2.5 rounded-lg border border-slate-200 shadow-xs flex items-center gap-2.5">
            <div className="p-2 rounded-md bg-indigo-50 text-indigo-600">
              <Zap className="w-4 h-4" />
            </div>
            <div>
              <div className="text-slate-500 font-medium">Avg Time / Question</div>
              <div className="text-sm font-bold text-slate-900 font-mono">
                {avgTimePerAttempt > 0 ? formatTime(avgTimePerAttempt) : '--'}
              </div>
            </div>
          </div>

          <div className="bg-white p-2.5 rounded-lg border border-slate-200 shadow-xs flex items-center gap-2.5">
            <div className="p-2 rounded-md bg-emerald-50 text-emerald-600">
              <Award className="w-4 h-4" />
            </div>
            <div>
              <div className="text-slate-500 font-medium">Attempted & Accuracy</div>
              <div className="text-sm font-bold text-slate-900 font-mono">
                {attemptedCount}/{questions.length}{' '}
                <span className="text-emerald-600 font-sans text-xs">
                  ({attemptedCount > 0 ? Math.round((correctCount / attemptedCount) * 100) : 0}%)
                </span>
              </div>
            </div>
          </div>

          <div className="bg-white p-2.5 rounded-lg border border-slate-200 shadow-xs flex items-center gap-2.5">
            <div className="p-2 rounded-md bg-amber-50 text-amber-600">
              <ArrowUpDown className="w-4 h-4" />
            </div>
            <div>
              <div className="text-slate-500 font-medium">Fastest vs Slowest Q</div>
              <div className="text-xs font-bold text-slate-900 font-mono">
                ⚡ {fastestTime !== Infinity ? formatTime(fastestTime) : '--'} | ⏳{' '}
                {slowestTime > 0 ? formatTime(slowestTime) : '--'}
              </div>
            </div>
          </div>
        </div>

        {/* Filter Controls Bar */}
        <div className="bg-white border-b border-slate-200 px-5 py-2.5 flex flex-wrap items-center justify-between gap-3 text-xs">
          {/* Subject Filter Pills */}
          <div className="flex items-center gap-1.5 flex-wrap">
            <span className="text-slate-400 font-medium mr-1">Subject:</span>
            {(['all', 'physics', 'chemistry', 'mathematics'] as const).map((sub) => (
              <button
                key={sub}
                onClick={() => setSelectedSubject(sub)}
                className={`px-2.5 py-1 rounded font-semibold uppercase tracking-wider transition ${
                  selectedSubject === sub
                    ? 'bg-slate-900 text-white shadow-xs'
                    : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                }`}
              >
                {sub === 'all' ? 'All Subjects' : SUBJECT_METADATA[sub].name}
              </button>
            ))}
          </div>

          {/* Status & Year Filters */}
          <div className="flex items-center gap-2 flex-wrap">
            {/* Year Selector */}
            <select
              value={selectedYear}
              onChange={(e) =>
                setSelectedYear(e.target.value === 'all' ? 'all' : Number(e.target.value))
              }
              className="bg-slate-100 border border-slate-300 rounded px-2.5 py-1 text-slate-700 font-medium focus:outline-none focus:ring-1 focus:ring-sky-500"
            >
              <option value="all">All Years (2010 - 2024)</option>
              {YEARS_AVAILABLE.map((yr) => (
                <option key={yr} value={yr}>
                  JEE {yr}
                </option>
              ))}
            </select>

            {/* Status Selector */}
            <select
              value={selectedStatus}
              onChange={(e) => setSelectedStatus(e.target.value as any)}
              className="bg-slate-100 border border-slate-300 rounded px-2.5 py-1 text-slate-700 font-medium focus:outline-none focus:ring-1 focus:ring-sky-500"
            >
              <option value="all">All Statuses</option>
              <option value="correct">✅ Correct Only (+4)</option>
              <option value="incorrect">❌ Incorrect Only (-1)</option>
              <option value="unattempted">⚪ Unattempted</option>
              <option value="marked">🟣 Marked for Review</option>
            </select>

            {/* Expand / Collapse All */}
            <button
              onClick={expandAll}
              className="px-2 py-1 bg-slate-100 hover:bg-slate-200 text-slate-700 rounded border border-slate-300 transition"
            >
              Expand All
            </button>
            <button
              onClick={collapseAll}
              className="px-2 py-1 bg-slate-100 hover:bg-slate-200 text-slate-700 rounded border border-slate-300 transition"
            >
              Collapse
            </button>
          </div>
        </div>

        {/* Question List Scrollable View */}
        <div className="flex-1 overflow-y-auto p-4 sm:p-5 space-y-4 bg-slate-50/70">
          {filteredQuestions.length === 0 ? (
            <div className="bg-white rounded-lg p-10 text-center border border-slate-200 text-slate-500">
              <HelpCircle className="w-10 h-10 mx-auto text-slate-300 mb-2" />
              <div className="font-semibold text-sm">No questions match the current filter criteria</div>
              <div className="text-xs text-slate-400 mt-1">Try resetting the subject or status filter.</div>
            </div>
          ) : (
            filteredQuestions.map((q, qIndex) => {
              const resp = responses[q.id];
              const timeSpent = resp?.timeSpentSeconds || 0;
              const evaluation = getQuestionEvaluation(q);
              const isExpanded = expandedSolutions[q.id] ?? true;
              const subjectMeta = SUBJECT_METADATA[q.subject];

              // Time status analysis
              const isFast = timeSpent > 0 && timeSpent <= q.benchmarkTimeSeconds * 0.75;
              const isOvertime = timeSpent > q.benchmarkTimeSeconds * 1.25;

              return (
                <div
                  key={q.id}
                  id={`solution-card-${q.id}`}
                  className="bg-white rounded-xl border border-slate-200/90 shadow-xs overflow-hidden transition hover:border-slate-300"
                >
                  {/* Card Header Bar */}
                  <div className="bg-slate-50/80 px-4 py-3 border-b border-slate-200 flex flex-wrap items-center justify-between gap-2 text-xs">
                    <div className="flex items-center gap-2.5 flex-wrap">
                      <span className="font-bold text-slate-900 bg-white border border-slate-300 px-2 py-0.5 rounded shadow-2xs">
                        Q {qIndex + 1}
                      </span>
                      <span className={`px-2 py-0.5 rounded font-semibold border ${subjectMeta.accentBg}`}>
                        {subjectMeta.name}
                      </span>
                      <span className="text-slate-600 font-mono text-[11px] bg-slate-200/70 px-2 py-0.5 rounded">
                        JEE Main {q.year} • {q.shift}
                      </span>
                      <span className="text-slate-500 text-[11px] font-medium hidden sm:inline">
                        | {q.topic} ({q.subtopic})
                      </span>
                    </div>

                    {/* Result & Time Metric Badges */}
                    <div className="flex items-center gap-2">
                      {/* Live Question Time Metric */}
                      <div
                        className={`flex items-center gap-1.5 px-2.5 py-1 rounded font-mono font-semibold text-xs border ${
                          timeSpent === 0
                            ? 'bg-slate-100 text-slate-500 border-slate-200'
                            : isOvertime
                            ? 'bg-rose-50 text-rose-700 border-rose-200'
                            : isFast
                            ? 'bg-emerald-50 text-emerald-700 border-emerald-200'
                            : 'bg-sky-50 text-sky-700 border-sky-200'
                        }`}
                        title={`Time spent: ${formatTime(timeSpent)} | Recommended benchmark: ${formatTime(
                          q.benchmarkTimeSeconds
                        )}`}
                      >
                        <Clock className="w-3.5 h-3.5" />
                        <span>Spent: {formatTime(timeSpent)}</span>
                        <span className="text-[10px] text-slate-400 font-sans hidden md:inline">
                          (rec. {formatTime(q.benchmarkTimeSeconds)})
                        </span>
                      </div>

                      {/* Score Badge */}
                      <span
                        className={`px-2.5 py-1 rounded font-bold text-xs flex items-center gap-1 border ${
                          evaluation.isCorrect
                            ? 'bg-emerald-100 text-emerald-800 border-emerald-300'
                            : evaluation.isAttempted
                            ? 'bg-rose-100 text-rose-800 border-rose-300'
                            : 'bg-slate-100 text-slate-600 border-slate-200'
                        }`}
                      >
                        {evaluation.isCorrect ? (
                          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                        ) : evaluation.isAttempted ? (
                          <XCircle className="w-3.5 h-3.5 text-rose-600" />
                        ) : (
                          <AlertCircle className="w-3.5 h-3.5 text-slate-400" />
                        )}
                        <span>{evaluation.statusLabel}</span>
                      </span>

                      {/* Jump to question button if in active exam */}
                      {onSelectQuestionToTest && !isPostExam && (
                        <button
                          onClick={() => {
                            onSelectQuestionToTest(q.id);
                            onClose();
                          }}
                          className="text-xs text-sky-600 hover:text-sky-800 font-semibold px-2 py-1 rounded bg-sky-50 hover:bg-sky-100 transition"
                        >
                          Solve Now
                        </button>
                      )}
                    </div>
                  </div>

                  {/* Card Question Text */}
                  <div className="p-4 sm:p-5 space-y-4">
                    <div className="text-slate-900 text-sm sm:text-base leading-relaxed font-medium">
                      <MathRenderer content={q.questionText} />
                    </div>

                    {/* Options / Answer Comparison Matrix */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3 pt-2">
                      {/* Official Correct Answer Box */}
                      <div className="bg-emerald-50/70 border border-emerald-200 rounded-lg p-3">
                        <div className="text-[11px] font-bold text-emerald-800 uppercase tracking-wider mb-1 flex items-center gap-1">
                          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                          <span>Official Key Answer</span>
                        </div>
                        <div className="text-sm font-bold text-emerald-950 font-mono">
                          {q.type === 'mcq' && q.options ? (
                            <div>
                              <span>Option ({String.fromCharCode(65 + Number(q.correctAnswer))})</span>
                              <div className="text-xs font-normal text-emerald-900 mt-1">
                                <MathRenderer content={q.options[Number(q.correctAnswer)]} />
                              </div>
                            </div>
                          ) : (
                            <span>{q.correctAnswer}</span>
                          )}
                        </div>
                      </div>

                      {/* Student's Response Box */}
                      <div
                        className={`rounded-lg p-3 border ${
                          evaluation.isCorrect
                            ? 'bg-emerald-50/50 border-emerald-200'
                            : evaluation.isAttempted
                            ? 'bg-rose-50/60 border-rose-200'
                            : 'bg-slate-50 border-slate-200'
                        }`}
                      >
                        <div className="text-[11px] font-bold text-slate-700 uppercase tracking-wider mb-1 flex items-center justify-between">
                          <span>Your Response</span>
                          <span className="font-mono text-[10px] text-slate-500">
                            Time: {formatTime(timeSpent)}
                          </span>
                        </div>
                        <div className="text-sm font-bold text-slate-900">
                          {q.type === 'mcq' ? (
                            resp?.selectedOption !== undefined ? (
                              <div className={evaluation.isCorrect ? 'text-emerald-700' : 'text-rose-700'}>
                                Option ({String.fromCharCode(65 + resp.selectedOption)})
                              </div>
                            ) : (
                              <span className="text-slate-400 font-normal italic">Not Attempted</span>
                            )
                          ) : resp?.numericalAnswer ? (
                            <span
                              className={`font-mono ${
                                evaluation.isCorrect ? 'text-emerald-700' : 'text-rose-700'
                              }`}
                            >
                              {resp.numericalAnswer}
                            </span>
                          ) : (
                            <span className="text-slate-400 font-normal italic">Not Attempted</span>
                          )}
                        </div>
                      </div>
                    </div>

                    {/* Step-by-Step Solution Drawer */}
                    <div>
                      <button
                        onClick={() => toggleExpand(q.id)}
                        className="text-xs font-semibold text-sky-700 hover:text-sky-900 flex items-center gap-1.5 cursor-pointer py-1"
                      >
                        <Sparkles className="w-3.5 h-3.5 text-sky-600" />
                        <span>
                          {isExpanded ? 'Hide Detailed Solution' : 'View Full Step-by-Step Solution'}
                        </span>
                      </button>

                      {isExpanded && (
                        <div className="mt-3 bg-slate-50/90 border border-slate-200 rounded-lg p-4 space-y-3.5 text-xs sm:text-sm">
                          {/* Core Formulas */}
                          {q.solution.formulas.length > 0 && (
                            <div className="bg-sky-50/80 border border-sky-200/80 rounded-md p-3">
                              <div className="text-[11px] font-bold uppercase tracking-wider text-sky-900 mb-1.5">
                                Essential Formulas Used:
                              </div>
                              <div className="space-y-1 text-sky-950 font-mono">
                                {q.solution.formulas.map((f, fIdx) => (
                                  <div key={fIdx}>
                                    <MathRenderer content={f} />
                                  </div>
                                ))}
                              </div>
                            </div>
                          )}

                          {/* Steps */}
                          <div>
                            <div className="text-[11px] font-bold uppercase tracking-wider text-slate-600 mb-2">
                              Step-by-Step Derivation & Explanation:
                            </div>
                            <ol className="list-decimal pl-5 space-y-2 text-slate-800 leading-relaxed">
                              {q.solution.stepByStep.map((step, sIdx) => (
                                <li key={sIdx}>
                                  <MathRenderer content={step} />
                                </li>
                              ))}
                            </ol>
                          </div>

                          {/* Key Takeaway & Shortcut Trick */}
                          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-2 border-t border-slate-200">
                            <div className="bg-white p-2.5 rounded border border-slate-200">
                              <span className="font-bold text-slate-900 block mb-0.5">
                                Key Concept Tested:
                              </span>
                              <span className="text-slate-600">{q.solution.keyConcept}</span>
                            </div>

                            {q.solution.shortcutTip && (
                              <div className="bg-amber-50/80 p-2.5 rounded border border-amber-200">
                                <span className="font-bold text-amber-900 block mb-0.5 flex items-center gap-1">
                                  <Sparkles className="w-3 h-3 text-amber-600" /> Exam Shortcut / Trick:
                                </span>
                                <span className="text-amber-950">
                                  <MathRenderer content={q.solution.shortcutTip} />
                                </span>
                              </div>
                            )}
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              );
            })
          )}
        </div>

        {/* Footer */}
        <div className="bg-slate-50 border-t border-slate-200 px-5 py-3 flex items-center justify-between text-xs text-slate-500">
          <span>Showing {filteredQuestions.length} of {questions.length} questions</span>
          <button
            onClick={onClose}
            className="px-4 py-1.5 bg-slate-900 hover:bg-slate-800 text-white font-semibold rounded-md shadow-xs transition"
          >
            Done
          </button>
        </div>
      </div>
    </div>
  );
};

export default AnswerSolutionWindow;
