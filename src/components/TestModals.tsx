import React from 'react';
import { Question, Subject, UserQuestionResponse } from '../types';
import { SUBJECT_METADATA } from '../data/questions';
import { MathRenderer } from './MathRenderer';
import { X, AlertCircle, CheckCircle2, HelpCircle, FileText } from 'lucide-react';

// ==========================================
// 1. Submit Test Confirmation Modal
// ==========================================
interface SubmitModalProps {
  isOpen: boolean;
  onClose: () => void;
  onConfirmSubmit: () => void;
  questions: Question[];
  responses: Record<string, UserQuestionResponse>;
}

export const SubmitConfirmationModal: React.FC<SubmitModalProps> = ({
  isOpen,
  onClose,
  onConfirmSubmit,
  questions,
  responses,
}) => {
  if (!isOpen) return null;

  // Calculate summary counts per subject
  const subjects: Subject[] = ['physics', 'chemistry', 'mathematics'];
  const summary = subjects.map((subj) => {
    const qList = questions.filter((q) => q.subject === subj);
    let answered = 0;
    let notAnswered = 0;
    let marked = 0;
    let ansMarked = 0;
    let notVisited = 0;

    qList.forEach((q) => {
      const resp = responses[q.id];
      const status = resp?.status || 'not_visited';
      if (status === 'answered') answered++;
      else if (status === 'not_answered') notAnswered++;
      else if (status === 'marked_for_review') marked++;
      else if (status === 'answered_marked_for_review') ansMarked++;
      else notVisited++;
    });

    return {
      subject: subj,
      name: SUBJECT_METADATA[subj].name,
      total: qList.length,
      answered,
      notAnswered,
      marked,
      ansMarked,
      notVisited,
    };
  });

  return (
    <div className="fixed inset-0 z-50 bg-slate-950/70 backdrop-blur-xs flex items-center justify-center p-3 sm:p-4 animate-in fade-in duration-150">
      <div className="bg-white w-full max-w-2xl rounded-xl shadow-2xl border border-slate-300 overflow-hidden text-slate-900">
        {/* Header */}
        <div className="bg-slate-900 text-white px-5 py-3.5 flex items-center justify-between border-b border-slate-800">
          <h2 className="text-sm font-bold uppercase tracking-wider flex items-center gap-2">
            <AlertCircle className="w-4 h-4 text-amber-400" />
            <span>Official Exam Submission Summary</span>
          </h2>
          <button
            onClick={onClose}
            className="text-slate-400 hover:text-white p-1 rounded hover:bg-slate-800 transition cursor-pointer"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* NTA Summary Table */}
        <div className="p-5 space-y-4">
          <p className="text-xs text-slate-600">
            Please verify your response summary below before final submission. Once submitted, your scores and detailed question-level time analytics will be calculated immediately.
          </p>

          <div className="overflow-x-auto border border-slate-200 rounded-lg">
            <table className="w-full text-left text-xs">
              <thead className="bg-slate-100 border-b border-slate-200 text-slate-700 font-bold uppercase">
                <tr>
                  <th className="p-2.5">Section Name</th>
                  <th className="p-2.5 text-center">No. of Qs</th>
                  <th className="p-2.5 text-center text-emerald-700">Answered</th>
                  <th className="p-2.5 text-center text-rose-700">Not Answered</th>
                  <th className="p-2.5 text-center text-purple-700">Marked Review</th>
                  <th className="p-2.5 text-center text-indigo-700">Ans & Marked</th>
                  <th className="p-2.5 text-center text-slate-500">Not Visited</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200">
                {summary.map((row) => (
                  <tr key={row.subject} className="hover:bg-slate-50/80">
                    <td className="p-2.5 font-bold text-slate-900">{row.name}</td>
                    <td className="p-2.5 text-center font-mono font-semibold">{row.total}</td>
                    <td className="p-2.5 text-center font-mono font-bold text-emerald-600 bg-emerald-50/50">
                      {row.answered}
                    </td>
                    <td className="p-2.5 text-center font-mono font-bold text-rose-600 bg-rose-50/50">
                      {row.notAnswered}
                    </td>
                    <td className="p-2.5 text-center font-mono font-bold text-purple-600">
                      {row.marked}
                    </td>
                    <td className="p-2.5 text-center font-mono font-bold text-indigo-600">
                      {row.ansMarked}
                    </td>
                    <td className="p-2.5 text-center font-mono text-slate-500">{row.notVisited}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="bg-amber-50 border border-amber-200 p-3 rounded-lg text-xs text-amber-900 flex items-start gap-2">
            <AlertCircle className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
            <span>
              <strong>Important:</strong> Questions categorized under <em>Answered & Marked for Review</em> will be evaluated and counted towards your positive or negative score.
            </span>
          </div>
        </div>

        {/* Modal Actions */}
        <div className="bg-slate-50 border-t border-slate-200 px-5 py-3 flex items-center justify-end gap-3 text-xs">
          <button
            onClick={onClose}
            className="px-4 py-2 font-semibold text-slate-700 hover:text-slate-900 hover:bg-slate-200/80 rounded-md border border-slate-300 transition cursor-pointer"
          >
            No, Resume Exam
          </button>
          <button
            id="confirm-submit-exam-btn"
            onClick={onConfirmSubmit}
            className="px-5 py-2 font-bold bg-emerald-600 hover:bg-emerald-500 active:bg-emerald-700 text-white rounded-md shadow-sm transition flex items-center gap-1.5 cursor-pointer"
          >
            <CheckCircle2 className="w-4 h-4" />
            <span>Yes, Submit Exam</span>
          </button>
        </div>
      </div>
    </div>
  );
};

// ==========================================
// 2. Full Question Paper View Modal
// ==========================================
interface QuestionPaperModalProps {
  isOpen: boolean;
  onClose: () => void;
  questions: Question[];
  onSelectQuestion: (questionId: string) => void;
}

export const QuestionPaperModal: React.FC<QuestionPaperModalProps> = ({
  isOpen,
  onClose,
  questions,
  onSelectQuestion,
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 bg-slate-950/70 backdrop-blur-xs flex items-center justify-center p-3 sm:p-5 animate-in fade-in duration-150">
      <div className="bg-white w-full max-w-4xl h-[90vh] rounded-xl shadow-2xl border border-slate-300 flex flex-col overflow-hidden text-slate-900">
        {/* Header */}
        <div className="bg-slate-900 text-white px-5 py-3.5 flex items-center justify-between border-b border-slate-800">
          <div className="flex items-center gap-2">
            <FileText className="w-4 h-4 text-sky-400" />
            <h2 className="text-sm font-bold uppercase tracking-wider">
              Comprehensive Question Paper Sheet
            </h2>
          </div>
          <button
            onClick={onClose}
            className="text-slate-400 hover:text-white p-1 rounded hover:bg-slate-800 transition cursor-pointer"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Questions list */}
        <div className="flex-1 overflow-y-auto p-5 space-y-6 divide-y divide-slate-200">
          {questions.map((q, idx) => {
            const subjectMeta = SUBJECT_METADATA[q.subject];
            return (
              <div key={q.id} className="pt-5 first:pt-0 space-y-3">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2 text-xs">
                    <span className="font-bold bg-slate-900 text-white px-2 py-0.5 rounded">
                      Q {idx + 1}
                    </span>
                    <span className={`px-2 py-0.5 rounded font-semibold border ${subjectMeta.accentBg}`}>
                      {subjectMeta.name} • Section {q.section}
                    </span>
                    <span className="text-slate-500">
                      JEE Main {q.year} • {q.topic}
                    </span>
                  </div>
                  <button
                    onClick={() => {
                      onSelectQuestion(q.id);
                      onClose();
                    }}
                    className="text-xs font-semibold text-sky-600 hover:text-sky-800 bg-sky-50 px-2.5 py-1 rounded border border-sky-200 transition"
                  >
                    Go to Question
                  </button>
                </div>

                <div className="text-sm text-slate-900 leading-relaxed font-medium">
                  <MathRenderer content={q.questionText} />
                </div>

                {q.type === 'mcq' && q.options && (
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-slate-700">
                    {q.options.map((opt, oIdx) => (
                      <div key={oIdx} className="p-2 rounded bg-slate-50 border border-slate-200 flex items-start gap-2">
                        <span className="font-bold text-slate-500">
                          ({String.fromCharCode(65 + oIdx)})
                        </span>
                        <div className="pt-0.5">
                          <MathRenderer content={opt} />
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Footer */}
        <div className="bg-slate-50 border-t border-slate-200 px-5 py-3 flex justify-end">
          <button
            onClick={onClose}
            className="px-4 py-1.5 bg-slate-900 hover:bg-slate-800 text-white font-semibold rounded text-xs transition"
          >
            Close Sheet
          </button>
        </div>
      </div>
    </div>
  );
};

// ==========================================
// 3. Instructions Modal
// ==========================================
interface InstructionsModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const InstructionsModal: React.FC<InstructionsModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 bg-slate-950/70 backdrop-blur-xs flex items-center justify-center p-3 sm:p-5 animate-in fade-in duration-150">
      <div className="bg-white w-full max-w-3xl h-[85vh] rounded-xl shadow-2xl border border-slate-300 flex flex-col overflow-hidden text-slate-900">
        {/* Header */}
        <div className="bg-slate-900 text-white px-5 py-3.5 flex items-center justify-between border-b border-slate-800">
          <div className="flex items-center gap-2">
            <HelpCircle className="w-4 h-4 text-sky-400" />
            <h2 className="text-sm font-bold uppercase tracking-wider">
              NTA JEE (Main) CBT Guidelines & Marking Scheme
            </h2>
          </div>
          <button
            onClick={onClose}
            className="text-slate-400 hover:text-white p-1 rounded hover:bg-slate-800 transition cursor-pointer"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Content */}
        <div className="flex-1 overflow-y-auto p-5 space-y-5 text-xs sm:text-sm text-slate-700 leading-relaxed">
          <div className="space-y-2">
            <h3 className="font-bold text-slate-900 text-sm">1. Examination Structure:</h3>
            <p>
              The exam covers three subjects: <strong>Physics</strong>, <strong>Chemistry</strong>, and <strong>Mathematics</strong>.
            </p>
            <ul className="list-disc pl-5 space-y-1">
              <li><strong>Section A:</strong> Multiple Choice Questions (MCQs) with single correct answer.</li>
              <li><strong>Section B:</strong> Questions whose answer is a numerical value.</li>
            </ul>
          </div>

          <div className="space-y-2">
            <h3 className="font-bold text-slate-900 text-sm">2. Marking Scheme:</h3>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5 font-medium">
              <div className="bg-emerald-50 border border-emerald-200 p-3 rounded text-emerald-900">
                <div className="font-bold text-sm text-emerald-700">+4.00 Marks</div>
                <div>For each correct response.</div>
              </div>
              <div className="bg-rose-50 border border-rose-200 p-3 rounded text-rose-900">
                <div className="font-bold text-sm text-rose-700">-1.00 Mark</div>
                <div>For each incorrect response (Negative marking).</div>
              </div>
              <div className="bg-slate-50 border border-slate-200 p-3 rounded text-slate-800">
                <div className="font-bold text-sm text-slate-600">0.00 Marks</div>
                <div>For unattempted or unanswered questions.</div>
              </div>
            </div>
          </div>

          <div className="space-y-2">
            <h3 className="font-bold text-slate-900 text-sm">3. Question Palette Symbol Codes:</h3>
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <span className="w-5 h-5 bg-slate-100 border border-slate-300 rounded inline-block" />
                <span><strong>Not Visited:</strong> You have not visited the question yet.</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-5 h-5 bg-rose-600 text-white rounded-t-md rounded-b-xs inline-block" />
                <span><strong>Not Answered:</strong> You have visited but not answered the question.</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-5 h-5 bg-emerald-600 text-white rounded-t-xs rounded-b-md inline-block" />
                <span><strong>Answered:</strong> You have answered the question.</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-5 h-5 bg-purple-600 text-white rounded-full inline-block" />
                <span><strong>Marked for Review:</strong> You have marked the question for review without answering.</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="relative w-5 h-5 bg-purple-600 text-white rounded-full inline-block">
                  <span className="absolute bottom-0 right-0 w-2 h-2 bg-emerald-400 border border-white rounded-full" />
                </div>
                <span>
                  <strong>Answered & Marked for Review:</strong> The question has been answered AND marked for review (WILL be evaluated!).
                </span>
              </div>
            </div>
          </div>

          <div className="space-y-2">
            <h3 className="font-bold text-slate-900 text-sm">4. Navigating and Saving Answers:</h3>
            <ul className="list-disc pl-5 space-y-1">
              <li>Click <strong>Save & Next</strong> to save your answer and navigate to the next question.</li>
              <li>Click <strong>Clear Response</strong> to clear the currently selected radio button or numerical input.</li>
              <li>Use the <strong>Answers & Time Window</strong> anytime to inspect per-question time tracking and solutions.</li>
            </ul>
          </div>
        </div>

        {/* Footer */}
        <div className="bg-slate-50 border-t border-slate-200 px-5 py-3 flex justify-end">
          <button
            onClick={onClose}
            className="px-4 py-1.5 bg-slate-900 hover:bg-slate-800 text-white font-semibold rounded text-xs transition"
          >
            I Understand
          </button>
        </div>
      </div>
    </div>
  );
};
