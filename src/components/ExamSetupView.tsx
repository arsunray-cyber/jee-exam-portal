import React, { useState } from 'react';
import { Subject, TestResult, GoogleUser } from '../types';
import { YEARS_AVAILABLE, SUBJECT_METADATA } from '../data/questions';
import { APP_VERSION, BUILD_TIMESTAMP, BUILD_HASH } from '../version';
import VersionBadge from './VersionBadge';
import GoogleAuthButton from './GoogleAuthButton';
import {
  BookOpen,
  Trophy,
  Play,
  Sparkles,
  Clock,
  CheckCircle2,
  Zap,
  BarChart2,
  Calendar,
  Layers,
  ChevronRight,
  ShieldCheck,
  UserCheck
} from 'lucide-react';

interface ExamSetupViewProps {
  onStartExam: (config: {
    year: number | 'all';
    subjectFilter: 'all' | Subject;
    mode: 'exam' | 'practice';
    durationMinutes: number;
  }) => void;
  onOpenAnswersWindow: () => void;
  onOpenPastAnalytics: () => void;
  pastResults: TestResult[];
  user: GoogleUser | null;
  onLogin: (user: GoogleUser) => void;
  onLogout: () => void;
}

export const ExamSetupView: React.FC<ExamSetupViewProps> = ({
  onStartExam,
  onOpenAnswersWindow,
  onOpenPastAnalytics,
  pastResults,
  user,
  onLogin,
  onLogout,
}) => {
  const [selectedYear, setSelectedYear] = useState<number | 'all'>('all');
  const [selectedSubject, setSelectedSubject] = useState<'all' | Subject>('all');
  const [testMode, setTestMode] = useState<'exam' | 'practice'>('exam');
  const [customTimeMinutes, setCustomTimeMinutes] = useState<number>(60);

  const handleStart = () => {
    onStartExam({
      year: selectedYear,
      subjectFilter: selectedSubject,
      mode: testMode,
      durationMinutes: customTimeMinutes,
    });
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col select-text">
      {/* Topmost NTA Style Nav */}
      <nav className="bg-slate-900 border-b border-slate-800 px-4 sm:px-8 py-3.5 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 rounded-lg bg-sky-600 flex items-center justify-center font-bold text-white tracking-widest text-sm shadow-md shadow-sky-900/40">
            JEE
          </div>
          <div>
            <div className="text-sm sm:text-base font-extrabold text-white flex items-center gap-2">
              <span>JEE (Main) Examination Portal</span>
              <span className="text-[10px] uppercase font-bold bg-amber-500/20 text-amber-300 border border-amber-500/40 px-2 py-0.5 rounded">
                2020 - 2024 PYQs
              </span>
            </div>
            <div className="text-xs text-slate-400 hidden sm:block">
              Computer Based Test (CBT) Simulation & Real-time Analytics System
            </div>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <VersionBadge />

          <button
            id="browse-solutions-archive-btn"
            onClick={onOpenAnswersWindow}
            className="flex items-center gap-1.5 bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-700 px-3 py-1.5 rounded-lg text-xs font-semibold transition"
            title="Browse all 5 years questions, answers, and solutions immediately"
          >
            <BookOpen className="w-4 h-4 text-sky-400" />
            <span className="hidden md:inline">Answers & Solutions</span>
          </button>

          {pastResults.length > 0 && (
            <button
              id="view-past-analytics-btn"
              onClick={onOpenPastAnalytics}
              className="flex items-center gap-1.5 bg-indigo-900/40 hover:bg-indigo-800/60 text-indigo-300 border border-indigo-700/60 px-3 py-1.5 rounded-lg text-xs font-semibold transition"
            >
              <BarChart2 className="w-4 h-4 text-indigo-400" />
              <span className="hidden sm:inline">Analytics</span>
            </button>
          )}

          {/* Google Sign In / Profile */}
          <GoogleAuthButton user={user} onLogin={onLogin} onLogout={onLogout} />
        </div>
      </nav>

      {/* Main Content Area */}
      <main className="flex-1 max-w-5xl mx-auto w-full p-4 sm:p-8 space-y-8">
        {/* Banner */}
        <div className="bg-linear-to-r from-slate-900 via-slate-900 to-sky-950 border border-slate-800 rounded-2xl p-6 sm:p-8 shadow-xl space-y-4">
          <div className="flex items-center gap-2 text-xs font-bold text-sky-400 uppercase tracking-wider">
            <ShieldCheck className="w-4 h-4" />
            <span>Official NTA CBT Pattern • Per-Question Time Tracking • Instant Answers Window</span>
          </div>

          <h1 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight leading-tight">
            Practice Real Last 5 Years JEE Mains Papers with Precision Timing & Solutions
          </h1>

          <p className="text-sm sm:text-base text-slate-300 max-w-3xl leading-relaxed">
            Take official simulated mock tests, track exact seconds spent on each question against benchmark recommended times, and access instant step-by-step solutions with comprehensive diagnostic analytics.
          </p>

          {/* Quick Metrics Bar */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-2 text-xs">
            <div className="bg-slate-950/70 border border-slate-800 p-3 rounded-xl">
              <div className="text-slate-400 font-medium">Question Years</div>
              <div className="text-lg font-bold text-white font-mono">2020 – 2024</div>
            </div>
            <div className="bg-slate-950/70 border border-slate-800 p-3 rounded-xl">
              <div className="text-slate-400 font-medium">Marking Scheme</div>
              <div className="text-lg font-bold text-emerald-400 font-mono">+4.00 / -1.00</div>
            </div>
            <div className="bg-slate-950/70 border border-slate-800 p-3 rounded-xl">
              <div className="text-slate-400 font-medium">Time Tracking</div>
              <div className="text-lg font-bold text-sky-400 font-mono">Per-Question Live</div>
            </div>
            <div className="bg-slate-950/70 border border-slate-800 p-3 rounded-xl">
              <div className="text-slate-400 font-medium">Solution Window</div>
              <div className="text-lg font-bold text-amber-400 font-mono">Step-by-Step</div>
            </div>
          </div>
        </div>

        {/* Candidate Identity Status Card */}
        <div className="bg-slate-900/90 border border-slate-800 rounded-xl p-4 flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            {user?.picture ? (
              <img
                src={user.picture}
                alt={user.name}
                className="w-10 h-10 rounded-full border-2 border-sky-500 object-cover"
                referrerPolicy="no-referrer"
              />
            ) : (
              <div className="w-10 h-10 rounded-full bg-sky-600/30 border border-sky-500/50 flex items-center justify-center text-sky-300 font-bold text-sm">
                {user ? user.name.charAt(0).toUpperCase() : <UserCheck className="w-5 h-5 text-sky-400" />}
              </div>
            )}
            <div>
              <div className="flex items-center gap-2">
                <span className="text-xs text-slate-400 font-medium">Candidate Profile:</span>
                <span className="text-sm font-bold text-white">
                  {user ? user.name : 'AR. SunRay (Default Profile)'}
                </span>
                {user && (
                  <span className="text-[10px] bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 px-2 py-0.5 rounded font-medium flex items-center gap-1">
                    <ShieldCheck className="w-3 h-3" /> Google Authenticated
                  </span>
                )}
              </div>
              <div className="text-xs text-slate-400 flex items-center gap-3 mt-0.5">
                <span>{user ? user.email : 'Candidate Roll: 2403019842'}</span>
                <span className="text-slate-600">•</span>
                <span className="text-slate-300 font-mono text-[11px]">
                  Roll ID: {user?.candidateRollNumber || '2403019842'}
                </span>
              </div>
            </div>
          </div>

          <div className="flex items-center gap-2">
            {!user ? (
              <GoogleAuthButton user={user} onLogin={onLogin} onLogout={onLogout} />
            ) : (
              <div className="flex items-center gap-2">
                <span className="text-xs text-emerald-400 font-mono bg-emerald-950/50 border border-emerald-800/60 px-3 py-1.5 rounded-lg">
                  Scorecard Auto-Sync: Active
                </span>
              </div>
            )}
          </div>
        </div>

        {/* Configuration Card */}
        <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 sm:p-8 shadow-xl space-y-6">
          <h2 className="text-lg font-bold text-white flex items-center gap-2">
            <Layers className="w-5 h-5 text-sky-400" />
            <span>Configure Test Session</span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* 1. Year Selection */}
            <div className="space-y-2.5">
              <label className="text-xs font-bold uppercase tracking-wider text-slate-300 flex items-center gap-1.5">
                <Calendar className="w-4 h-4 text-sky-400" />
                <span>Select Question Year</span>
              </label>
              <div className="grid grid-cols-3 gap-2">
                <button
                  id="year-all-btn"
                  onClick={() => setSelectedYear('all')}
                  className={`py-2.5 px-3 rounded-lg text-xs font-bold transition border cursor-pointer ${
                    selectedYear === 'all'
                      ? 'bg-sky-600 text-white border-sky-400 shadow-md shadow-sky-600/30'
                      : 'bg-slate-800 text-slate-300 border-slate-700 hover:bg-slate-700'
                  }`}
                >
                  All 5 Years
                </button>
                {YEARS_AVAILABLE.map((yr) => (
                  <button
                    key={yr}
                    id={`year-${yr}-btn`}
                    onClick={() => setSelectedYear(yr)}
                    className={`py-2.5 px-3 rounded-lg text-xs font-bold transition border cursor-pointer ${
                      selectedYear === yr
                        ? 'bg-sky-600 text-white border-sky-400 shadow-md shadow-sky-600/30'
                        : 'bg-slate-800 text-slate-300 border-slate-700 hover:bg-slate-700'
                    }`}
                  >
                    {yr} Papers
                  </button>
                ))}
              </div>
            </div>

            {/* 2. Subject Selection */}
            <div className="space-y-2.5">
              <label className="text-xs font-bold uppercase tracking-wider text-slate-300 flex items-center gap-1.5">
                <Layers className="w-4 h-4 text-sky-400" />
                <span>Select Subject Focus</span>
              </label>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                <button
                  id="subj-all-btn"
                  onClick={() => setSelectedSubject('all')}
                  className={`py-2.5 px-3 rounded-lg text-xs font-bold transition border cursor-pointer ${
                    selectedSubject === 'all'
                      ? 'bg-sky-600 text-white border-sky-400 shadow-md shadow-sky-600/30'
                      : 'bg-slate-800 text-slate-300 border-slate-700 hover:bg-slate-700'
                  }`}
                >
                  Full Test
                </button>
                {(['physics', 'chemistry', 'mathematics'] as Subject[]).map((subj) => (
                  <button
                    key={subj}
                    id={`subj-${subj}-btn`}
                    onClick={() => setSelectedSubject(subj)}
                    className={`py-2.5 px-2.5 rounded-lg text-xs font-bold transition border cursor-pointer ${
                      selectedSubject === subj
                        ? 'bg-sky-600 text-white border-sky-400 shadow-md shadow-sky-600/30'
                        : 'bg-slate-800 text-slate-300 border-slate-700 hover:bg-slate-700'
                    }`}
                  >
                    {SUBJECT_METADATA[subj].name}
                  </button>
                ))}
              </div>
            </div>

            {/* 3. Test Mode */}
            <div className="space-y-2.5">
              <label className="text-xs font-bold uppercase tracking-wider text-slate-300 flex items-center gap-1.5">
                <Sparkles className="w-4 h-4 text-amber-400" />
                <span>Test Mode</span>
              </label>
              <div className="grid grid-cols-2 gap-2">
                <button
                  id="mode-exam-btn"
                  onClick={() => setTestMode('exam')}
                  className={`p-3 rounded-xl border text-left transition cursor-pointer ${
                    testMode === 'exam'
                      ? 'bg-sky-950/80 border-sky-500 text-white ring-1 ring-sky-400'
                      : 'bg-slate-800/60 border-slate-700 text-slate-300 hover:bg-slate-800'
                  }`}
                >
                  <div className="font-bold text-xs flex items-center gap-1.5 mb-1">
                    <Clock className="w-3.5 h-3.5 text-sky-400" />
                    <span>Timed Mock Exam</span>
                  </div>
                  <div className="text-[11px] text-slate-400">
                    Real CBT environment. Solutions revealed after test submission.
                  </div>
                </button>

                <button
                  id="mode-practice-btn"
                  onClick={() => setTestMode('practice')}
                  className={`p-3 rounded-xl border text-left transition cursor-pointer ${
                    testMode === 'practice'
                      ? 'bg-emerald-950/80 border-emerald-500 text-white ring-1 ring-emerald-400'
                      : 'bg-slate-800/60 border-slate-700 text-slate-300 hover:bg-slate-800'
                  }`}
                >
                  <div className="font-bold text-xs flex items-center gap-1.5 mb-1">
                    <Sparkles className="w-3.5 h-3.5 text-emerald-400" />
                    <span>Practice & Learn Mode</span>
                  </div>
                  <div className="text-[11px] text-slate-400">
                    Instant answer & step-by-step solution toggle on each question.
                  </div>
                </button>
              </div>
            </div>

            {/* 4. Duration Selector */}
            <div className="space-y-2.5">
              <label className="text-xs font-bold uppercase tracking-wider text-slate-300 flex items-center gap-1.5">
                <Clock className="w-4 h-4 text-sky-400" />
                <span>Session Duration</span>
              </label>
              <div className="grid grid-cols-3 gap-2">
                {[
                  { label: '30 Mins (Sprint)', val: 30 },
                  { label: '60 Mins (Standard)', val: 60 },
                  { label: '180 Mins (Full 3 Hr)', val: 180 },
                ].map((dur) => (
                  <button
                    key={dur.val}
                    id={`duration-${dur.val}-btn`}
                    onClick={() => setCustomTimeMinutes(dur.val)}
                    className={`py-2.5 px-2 rounded-lg text-xs font-bold transition border cursor-pointer ${
                      customTimeMinutes === dur.val
                        ? 'bg-sky-600 text-white border-sky-400 shadow-md shadow-sky-600/30'
                        : 'bg-slate-800 text-slate-300 border-slate-700 hover:bg-slate-700'
                    }`}
                  >
                    {dur.label}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Launch Action CTA */}
          <div className="pt-4 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="text-xs text-slate-400">
              Selected:{' '}
              <strong className="text-white">
                {selectedYear === 'all' ? '2020-2024 All Years' : `JEE Main ${selectedYear}`}
              </strong>{' '}
              • Subject:{' '}
              <strong className="text-white">
                {selectedSubject === 'all' ? 'All Subjects' : SUBJECT_METADATA[selectedSubject].name}
              </strong>{' '}
              • Duration: <strong className="text-white">{customTimeMinutes} Minutes</strong>
            </div>

            <button
              id="launch-exam-btn"
              onClick={handleStart}
              className="w-full sm:w-auto px-8 py-3.5 bg-emerald-600 hover:bg-emerald-500 active:bg-emerald-700 text-white font-bold rounded-xl text-sm uppercase tracking-wider shadow-lg shadow-emerald-900/40 transition flex items-center justify-center gap-2 cursor-pointer"
            >
              <Play className="w-4 h-4 fill-white" />
              <span>Launch Test Now</span>
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Live Reflection & Version Footer */}
        <footer className="pt-4 pb-8 border-t border-slate-800/80 flex flex-wrap items-center justify-between gap-4 text-xs text-slate-400">
          <div className="flex items-center gap-2">
            <VersionBadge compact={false} />
            <span className="text-slate-600 hidden sm:inline">•</span>
            <span className="hidden sm:inline">Build {BUILD_TIMESTAMP} ({BUILD_HASH})</span>
          </div>

          <div className="flex items-center gap-3 text-[11px] text-slate-500">
            <span>JEE (Main) Mock Exam & Diagnostics Portal</span>
            <span>•</span>
            <span className="text-emerald-400/90 font-mono flex items-center gap-1">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 inline-block animate-pulse"></span>
              Auto-Reflect Active
            </span>
          </div>
        </footer>
      </main>
    </div>
  );
};

export default ExamSetupView;
