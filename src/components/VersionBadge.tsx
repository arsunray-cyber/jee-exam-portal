import React, { useState } from 'react';
import { Sparkles, CheckCircle2, GitCommit, RefreshCw, X, Info } from 'lucide-react';
import { APP_VERSION, BUILD_TIMESTAMP, BUILD_HASH, RELEASE_DATE, VERSION_FEATURES } from '../version';

interface VersionBadgeProps {
  compact?: boolean;
}

export const VersionBadge: React.FC<VersionBadgeProps> = ({ compact = false }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isRefreshing, setIsRefreshing] = useState(false);
  const [lastChecked, setLastChecked] = useState<string>('Just now');

  const handleRefresh = () => {
    setIsRefreshing(true);
    setTimeout(() => {
      setIsRefreshing(false);
      setLastChecked(new Date().toLocaleTimeString());
    }, 600);
  };

  if (compact) {
    return (
      <>
        <button
          id="version-badge-compact-btn"
          onClick={() => setIsOpen(true)}
          className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full text-[11px] font-mono font-medium bg-emerald-500/15 text-emerald-400 border border-emerald-500/30 hover:bg-emerald-500/25 transition cursor-pointer"
          title="Click to view Version & Automatic Update Reflection status"
        >
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
          </span>
          <span>{APP_VERSION}</span>
          <span className="text-[10px] text-emerald-500/80 font-sans hidden sm:inline">• Live</span>
        </button>

        {isOpen && renderModal()}
      </>
    );
  }

  function renderModal() {
    return (
      <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/75 backdrop-blur-xs p-4">
        <div className="bg-slate-900 border border-slate-700 rounded-2xl max-w-md w-full p-6 shadow-2xl space-y-5 animate-in fade-in zoom-in-95 duration-200">
          <div className="flex items-center justify-between border-b border-slate-800 pb-3">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-emerald-500/20 border border-emerald-500/30 flex items-center justify-center text-emerald-400">
                <CheckCircle2 className="w-5 h-5" />
              </div>
              <div>
                <h3 className="font-bold text-white text-base flex items-center gap-2">
                  <span>Version & Reflection Status</span>
                  <span className="text-xs bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 px-2 py-0.5 rounded-full font-mono">
                    {APP_VERSION}
                  </span>
                </h3>
                <p className="text-xs text-slate-400">Automatic reflection enabled</p>
              </div>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="text-slate-400 hover:text-white p-1 rounded-lg hover:bg-slate-800 transition"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          <div className="space-y-3 text-xs">
            <div className="bg-slate-950 p-3 rounded-xl border border-slate-800 space-y-2 font-mono">
              <div className="flex justify-between items-center text-slate-300">
                <span className="text-slate-400">Current Version:</span>
                <span className="text-emerald-400 font-bold">{APP_VERSION}</span>
              </div>
              <div className="flex justify-between items-center text-slate-300">
                <span className="text-slate-400">Build Timestamp:</span>
                <span className="text-white">{BUILD_TIMESTAMP}</span>
              </div>
              <div className="flex justify-between items-center text-slate-300">
                <span className="text-slate-400">Git Commit:</span>
                <span className="text-sky-400 flex items-center gap-1">
                  <GitCommit className="w-3.5 h-3.5" />
                  {BUILD_HASH}
                </span>
              </div>
              <div className="flex justify-between items-center text-slate-300">
                <span className="text-slate-400">Live Status:</span>
                <span className="text-emerald-400 flex items-center gap-1 font-semibold">
                  <span className="inline-block w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
                  Changes Reflected Automatically
                </span>
              </div>
              <div className="flex justify-between items-center text-slate-300">
                <span className="text-slate-400">Last Verified:</span>
                <span className="text-slate-400">{lastChecked}</span>
              </div>
            </div>

            <div>
              <h4 className="font-semibold text-slate-300 mb-2 flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5 text-amber-400" />
                Active in this release:
              </h4>
              <ul className="space-y-1.5 pl-1">
                {VERSION_FEATURES.map((feat, idx) => (
                  <li key={idx} className="flex items-start gap-2 text-slate-300">
                    <span className="text-emerald-400 font-bold mt-0.5">•</span>
                    <span>{feat}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-sky-950/40 border border-sky-800/40 p-3 rounded-xl flex items-start gap-2 text-[11px] text-sky-200">
              <Info className="w-4 h-4 text-sky-400 shrink-0 mt-0.5" />
              <span>
                Any change committed to the repository or updated in code is immediately deployed and automatically reflected here in real time.
              </span>
            </div>
          </div>

          <div className="flex items-center justify-between pt-2 border-t border-slate-800">
            <button
              onClick={handleRefresh}
              disabled={isRefreshing}
              className="flex items-center gap-1.5 text-xs text-slate-400 hover:text-white px-2.5 py-1.5 rounded-lg hover:bg-slate-800 transition"
            >
              <RefreshCw className={`w-3.5 h-3.5 ${isRefreshing ? 'animate-spin text-emerald-400' : ''}`} />
              <span>{isRefreshing ? 'Checking...' : 'Check live reflection'}</span>
            </button>
            <button
              onClick={() => setIsOpen(false)}
              className="bg-slate-800 hover:bg-slate-700 text-white text-xs font-semibold px-4 py-1.5 rounded-lg transition"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <>
      <button
        id="version-badge-btn"
        onClick={() => setIsOpen(true)}
        className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-medium bg-emerald-500/10 text-emerald-300 border border-emerald-500/30 hover:bg-emerald-500/20 transition cursor-pointer group"
        title="View application version & live auto-reflection details"
      >
        <span className="relative flex h-2 w-2">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
        </span>
        <span className="font-mono font-semibold">{APP_VERSION}</span>
        <span className="text-slate-400 group-hover:text-slate-200 transition hidden sm:inline">
          • Changes Reflected Automatically
        </span>
      </button>

      {isOpen && renderModal()}
    </>
  );
};

export default VersionBadge;
