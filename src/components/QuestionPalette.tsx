import React from 'react';
import { Question, QuestionStatus, Subject, UserQuestionResponse } from '../types';
import { SUBJECT_METADATA } from '../data/questions';
import { User, CheckCircle2, Clock } from 'lucide-react';

interface QuestionPaletteProps {
  questions: Question[];
  currentSubject: Subject;
  currentQuestionId: string;
  responses: Record<string, UserQuestionResponse>;
  onSelectQuestion: (questionId: string) => void;
  onSubmitExam: () => void;
}

export const QuestionPalette: React.FC<QuestionPaletteProps> = ({
  questions,
  currentSubject,
  currentQuestionId,
  responses,
  onSelectQuestion,
  onSubmitExam,
}) => {
  // Filter questions for the active subject
  const subjectQuestions = questions.filter((q) => q.subject === currentSubject);

  // Group into Section A and Section B
  const sectionAQuestions = subjectQuestions.filter((q) => q.section === 'A');
  const sectionBQuestions = subjectQuestions.filter((q) => q.section === 'B');

  // Count legend stats across current subject (or all)
  const stats = {
    answered: 0,
    notAnswered: 0,
    notVisited: 0,
    markedForReview: 0,
    answeredMarkedForReview: 0,
  };

  subjectQuestions.forEach((q) => {
    const resp = responses[q.id];
    const status: QuestionStatus = resp?.status || 'not_visited';
    if (status === 'answered') stats.answered++;
    else if (status === 'not_answered') stats.notAnswered++;
    else if (status === 'not_visited') stats.notVisited++;
    else if (status === 'marked_for_review') stats.markedForReview++;
    else if (status === 'answered_marked_for_review') stats.answeredMarkedForReview++;
  });

  const getStatusBadgeStyle = (status: QuestionStatus, isCurrent: boolean) => {
    let base = 'relative flex items-center justify-center font-bold text-xs transition shadow-xs ';

    if (isCurrent) {
      base += 'ring-3 ring-sky-500 ring-offset-2 scale-105 z-10 ';
    }

    switch (status) {
      case 'answered':
        // NTA Green
        return (
          base +
          'bg-emerald-600 text-white rounded-t-sm rounded-b-lg border border-emerald-700 hover:bg-emerald-500'
        );
      case 'not_answered':
        // NTA Red/Orange
        return (
          base +
          'bg-rose-600 text-white rounded-t-lg rounded-b-sm border border-rose-700 hover:bg-rose-500'
        );
      case 'marked_for_review':
        // NTA Purple circle
        return (
          base +
          'bg-purple-600 text-white rounded-full border border-purple-700 hover:bg-purple-500'
        );
      case 'answered_marked_for_review':
        // NTA Purple with green evaluation dot
        return (
          base +
          'bg-purple-600 text-white rounded-full border border-purple-700 hover:bg-purple-500'
        );
      case 'not_visited':
      default:
        // NTA Silver/Grey square
        return (
          base +
          'bg-slate-100 text-slate-700 rounded border border-slate-300 hover:bg-slate-200'
        );
    }
  };

  return (
    <div className="w-80 border-l border-slate-200 bg-white flex flex-col h-full overflow-hidden select-none">
      {/* Candidate Profile Box (Official NTA Style) */}
      <div className="p-3 bg-slate-50 border-b border-slate-200 flex items-center gap-3">
        <div className="w-12 h-14 bg-slate-200 border border-slate-300 rounded flex flex-col items-center justify-center text-slate-500 shrink-0">
          <User className="w-6 h-6 text-slate-400" />
          <span className="text-[9px] font-bold uppercase text-slate-500">PHOTO</span>
        </div>
        <div className="overflow-hidden">
          <div className="text-xs font-bold text-slate-900 truncate">Candidate: AR. SunRay</div>
          <div className="text-[11px] text-slate-600 font-mono">Roll: 24031008921</div>
          <div className="text-[11px] text-sky-700 font-medium">
            Exam: <span className="font-semibold">JEE Main (CBT)</span>
          </div>
        </div>
      </div>

      {/* Official NTA Legend with Live Badges */}
      <div className="p-3 bg-slate-50/50 border-b border-slate-200 text-xs">
        <div className="text-[11px] font-bold uppercase tracking-wider text-slate-500 mb-2">
          Question Palette Legend
        </div>
        <div className="grid grid-cols-2 gap-2 text-[11px]">
          <div className="flex items-center gap-1.5">
            <span className="w-5 h-5 bg-emerald-600 text-white rounded-t-xs rounded-b-md flex items-center justify-center font-bold text-[10px] shrink-0">
              {stats.answered}
            </span>
            <span className="text-slate-700 truncate">Answered</span>
          </div>

          <div className="flex items-center gap-1.5">
            <span className="w-5 h-5 bg-rose-600 text-white rounded-t-md rounded-b-xs flex items-center justify-center font-bold text-[10px] shrink-0">
              {stats.notAnswered}
            </span>
            <span className="text-slate-700 truncate">Not Answered</span>
          </div>

          <div className="flex items-center gap-1.5">
            <span className="w-5 h-5 bg-slate-100 border border-slate-300 text-slate-700 rounded flex items-center justify-center font-bold text-[10px] shrink-0">
              {stats.notVisited}
            </span>
            <span className="text-slate-700 truncate">Not Visited</span>
          </div>

          <div className="flex items-center gap-1.5">
            <span className="w-5 h-5 bg-purple-600 text-white rounded-full flex items-center justify-center font-bold text-[10px] shrink-0">
              {stats.markedForReview}
            </span>
            <span className="text-slate-700 truncate">Marked for Review</span>
          </div>

          <div className="col-span-2 flex items-center gap-1.5 pt-0.5">
            <div className="relative w-5 h-5 bg-purple-600 text-white rounded-full flex items-center justify-center font-bold text-[10px] shrink-0">
              {stats.answeredMarkedForReview}
              <span className="absolute bottom-0 right-0 w-2 h-2 bg-emerald-400 border border-white rounded-full" />
            </div>
            <span className="text-slate-700 text-[10px] leading-tight">
              Ans. & Marked for Review (Evaluated)
            </span>
          </div>
        </div>
      </div>

      {/* Palette Navigation Grid */}
      <div className="flex-1 overflow-y-auto p-3 space-y-4">
        {/* Section A: MCQ */}
        {sectionAQuestions.length > 0 && (
          <div>
            <div className="text-xs font-bold text-slate-800 bg-slate-100 px-2 py-1 rounded mb-2.5 flex items-center justify-between">
              <span>Section A (MCQs)</span>
              <span className="text-[11px] font-normal text-slate-500">
                {sectionAQuestions.length} Questions
              </span>
            </div>
            <div className="grid grid-cols-5 gap-2">
              {sectionAQuestions.map((q, idx) => {
                const resp = responses[q.id];
                const status = resp?.status || 'not_visited';
                const isCurrent = q.id === currentQuestionId;
                const timeSpent = resp?.timeSpentSeconds || 0;

                return (
                  <button
                    key={q.id}
                    id={`palette-btn-${q.id}`}
                    onClick={() => onSelectQuestion(q.id)}
                    className={`h-9 w-full cursor-pointer ${getStatusBadgeStyle(status, isCurrent)}`}
                    title={`Question ${idx + 1} (${q.year} - ${q.topic}) - Time: ${Math.floor(
                      timeSpent / 60
                    )}m ${timeSpent % 60}s`}
                  >
                    <span>{idx + 1}</span>
                    {status === 'answered_marked_for_review' && (
                      <span className="absolute bottom-0.5 right-0.5 w-2 h-2 bg-emerald-400 border border-white rounded-full" />
                    )}
                    {timeSpent > 0 && (
                      <span
                        className="absolute -top-1 -right-1 w-2 h-2 bg-sky-500 rounded-full border border-white"
                        title="Time tracked on this question"
                      />
                    )}
                  </button>
                );
              })}
            </div>
          </div>
        )}

        {/* Section B: Numerical */}
        {sectionBQuestions.length > 0 && (
          <div>
            <div className="text-xs font-bold text-slate-800 bg-slate-100 px-2 py-1 rounded mb-2.5 flex items-center justify-between">
              <span>Section B (Numerical)</span>
              <span className="text-[11px] font-normal text-slate-500">
                {sectionBQuestions.length} Questions
              </span>
            </div>
            <div className="grid grid-cols-5 gap-2">
              {sectionBQuestions.map((q, idx) => {
                const resp = responses[q.id];
                const status = resp?.status || 'not_visited';
                const isCurrent = q.id === currentQuestionId;
                const globalIndex = sectionAQuestions.length + idx + 1;
                const timeSpent = resp?.timeSpentSeconds || 0;

                return (
                  <button
                    key={q.id}
                    id={`palette-btn-${q.id}`}
                    onClick={() => onSelectQuestion(q.id)}
                    className={`h-9 w-full cursor-pointer ${getStatusBadgeStyle(status, isCurrent)}`}
                    title={`Question ${globalIndex} (${q.year} - ${q.topic}) - Time: ${Math.floor(
                      timeSpent / 60
                    )}m ${timeSpent % 60}s`}
                  >
                    <span>{globalIndex}</span>
                    {status === 'answered_marked_for_review' && (
                      <span className="absolute bottom-0.5 right-0.5 w-2 h-2 bg-emerald-400 border border-white rounded-full" />
                    )}
                    {timeSpent > 0 && (
                      <span
                        className="absolute -top-1 -right-1 w-2 h-2 bg-sky-500 rounded-full border border-white"
                        title="Time tracked on this question"
                      />
                    )}
                  </button>
                );
              })}
            </div>
          </div>
        )}
      </div>

      {/* Palette Footer Submit Button */}
      <div className="p-3 bg-slate-50 border-t border-slate-200">
        <button
          id="palette-submit-btn"
          onClick={onSubmitExam}
          className="w-full bg-emerald-600 hover:bg-emerald-500 text-white font-bold py-2.5 px-4 rounded shadow-sm text-xs uppercase tracking-wider transition flex items-center justify-center gap-2 cursor-pointer"
        >
          <CheckCircle2 className="w-4 h-4" />
          <span>Submit Test</span>
        </button>
      </div>
    </div>
  );
};

export default QuestionPalette;
