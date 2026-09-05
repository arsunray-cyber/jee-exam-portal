import React from 'react';
import { Question, UserQuestionResponse } from '../types';
import { MathRenderer } from './MathRenderer';
import { Clock, Eye, Sparkles, AlertCircle, HelpCircle, ChevronLeft, ChevronRight, Check } from 'lucide-react';
import { SUBJECT_METADATA } from '../data/questions';

interface QuestionAreaProps {
  question: Question;
  questionIndex: number;
  totalQuestionsInSubject: number;
  userResponse?: UserQuestionResponse;
  currentQuestionTimeSeconds: number;
  onSelectOption: (optionIndex: number) => void;
  onSetNumericalAnswer: (val: string) => void;
  onClearResponse: () => void;
  onSaveAndNext: () => void;
  onSaveAndMarkForReview: () => void;
  onMarkForReviewAndNext: () => void;
  onPreviousQuestion: () => void;
  onNextQuestion: () => void;
  hasPrevious: boolean;
  hasNext: boolean;
  isPracticeMode?: boolean;
}

export const QuestionArea: React.FC<QuestionAreaProps> = ({
  question,
  questionIndex,
  totalQuestionsInSubject,
  userResponse,
  currentQuestionTimeSeconds,
  onSelectOption,
  onSetNumericalAnswer,
  onClearResponse,
  onSaveAndNext,
  onSaveAndMarkForReview,
  onMarkForReviewAndNext,
  onPreviousQuestion,
  onNextQuestion,
  hasPrevious,
  hasNext,
  isPracticeMode = false,
}) => {
  const [showInstantSolution, setShowInstantSolution] = React.useState<boolean>(false);

  // Reset instant solution toggle when question changes
  React.useEffect(() => {
    setShowInstantSolution(false);
  }, [question.id]);

  const formatSeconds = (totalSecs: number) => {
    const mins = Math.floor(totalSecs / 60);
    const secs = totalSecs % 60;
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  const subjectMeta = SUBJECT_METADATA[question.subject];
  const isOverBenchmark = currentQuestionTimeSeconds > question.benchmarkTimeSeconds;

  const handleKeypadPress = (char: string) => {
    const current = userResponse?.numericalAnswer || '';
    if (char === 'BACKSPACE') {
      onSetNumericalAnswer(current.slice(0, -1));
    } else if (char === 'CLEAR') {
      onSetNumericalAnswer('');
    } else if (char === '.') {
      if (!current.includes('.')) {
        onSetNumericalAnswer(current + '.');
      }
    } else if (char === '-') {
      if (current.startsWith('-')) {
        onSetNumericalAnswer(current.slice(1));
      } else {
        onSetNumericalAnswer('-' + current);
      }
    } else {
      // numbers
      onSetNumericalAnswer(current + char);
    }
  };

  return (
    <div className="flex-1 flex flex-col h-full bg-slate-50 overflow-hidden select-text">
      {/* Question Header Status Bar */}
      <div className="bg-white border-b border-slate-200 px-4 py-3 flex flex-wrap items-center justify-between gap-3 shadow-xs">
        <div className="flex items-center gap-3">
          <span className="bg-slate-900 text-white font-bold px-2.5 py-1 rounded text-xs">
            Q {questionIndex + 1} of {totalQuestionsInSubject}
          </span>
          <span className={`px-2.5 py-0.5 rounded text-xs font-semibold border ${subjectMeta.accentBg}`}>
            {subjectMeta.name} • Section {question.section} ({question.type === 'mcq' ? 'MCQ' : 'Numerical'})
          </span>
          <span className="bg-slate-100 text-slate-700 text-xs px-2 py-0.5 rounded font-mono border border-slate-200 hidden sm:inline">
            JEE Main {question.year} ({question.shift})
          </span>
          <span className="text-slate-400 text-xs font-medium">| {question.topic}</span>
        </div>

        {/* Live Per-Question Timer and Marking Scheme */}
        <div className="flex items-center gap-3">
          {/* Live Question Timer Badge */}
          <div
            className={`flex items-center gap-1.5 px-2.5 py-1 rounded text-xs font-mono font-semibold border ${
              isOverBenchmark
                ? 'bg-amber-50 text-amber-800 border-amber-300 animate-pulse'
                : 'bg-sky-50 text-sky-800 border-sky-200'
            }`}
            title={`Time spent on this question: ${formatSeconds(
              currentQuestionTimeSeconds
            )} (Target benchmark: ${formatSeconds(question.benchmarkTimeSeconds)})`}
          >
            <Clock className="w-3.5 h-3.5 text-sky-600" />
            <span>Time on Q: {formatSeconds(currentQuestionTimeSeconds)}</span>
            <span className="text-[10px] text-slate-500 hidden md:inline">
              / rec. {formatSeconds(question.benchmarkTimeSeconds)}
            </span>
          </div>

          {/* Marking scheme */}
          <div className="flex items-center gap-2 text-xs font-medium bg-slate-100 px-2 py-1 rounded border border-slate-200">
            <span className="text-emerald-700 font-bold">+4.00</span>
            <span className="text-slate-300">|</span>
            <span className="text-rose-600 font-bold">-1.00</span>
          </div>
        </div>
      </div>

      {/* Main Question and Options Scrollable Area */}
      <div className="flex-1 overflow-y-auto p-4 sm:p-6 space-y-6">
        {/* Question Statement */}
        <div className="bg-white p-5 rounded-lg border border-slate-200/80 shadow-xs">
          <div className="text-slate-900 text-base sm:text-lg font-medium leading-relaxed">
            <MathRenderer content={question.questionText} />
          </div>
        </div>

        {/* Options / Input Form */}
        {question.type === 'mcq' && question.options && (
          <div className="space-y-3">
            <div className="text-xs font-semibold text-slate-500 uppercase tracking-wider">
              Choose one correct option:
            </div>
            <div className="grid grid-cols-1 gap-2.5">
              {question.options.map((optionText, idx) => {
                const isSelected = userResponse?.selectedOption === idx;
                const optionLabel = String.fromCharCode(65 + idx); // A, B, C, D

                return (
                  <button
                    key={idx}
                    id={`option-${idx}`}
                    onClick={() => onSelectOption(idx)}
                    className={`w-full text-left p-4 rounded-lg border transition-all flex items-start gap-3 cursor-pointer ${
                      isSelected
                        ? 'bg-sky-50/80 border-sky-500 ring-2 ring-sky-200 text-slate-900 shadow-xs'
                        : 'bg-white hover:bg-slate-50 border-slate-200 text-slate-800'
                    }`}
                  >
                    <div
                      className={`w-7 h-7 rounded-full flex items-center justify-center font-bold text-xs shrink-0 transition ${
                        isSelected
                          ? 'bg-sky-600 text-white'
                          : 'bg-slate-100 text-slate-600 border border-slate-300'
                      }`}
                    >
                      {optionLabel}
                    </div>
                    <div className="text-sm sm:text-base pt-0.5 flex-1 font-normal leading-relaxed">
                      <MathRenderer content={optionText} />
                    </div>
                  </button>
                );
              })}
            </div>
          </div>
        )}

        {/* Numerical Value Input & Virtual Keypad */}
        {question.type === 'numerical' && (
          <div className="bg-white p-5 rounded-lg border border-slate-200/80 shadow-xs space-y-4 max-w-lg">
            <div className="text-xs font-semibold text-slate-500 uppercase tracking-wider">
              Section B: Numerical Value Answer (Type or use Keypad)
            </div>

            <div className="flex items-center gap-3">
              <input
                id="numerical-answer-input"
                type="text"
                value={userResponse?.numericalAnswer || ''}
                onChange={(e) => onSetNumericalAnswer(e.target.value)}
                placeholder="Enter numerical value"
                className="text-lg font-mono font-bold px-4 py-2 border-2 border-sky-400 rounded-md bg-slate-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-sky-500 w-full"
              />
              <button
                onClick={() => onSetNumericalAnswer('')}
                className="px-3 py-2 text-xs font-semibold text-slate-600 hover:text-slate-900 bg-slate-100 hover:bg-slate-200 rounded border border-slate-300 transition"
              >
                Clear
              </button>
            </div>

            {/* Virtual NTA Calculator / Keypad */}
            <div className="pt-2 border-t border-slate-100">
              <div className="text-[11px] text-slate-400 font-medium mb-2">Virtual NTA Keypad:</div>
              <div className="grid grid-cols-4 gap-2 max-w-xs">
                {['1', '2', '3', 'CLEAR', '4', '5', '6', 'BACKSPACE', '7', '8', '9', '-', '.', '0'].map((key) => (
                  <button
                    key={key}
                    type="button"
                    onClick={() => handleKeypadPress(key)}
                    className={`py-2 px-2 rounded font-mono font-bold text-sm border shadow-xs transition active:scale-95 ${
                      key === 'CLEAR'
                        ? 'col-span-1 bg-rose-50 border-rose-200 text-rose-700 text-xs'
                        : key === 'BACKSPACE'
                        ? 'col-span-1 bg-amber-50 border-amber-200 text-amber-700 text-xs'
                        : key === '0'
                        ? 'col-span-2 bg-slate-100 hover:bg-slate-200 border-slate-300 text-slate-800'
                        : 'bg-slate-100 hover:bg-slate-200 border-slate-300 text-slate-800'
                    }`}
                  >
                    {key}
                  </button>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Practice Mode Instant Solution Accordion */}
        {isPracticeMode && (
          <div className="mt-4 border border-emerald-200 rounded-lg bg-emerald-50/50 p-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2 text-emerald-800 text-sm font-semibold">
                <Sparkles className="w-4 h-4 text-emerald-600" />
                <span>Instant Answer & Explanation (Practice Mode)</span>
              </div>
              <button
                id="toggle-instant-solution-btn"
                onClick={() => setShowInstantSolution(!showInstantSolution)}
                className="text-xs font-semibold px-3 py-1 bg-emerald-600 hover:bg-emerald-700 text-white rounded transition flex items-center gap-1 cursor-pointer"
              >
                <Eye className="w-3.5 h-3.5" />
                <span>{showInstantSolution ? 'Hide Solution' : 'View Answer & Solution'}</span>
              </button>
            </div>

            {showInstantSolution && (
              <div className="mt-4 pt-4 border-t border-emerald-200/80 space-y-3 text-sm text-slate-800">
                <div className="flex items-center gap-2 bg-emerald-100 text-emerald-900 px-3 py-1.5 rounded font-medium">
                  <Check className="w-4 h-4 text-emerald-600" />
                  <span>
                    Correct Answer:{' '}
                    <strong>
                      {question.type === 'mcq'
                        ? `Option (${String.fromCharCode(65 + Number(question.correctAnswer))})`
                        : question.correctAnswer}
                    </strong>
                  </span>
                </div>

                <div className="bg-white p-3.5 rounded border border-emerald-200 space-y-2">
                  <div className="font-semibold text-slate-900">Step-by-Step Solution:</div>
                  <ul className="list-disc pl-5 space-y-1.5 text-slate-700">
                    {question.solution.stepByStep.map((step, sIdx) => (
                      <li key={sIdx}>
                        <MathRenderer content={step} />
                      </li>
                    ))}
                  </ul>
                </div>

                {question.solution.shortcutTip && (
                  <div className="bg-amber-50 border border-amber-200 p-2.5 rounded text-xs text-amber-800 flex items-start gap-2">
                    <Sparkles className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
                    <div>
                      <strong>Shortcut Tip: </strong>
                      <MathRenderer content={question.solution.shortcutTip} />
                    </div>
                  </div>
                )}
              </div>
            )}
          </div>
        )}
      </div>

      {/* Bottom Action Control Bar */}
      <div className="bg-white border-t border-slate-200 px-4 py-3 flex flex-wrap items-center justify-between gap-2 shadow-xs">
        {/* Left grouping: Save & Mark, Clear */}
        <div className="flex flex-wrap items-center gap-2">
          <button
            id="cbt-save-mark-review-btn"
            onClick={onSaveAndMarkForReview}
            className="px-3.5 py-2 text-xs font-semibold rounded bg-amber-100 hover:bg-amber-200 text-amber-900 border border-amber-300 transition cursor-pointer"
          >
            Save & Mark for Review
          </button>

          <button
            id="cbt-clear-response-btn"
            onClick={onClearResponse}
            className="px-3.5 py-2 text-xs font-semibold rounded bg-slate-100 hover:bg-slate-200 text-slate-700 border border-slate-300 transition cursor-pointer"
          >
            Clear Response
          </button>

          <button
            id="cbt-mark-review-next-btn"
            onClick={onMarkForReviewAndNext}
            className="px-3.5 py-2 text-xs font-semibold rounded bg-purple-100 hover:bg-purple-200 text-purple-900 border border-purple-300 transition cursor-pointer"
          >
            Mark for Review & Next
          </button>
        </div>

        {/* Right grouping: Back, Next, Save & Next */}
        <div className="flex items-center gap-2">
          <button
            id="cbt-prev-btn"
            disabled={!hasPrevious}
            onClick={onPreviousQuestion}
            className={`px-3 py-2 text-xs font-semibold rounded border flex items-center gap-1 transition ${
              hasPrevious
                ? 'bg-slate-100 hover:bg-slate-200 text-slate-700 border-slate-300 cursor-pointer'
                : 'bg-slate-50 text-slate-300 border-slate-200 cursor-not-allowed'
            }`}
          >
            <ChevronLeft className="w-4 h-4" />
            <span>Previous</span>
          </button>

          <button
            id="cbt-save-next-btn"
            onClick={onSaveAndNext}
            className="px-4 py-2 text-xs font-semibold rounded bg-sky-600 hover:bg-sky-500 active:bg-sky-700 text-white shadow-sm transition flex items-center gap-1.5 cursor-pointer"
          >
            <span>Save & Next</span>
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default QuestionArea;
