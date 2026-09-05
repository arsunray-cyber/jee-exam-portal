import React, { useState } from 'react';
import { Question, Subject, TestResult } from '../types';
import { SUBJECT_METADATA } from '../data/questions';
import {
  Trophy,
  Target,
  Clock,
  Zap,
  TrendingUp,
  AlertTriangle,
  CheckCircle2,
  XCircle,
  HelpCircle,
  BookOpen,
  RotateCcw,
  Sparkles,
  Award,
  BarChart3,
  Flame,
  ArrowRight
} from 'lucide-react';
import confetti from 'canvas-confetti';

interface PerformanceAnalyticsProps {
  testResult: TestResult;
  questions: Question[];
  onOpenSolutionWindow: () => void;
  onRetakeOrNewTest: () => void;
  pastResults: TestResult[];
}

export const PerformanceAnalytics: React.FC<PerformanceAnalyticsProps> = ({
  testResult,
  questions,
  onOpenSolutionWindow,
  onRetakeOrNewTest,
  pastResults,
}) => {
  const [activeTab, setActiveTab] = useState<'overview' | 'time_matrix' | 'topics' | 'history'>('overview');

  React.useEffect(() => {
    // Fire celebratory confetti if percentile > 90
    if (testResult.estimatedPercentile >= 90) {
      try {
        confetti({
          particleCount: 80,
          spread: 70,
          origin: { y: 0.6 },
        });
      } catch (e) {
        // ignore
      }
    }
  }, [testResult.estimatedPercentile]);

  const formatSeconds = (totalSecs: number) => {
    const mins = Math.floor(totalSecs / 60);
    const secs = totalSecs % 60;
    return `${mins}m ${secs}s`;
  };

  // Classify questions into the Speed vs Accuracy 4-Quadrant Matrix
  const timeMatrix = {
    sweetSpot: [] as { q: Question; time: number }[], // Fast & Correct
    sillyMistake: [] as { q: Question; time: number }[], // Fast & Incorrect
    hardEarned: [] as { q: Question; time: number }[], // Slow & Correct
    timeSink: [] as { q: Question; time: number }[], // Slow & Incorrect
  };

  questions.forEach((q) => {
    const resp = testResult.responses[q.id];
    if (!resp) return;
    const timeSpent = resp.timeSpentSeconds || 0;
    const isAttempted = resp.selectedOption !== undefined || Boolean(resp.numericalAnswer);
    if (!isAttempted) return;

    let isCorrect = false;
    if (q.type === 'mcq') {
      isCorrect = resp.selectedOption === Number(q.correctAnswer);
    } else {
      const cleanUser = (resp.numericalAnswer || '').trim();
      const cleanTarget = String(q.correctAnswer).trim();
      isCorrect =
        cleanUser === cleanTarget || Math.abs(parseFloat(cleanUser) - parseFloat(cleanTarget)) < 0.05;
    }

    const isFast = timeSpent <= q.benchmarkTimeSeconds;

    if (isFast && isCorrect) timeMatrix.sweetSpot.push({ q, time: timeSpent });
    else if (isFast && !isCorrect) timeMatrix.sillyMistake.push({ q, time: timeSpent });
    else if (!isFast && isCorrect) timeMatrix.hardEarned.push({ q, time: timeSpent });
    else if (!isFast && !isCorrect) timeMatrix.timeSink.push({ q, time: timeSpent });
  });

  // Calculate Topic Breakdown
  const topicStats: Record<string, { total: number; correct: number; incorrect: number; subject: Subject }> = {};
  questions.forEach((q) => {
    const resp = testResult.responses[q.id];
    if (!topicStats[q.topic]) {
      topicStats[q.topic] = { total: 0, correct: 0, incorrect: 0, subject: q.subject };
    }
    topicStats[q.topic].total++;

    if (resp && (resp.selectedOption !== undefined || resp.numericalAnswer)) {
      let isCorrect = false;
      if (q.type === 'mcq') {
        isCorrect = resp.selectedOption === Number(q.correctAnswer);
      } else {
        const cleanUser = (resp.numericalAnswer || '').trim();
        const cleanTarget = String(q.correctAnswer).trim();
        isCorrect =
          cleanUser === cleanTarget || Math.abs(parseFloat(cleanUser) - parseFloat(cleanTarget)) < 0.05;
      }

      if (isCorrect) topicStats[q.topic].correct++;
      else topicStats[q.topic].incorrect++;
    }
  });

  // Generate Personalized Improvement Insights
  const recommendations: { title: string; desc: string; type: 'warning' | 'success' | 'tip' }[] = [];

  if (timeMatrix.sillyMistake.length > 0) {
    recommendations.push({
      title: `${timeMatrix.sillyMistake.length} Rush Errors Detected`,
      desc: 'You solved questions faster than the benchmark but made calculation or reading mistakes. Spend 15-20 extra seconds re-checking unit conversions and options.',
      type: 'warning',
    });
  }

  if (timeMatrix.timeSink.length > 0) {
    recommendations.push({
      title: `${timeMatrix.timeSink.length} Time Trap Questions`,
      desc: 'You spent substantial time on questions that ultimately yielded negative marks. In JEE Mains, learn to leave questions after 2 minutes if the path is unclear.',
      type: 'warning',
    });
  }

  if (testResult.overallAccuracy >= 80) {
    recommendations.push({
      title: 'Remarkable Accuracy (>80%)',
      desc: 'Your precision is aligned with top 1 percentile JEE Mains performers. Work on speed to attempt more numerical questions.',
      type: 'success',
    });
  } else {
    recommendations.push({
      title: 'Negative Marking Management',
      desc: 'Incorrect attempts cost -1 mark each. In JEE Mains, avoiding 3 blind guesses equals gaining almost 1 full question score.',
      type: 'tip',
    });
  }

  return (
    <div className="flex-1 bg-slate-100 overflow-y-auto p-4 sm:p-6 select-text text-slate-900">
      <div className="max-w-6xl mx-auto space-y-6">
        {/* Top Celebration / Score Banner */}
        <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-6 overflow-hidden relative">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            <div>
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-sky-600 mb-1">
                <Trophy className="w-4 h-4" />
                <span>Performance Report • {testResult.title}</span>
              </div>
              <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
                Scorecard & Examination Analytics
              </h1>
              <p className="text-sm text-slate-500 mt-1">
                Attempted on {testResult.date} • Total Duration: {formatSeconds(testResult.totalTimeSpentSeconds)}
              </p>
            </div>

            {/* Score & Percentile Highlight */}
            <div className="flex items-center gap-4 bg-slate-50 border border-slate-200 p-4 rounded-xl shrink-0">
              <div className="text-center px-3 border-r border-slate-200">
                <div className="text-xs uppercase text-slate-500 font-semibold">Total Score</div>
                <div className="text-3xl font-black text-slate-900 font-mono">
                  {testResult.totalScore}
                  <span className="text-sm font-normal text-slate-400">/{testResult.maxScore}</span>
                </div>
              </div>

              <div className="text-center px-3 border-r border-slate-200">
                <div className="text-xs uppercase text-slate-500 font-semibold">Est. Percentile</div>
                <div className="text-3xl font-black text-emerald-600 font-mono">
                  {testResult.estimatedPercentile.toFixed(2)}
                  <span className="text-xs font-semibold text-emerald-700">%ile</span>
                </div>
              </div>

              <div className="text-center px-3">
                <div className="text-xs uppercase text-slate-500 font-semibold">Projected AIR</div>
                <div className="text-2xl font-black text-indigo-600 font-mono">
                  ~{testResult.estimatedAIR.toLocaleString()}
                </div>
              </div>
            </div>
          </div>

          {/* Quick Action Buttons */}
          <div className="mt-6 pt-5 border-t border-slate-100 flex flex-wrap items-center justify-between gap-3">
            <div className="flex items-center gap-2">
              <button
                id="analytics-open-solutions-btn"
                onClick={onOpenSolutionWindow}
                className="bg-sky-600 hover:bg-sky-500 text-white font-semibold px-4 py-2.5 rounded-lg shadow-sm text-xs uppercase tracking-wider flex items-center gap-2 transition cursor-pointer"
              >
                <BookOpen className="w-4 h-4" />
                <span>View Full Answers & Solutions Window</span>
              </button>

              <button
                id="analytics-retake-btn"
                onClick={onRetakeOrNewTest}
                className="bg-slate-100 hover:bg-slate-200 text-slate-700 font-semibold px-4 py-2.5 rounded-lg border border-slate-300 text-xs uppercase tracking-wider flex items-center gap-2 transition cursor-pointer"
              >
                <RotateCcw className="w-4 h-4" />
                <span>Take Another Mock Test</span>
              </button>
            </div>

            {/* Accuracy and Time Pills */}
            <div className="flex items-center gap-3 text-xs">
              <span className="bg-emerald-50 text-emerald-700 border border-emerald-200 px-3 py-1 rounded-full font-semibold">
                Accuracy: {testResult.overallAccuracy}%
              </span>
              <span className="bg-indigo-50 text-indigo-700 border border-indigo-200 px-3 py-1 rounded-full font-semibold">
                Attempt Rate: {Math.round((testResult.attempted / testResult.totalQuestions) * 100)}%
              </span>
            </div>
          </div>
        </div>

        {/* Navigation Tabs */}
        <div className="flex items-center gap-2 border-b border-slate-200 bg-white px-4 py-2 rounded-xl shadow-xs">
          {[
            { id: 'overview', label: 'Subject Breakdown & Metrics', icon: BarChart3 },
            { id: 'time_matrix', label: 'Per-Question Time & Speed Matrix', icon: Clock },
            { id: 'topics', label: 'Topic Strengths & Weaknesses', icon: Target },
            { id: 'history', label: 'Progress History', icon: TrendingUp },
          ].map((tab) => {
            const Icon = tab.icon;
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                id={`tab-${tab.id}`}
                onClick={() => setActiveTab(tab.id as any)}
                className={`flex items-center gap-2 px-4 py-2 rounded-lg text-xs font-bold uppercase tracking-wider transition ${
                  isActive
                    ? 'bg-slate-900 text-white shadow-xs'
                    : 'text-slate-600 hover:bg-slate-100'
                }`}
              >
                <Icon className="w-4 h-4" />
                <span>{tab.label}</span>
              </button>
            );
          })}
        </div>

        {/* Tab 1: Subject Breakdown */}
        {activeTab === 'overview' && (
          <div className="space-y-6">
            {/* 3 Subject Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {(['physics', 'chemistry', 'mathematics'] as Subject[]).map((sub) => {
                const meta = SUBJECT_METADATA[sub];
                const stats = testResult.subjectStats[sub];

                return (
                  <div
                    key={sub}
                    className="bg-white rounded-xl border border-slate-200 p-5 shadow-xs space-y-4"
                  >
                    <div className="flex items-center justify-between border-b border-slate-100 pb-3">
                      <div className="flex items-center gap-2">
                        <span className={`px-2.5 py-1 rounded font-bold text-xs uppercase border ${meta.accentBg}`}>
                          {meta.name}
                        </span>
                      </div>
                      <div className="text-lg font-black font-mono text-slate-900">
                        {stats.score}{' '}
                        <span className="text-xs font-normal text-slate-400">
                          / {stats.totalQuestions * 4}
                        </span>
                      </div>
                    </div>

                    <div className="space-y-2.5 text-xs">
                      <div className="flex justify-between text-slate-600">
                        <span>Attempted:</span>
                        <span className="font-bold text-slate-900">
                          {stats.attempted} / {stats.totalQuestions}
                        </span>
                      </div>

                      <div className="flex justify-between text-slate-600">
                        <span>Correct / Incorrect:</span>
                        <span className="font-bold">
                          <span className="text-emerald-600">{stats.correct}</span> /{' '}
                          <span className="text-rose-600">{stats.incorrect}</span>
                        </span>
                      </div>

                      <div className="flex justify-between text-slate-600">
                        <span>Accuracy:</span>
                        <span className="font-bold text-slate-900">{stats.accuracy}%</span>
                      </div>

                      <div className="flex justify-between text-slate-600">
                        <span>Time Spent:</span>
                        <span className="font-bold text-slate-900 font-mono">
                          {formatSeconds(stats.timeSpentSeconds)}
                        </span>
                      </div>

                      <div className="flex justify-between text-slate-600">
                        <span>Avg Time / Question:</span>
                        <span className="font-bold text-slate-900 font-mono">
                          {formatSeconds(stats.avgTimePerQuestion)}
                        </span>
                      </div>
                    </div>

                    {/* Progress visual bar */}
                    <div className="pt-2 border-t border-slate-100">
                      <div className="h-2 w-full bg-slate-100 rounded-full overflow-hidden flex">
                        <div
                          style={{
                            width: `${stats.totalQuestions ? (stats.correct / stats.totalQuestions) * 100 : 0}%`,
                          }}
                          className="bg-emerald-500 h-full"
                          title="Correct"
                        />
                        <div
                          style={{
                            width: `${stats.totalQuestions ? (stats.incorrect / stats.totalQuestions) * 100 : 0}%`,
                          }}
                          className="bg-rose-500 h-full"
                          title="Incorrect"
                        />
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Actionable Improvement Roadmap */}
            <div className="bg-white rounded-xl border border-slate-200 p-6 shadow-xs space-y-4">
              <div className="flex items-center gap-2">
                <Sparkles className="w-5 h-5 text-amber-500" />
                <h3 className="text-base font-bold text-slate-900">
                  Targeted Performance Improvement Roadmap
                </h3>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {recommendations.map((rec, idx) => (
                  <div
                    key={idx}
                    className={`p-4 rounded-xl border space-y-2 text-xs ${
                      rec.type === 'warning'
                        ? 'bg-amber-50/70 border-amber-200 text-amber-900'
                        : rec.type === 'success'
                        ? 'bg-emerald-50/70 border-emerald-200 text-emerald-900'
                        : 'bg-sky-50/70 border-sky-200 text-sky-900'
                    }`}
                  >
                    <div className="font-bold text-sm flex items-center gap-1.5">
                      {rec.type === 'warning' ? (
                        <AlertTriangle className="w-4 h-4 text-amber-600 shrink-0" />
                      ) : rec.type === 'success' ? (
                        <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                      ) : (
                        <Zap className="w-4 h-4 text-sky-600 shrink-0" />
                      )}
                      <span>{rec.title}</span>
                    </div>
                    <p className="leading-relaxed opacity-90">{rec.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Tab 2: Speed vs Accuracy Matrix */}
        {activeTab === 'time_matrix' && (
          <div className="bg-white rounded-xl border border-slate-200 p-6 shadow-xs space-y-6">
            <div>
              <h3 className="text-base font-bold text-slate-900">
                Speed vs Accuracy Matrix (Time-per-Question Analytics)
              </h3>
              <p className="text-xs text-slate-500 mt-1">
                Identifies how effectively you converted time investment into positive scores.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {/* Quadrant 1: The Sweet Spot */}
              <div className="bg-emerald-50/80 border border-emerald-200 rounded-xl p-4 space-y-3">
                <div className="flex items-center justify-between">
                  <span className="font-bold text-emerald-900 text-xs uppercase flex items-center gap-1.5">
                    <Zap className="w-4 h-4 text-emerald-600" /> The Sweet Spot (Fast & Correct)
                  </span>
                  <span className="bg-emerald-200 text-emerald-800 text-xs font-bold px-2 py-0.5 rounded">
                    {timeMatrix.sweetSpot.length} Qs
                  </span>
                </div>
                <p className="text-xs text-emerald-800">
                  High mastery! Solved accurately within the recommended benchmark time.
                </p>
                <div className="space-y-1.5">
                  {timeMatrix.sweetSpot.map(({ q, time }) => (
                    <div
                      key={q.id}
                      className="bg-white p-2 rounded border border-emerald-200 text-xs flex items-center justify-between"
                    >
                      <span className="font-medium text-slate-800 truncate">
                        {q.topic} ({q.year})
                      </span>
                      <span className="font-mono text-emerald-700 font-bold shrink-0">
                        {formatSeconds(time)}
                      </span>
                    </div>
                  ))}
                  {timeMatrix.sweetSpot.length === 0 && (
                    <div className="text-xs text-slate-400 italic">No questions in this quadrant.</div>
                  )}
                </div>
              </div>

              {/* Quadrant 2: Silly Mistakes */}
              <div className="bg-amber-50/80 border border-amber-200 rounded-xl p-4 space-y-3">
                <div className="flex items-center justify-between">
                  <span className="font-bold text-amber-900 text-xs uppercase flex items-center gap-1.5">
                    <AlertTriangle className="w-4 h-4 text-amber-600" /> Rush Mistakes (Fast & Incorrect)
                  </span>
                  <span className="bg-amber-200 text-amber-800 text-xs font-bold px-2 py-0.5 rounded">
                    {timeMatrix.sillyMistake.length} Qs
                  </span>
                </div>
                <p className="text-xs text-amber-800">
                  Rushed attempts that cost -1 negative mark. Re-read carefully before clicking Save!
                </p>
                <div className="space-y-1.5">
                  {timeMatrix.sillyMistake.map(({ q, time }) => (
                    <div
                      key={q.id}
                      className="bg-white p-2 rounded border border-amber-200 text-xs flex items-center justify-between"
                    >
                      <span className="font-medium text-slate-800 truncate">
                        {q.topic} ({q.year})
                      </span>
                      <span className="font-mono text-amber-700 font-bold shrink-0">
                        {formatSeconds(time)}
                      </span>
                    </div>
                  ))}
                  {timeMatrix.sillyMistake.length === 0 && (
                    <div className="text-xs text-slate-400 italic">No rush errors. Excellent care!</div>
                  )}
                </div>
              </div>

              {/* Quadrant 3: Hard Earned */}
              <div className="bg-sky-50/80 border border-sky-200 rounded-xl p-4 space-y-3">
                <div className="flex items-center justify-between">
                  <span className="font-bold text-sky-900 text-xs uppercase flex items-center gap-1.5">
                    <CheckCircle2 className="w-4 h-4 text-sky-600" /> Hard Earned (Slow & Correct)
                  </span>
                  <span className="bg-sky-200 text-sky-800 text-xs font-bold px-2 py-0.5 rounded">
                    {timeMatrix.hardEarned.length} Qs
                  </span>
                </div>
                <p className="text-xs text-sky-800">
                  Accurate answer, but exceeded benchmark time. Learn shortcut formulas to boost speed.
                </p>
                <div className="space-y-1.5">
                  {timeMatrix.hardEarned.map(({ q, time }) => (
                    <div
                      key={q.id}
                      className="bg-white p-2 rounded border border-sky-200 text-xs flex items-center justify-between"
                    >
                      <span className="font-medium text-slate-800 truncate">
                        {q.topic} ({q.year})
                      </span>
                      <span className="font-mono text-sky-700 font-bold shrink-0">
                        {formatSeconds(time)}
                      </span>
                    </div>
                  ))}
                  {timeMatrix.hardEarned.length === 0 && (
                    <div className="text-xs text-slate-400 italic">No overtime correct questions.</div>
                  )}
                </div>
              </div>

              {/* Quadrant 4: Time Sinks */}
              <div className="bg-rose-50/80 border border-rose-200 rounded-xl p-4 space-y-3">
                <div className="flex items-center justify-between">
                  <span className="font-bold text-rose-900 text-xs uppercase flex items-center gap-1.5">
                    <XCircle className="w-4 h-4 text-rose-600" /> Time Sinks (Slow & Incorrect)
                  </span>
                  <span className="bg-rose-200 text-rose-800 text-xs font-bold px-2 py-0.5 rounded">
                    {timeMatrix.timeSink.length} Qs
                  </span>
                </div>
                <p className="text-xs text-rose-800">
                  Critical drain! Spent excessive time and received -1. Abandon these earlier during CBT.
                </p>
                <div className="space-y-1.5">
                  {timeMatrix.timeSink.map(({ q, time }) => (
                    <div
                      key={q.id}
                      className="bg-white p-2 rounded border border-rose-200 text-xs flex items-center justify-between"
                    >
                      <span className="font-medium text-slate-800 truncate">
                        {q.topic} ({q.year})
                      </span>
                      <span className="font-mono text-rose-700 font-bold shrink-0">
                        {formatSeconds(time)}
                      </span>
                    </div>
                  ))}
                  {timeMatrix.timeSink.length === 0 && (
                    <div className="text-xs text-slate-400 italic">No time sinks! Great time discipline.</div>
                  )}
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Tab 3: Topic Strengths & Weaknesses */}
        {activeTab === 'topics' && (
          <div className="bg-white rounded-xl border border-slate-200 p-6 shadow-xs space-y-4">
            <div>
              <h3 className="text-base font-bold text-slate-900">Topic-by-Topic Competency</h3>
              <p className="text-xs text-slate-500 mt-1">
                Overview of questions answered across syllabus chapters.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
              {Object.entries(topicStats).map(([topic, stats]) => {
                const accuracy = stats.total > 0 ? Math.round((stats.correct / stats.total) * 100) : 0;
                const isStrong = accuracy >= 80;
                const isWeak = stats.incorrect > 0 && accuracy < 50;

                return (
                  <div
                    key={topic}
                    className="p-3.5 rounded-lg border border-slate-200 bg-slate-50/60 space-y-2 text-xs"
                  >
                    <div className="flex items-center justify-between">
                      <span className="font-bold text-slate-900 truncate">{topic}</span>
                      <span
                        className={`px-2 py-0.5 rounded text-[10px] font-bold ${
                          isStrong
                            ? 'bg-emerald-100 text-emerald-800'
                            : isWeak
                            ? 'bg-rose-100 text-rose-800'
                            : 'bg-amber-100 text-amber-800'
                        }`}
                      >
                        {isStrong ? 'Strong' : isWeak ? 'Needs Work' : 'Moderate'}
                      </span>
                    </div>
                    <div className="flex justify-between text-slate-500">
                      <span>Accuracy:</span>
                      <span className="font-bold text-slate-800">{accuracy}%</span>
                    </div>
                    <div className="flex justify-between text-slate-500">
                      <span>Correct / Incorrect:</span>
                      <span>
                        <strong className="text-emerald-600">{stats.correct}</strong> /{' '}
                        <strong className="text-rose-600">{stats.incorrect}</strong>
                      </span>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        )}

        {/* Tab 4: Progress History */}
        {activeTab === 'history' && (
          <div className="bg-white rounded-xl border border-slate-200 p-6 shadow-xs space-y-4">
            <div>
              <h3 className="text-base font-bold text-slate-900">Past Test History & Progression</h3>
              <p className="text-xs text-slate-500 mt-1">
                Your past mock sessions saved in local storage.
              </p>
            </div>

            {pastResults.length === 0 ? (
              <div className="p-8 text-center text-slate-400 text-xs">
                This is your first completed test session! Future test results will be tracked here.
              </div>
            ) : (
              <div className="overflow-x-auto">
                <table className="w-full text-left text-xs border border-slate-200 rounded-lg overflow-hidden">
                  <thead className="bg-slate-50 border-b border-slate-200 text-slate-600 uppercase font-semibold">
                    <tr>
                      <th className="p-3">Test Title</th>
                      <th className="p-3">Date</th>
                      <th className="p-3">Score</th>
                      <th className="p-3">Percentile</th>
                      <th className="p-3">Accuracy</th>
                      <th className="p-3">Time Spent</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-200">
                    {pastResults.map((r) => (
                      <tr key={r.id} className="hover:bg-slate-50">
                        <td className="p-3 font-semibold text-slate-900">{r.title}</td>
                        <td className="p-3 text-slate-500">{r.date}</td>
                        <td className="p-3 font-bold font-mono text-slate-900">
                          {r.totalScore}/{r.maxScore}
                        </td>
                        <td className="p-3 font-bold font-mono text-emerald-600">
                          {r.estimatedPercentile.toFixed(1)}%ile
                        </td>
                        <td className="p-3 font-semibold">{r.overallAccuracy}%</td>
                        <td className="p-3 font-mono text-slate-600">
                          {formatSeconds(r.totalTimeSpentSeconds)}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default PerformanceAnalytics;
