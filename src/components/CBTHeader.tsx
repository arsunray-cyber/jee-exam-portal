import React from 'react';
import { Clock, HelpCircle, FileText, CheckCircle2, User, Sparkles, BookOpen } from 'lucide-react';
import { Subject } from '../types';
import { SUBJECT_METADATA } from '../data/questions';

interface CBTHeaderProps {
  currentSubject: Subject;
  onSubjectChange: (subj: Subject) => void;
  timeRemainingSeconds: number;
  onOpenInstructions: () => void;
  onOpenQuestionPaper: () => void;
  onOpenAnswerWindow: () => void;
  onSubmitExam: () => void;
  examTitle: string;
  isPracticeMode?: boolean;
}

export const CBTHeader: React.FC<CBTHeaderProps> = ({
  currentSubject,
  onSubjectChange,
  timeRemainingSeconds,
  onOpenInstructions,
  onOpenQuestionPaper,
  onOpenAnswerWindow,
  onSubmitExam,
  examTitle,
  isPracticeMode = false,
}) => {
  const formatTime = (secs: number) => {
    const hours = Math.floor(secs / 3600);
    const minutes = Math.floor((secs % 3600) / 60);
    const seconds = secs % 60;
    return `${hours.toString().padStart(2, '0')}:${minutes
      .toString()
      .padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
  };

  const isLowTime = timeRemainingSeconds < 900; // less than 15 mins

  return (
    <header className="bg-slate-900 text-white shadow-md border-b border-slate-800 select-none">
      {/* Topmost Institutional NTA style bar */}
      <div className="bg-slate-950 px-4 py-2 flex flex-wrap items-center justify-between border-b border-slate-800 text-xs text-slate-300">
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-1.5 font-bold tracking-wider text-amber-400">
            <span className="bg-amber-500/20 border border-amber-500/40 text-amber-300 px-2 py-0.5 rounded font-mono font-semibold">
              NTA CBT SIMULATOR
            </span>
            <span className="hidden sm:inline text-slate-400">|</span>
            <span className="hidden sm:inline text-white font-medium">{examTitle}</span>
          </div>
          {isPracticeMode && (
            <span className="bg-emerald-500/20 text-emerald-300 px-2 py-0.5 rounded text-[11px] border border-emerald-500/40 flex items-center gap-1">
              <Sparkles className="w-3 h-3" /> Practice & Solution Mode
            </span>
          )}
        </div>

        <div className="flex items-center gap-4">
          <div className="hidden md:flex items-center gap-2 bg-slate-900/90 px-2.5 py-1 rounded border border-slate-700/70">
            <User className="w-3.5 h-3.5 text-sky-400" />
            <span className="text-slate-300 font-medium">Candidate:</span>
            <span className="text-white font-semibold">AR. SunRay</span>
            <span className="text-slate-500">|</span>
            <span className="text-slate-400 font-mono text-[11px]">Roll: 2403019842</span>
          </div>

          <div className="flex items-center gap-2">
            <button
              id="header-instructions-btn"
              onClick={onOpenInstructions}
              className="flex items-center gap-1 text-slate-300 hover:text-white px-2 py-1 rounded hover:bg-slate-800 transition"
              title="View Exam Instructions"
            >
              <HelpCircle className="w-3.5 h-3.5 text-sky-400" />
              <span>Instructions</span>
            </button>

            <button
              id="header-question-paper-btn"
              onClick={onOpenQuestionPaper}
              className="flex items-center gap-1 text-slate-300 hover:text-white px-2 py-1 rounded hover:bg-slate-800 transition"
              title="View all questions in one document"
            >
              <FileText className="w-3.5 h-3.5 text-indigo-400" />
              <span>Question Paper</span>
            </button>

            <button
              id="header-solution-window-btn"
              onClick={onOpenAnswerWindow}
              className="flex items-center gap-1.5 bg-sky-600/90 hover:bg-sky-500 text-white font-medium px-2.5 py-1 rounded shadow-sm border border-sky-400/30 transition text-xs"
              title="Open Answer Key & Question Time Window"
            >
              <BookOpen className="w-3.5 h-3.5" />
              <span>Answers & Time Window</span>
            </button>
          </div>
        </div>
      </div>

      {/* Main Bar: Subject tabs on left, Live Countdown on right */}
      <div className="px-4 py-2.5 flex flex-wrap items-center justify-between gap-3 bg-slate-900">
        {/* Subject Switch Tabs */}
        <div className="flex items-center gap-1.5 sm:gap-2">
          <span className="text-xs uppercase tracking-wider text-slate-400 font-semibold mr-1 hidden sm:inline">
            Sections:
          </span>
          {(['physics', 'chemistry', 'mathematics'] as Subject[]).map((subj) => {
            const isActive = currentSubject === subj;
            const meta = SUBJECT_METADATA[subj];
            return (
              <button
                key={subj}
                id={`subject-tab-${subj}`}
                onClick={() => onSubjectChange(subj)}
                className={`px-3.5 py-1.5 rounded text-xs font-semibold uppercase tracking-wider transition-all flex items-center gap-1.5 ${
                  isActive
                    ? 'bg-sky-500 text-white shadow-md shadow-sky-500/20 ring-1 ring-sky-300'
                    : 'bg-slate-800/90 text-slate-300 hover:bg-slate-700/80 hover:text-white'
                }`}
              >
                <span>{meta.name}</span>
              </button>
            );
          })}
        </div>

        {/* Timer & Finish / Submit Controls */}
        <div className="flex items-center gap-3">
          {/* Live Remaining Timer */}
          <div
            className={`flex items-center gap-2 px-3 py-1.5 rounded-md border font-mono font-bold tracking-wider ${
              isLowTime
                ? 'bg-rose-950/70 border-rose-600/80 text-rose-300 animate-pulse'
                : 'bg-slate-950 border-slate-700/80 text-emerald-400'
            }`}
          >
            <Clock className={`w-4 h-4 ${isLowTime ? 'text-rose-400' : 'text-emerald-400'}`} />
            <div className="flex flex-col text-left">
              <span className="text-[10px] uppercase font-sans text-slate-400 font-semibold tracking-normal leading-none">
                Time Left
              </span>
              <span className="text-sm leading-tight">{formatTime(timeRemainingSeconds)}</span>
            </div>
          </div>

          {/* Direct Submit / End Test Button */}
          <button
            id="cbt-submit-test-btn"
            onClick={onSubmitExam}
            className="bg-emerald-600 hover:bg-emerald-500 active:bg-emerald-700 text-white px-4 py-2 rounded-md font-semibold text-xs tracking-wide uppercase transition shadow-md shadow-emerald-900/30 flex items-center gap-1.5 cursor-pointer"
          >
            <CheckCircle2 className="w-4 h-4" />
            <span>Submit Test</span>
          </button>
        </div>
      </div>
    </header>
  );
};

export default CBTHeader;
