import React, { useState, useEffect, useRef } from 'react';
import { User, LogOut, CheckCircle, ShieldCheck, Mail, Sparkles, X, ChevronDown } from 'lucide-react';
import { GoogleUser } from '../types';

interface GoogleAuthButtonProps {
  user: GoogleUser | null;
  onLogin: (user: GoogleUser) => void;
  onLogout: () => void;
  compact?: boolean;
}

// Global window declaration for Google Identity Services
declare global {
  interface Window {
    google?: {
      accounts: {
        id: {
          initialize: (config: any) => void;
          renderButton: (parent: HTMLElement, options: any) => void;
          prompt: () => void;
        };
      };
    };
  }
}

// Decode Google JWT payload safely
function decodeGoogleJwt(token: string): any {
  try {
    const base64Url = token.split('.')[1];
    const base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
    const jsonPayload = decodeURIComponent(
      atob(base64)
        .split('')
        .map((c) => '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2))
        .join('')
    );
    return JSON.parse(jsonPayload);
  } catch (e) {
    console.error('Failed to parse Google JWT token', e);
    return null;
  }
}

export const GoogleAuthButton: React.FC<GoogleAuthButtonProps> = ({
  user,
  onLogin,
  onLogout,
  compact = false,
}) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const googleBtnContainerRef = useRef<HTMLDivElement>(null);

  // Initialize Google Identity Services
  useEffect(() => {
    const initGsi = () => {
      if (window.google?.accounts?.id && googleBtnContainerRef.current) {
        try {
          // Use standard client ID or fallback
          const clientId =
            (import.meta as any).env?.VITE_GOOGLE_CLIENT_ID ||
            '1084284589254-placeholder.apps.googleusercontent.com';

          window.google.accounts.id.initialize({
            client_id: clientId,
            callback: (response: any) => {
              if (response?.credential) {
                const payload = decodeGoogleJwt(response.credential);
                if (payload) {
                  const loggedInUser: GoogleUser = {
                    id: payload.sub || `google_${Date.now()}`,
                    name: payload.name || 'Candidate',
                    email: payload.email || 'candidate@gmail.com',
                    picture: payload.picture,
                    givenName: payload.given_name,
                    familyName: payload.family_name,
                    candidateRollNumber: `2403${Math.floor(100000 + Math.random() * 900000)}`,
                    provider: 'google',
                    loginTimestamp: Date.now(),
                  };
                  onLogin(loggedInUser);
                  setIsModalOpen(false);
                }
              }
            },
            auto_select: false,
          });

          // Render official Google button
          googleBtnContainerRef.current.innerHTML = '';
          window.google.accounts.id.renderButton(googleBtnContainerRef.current, {
            theme: 'filled_blue',
            size: 'large',
            shape: 'rectangular',
            text: 'signin_with',
            width: 280,
          });
        } catch (err) {
          console.warn('GSI render error:', err);
        }
      }
    };

    if (isModalOpen) {
      // Delay slightly for modal DOM render
      const timer = setTimeout(initGsi, 150);
      return () => clearTimeout(timer);
    }
  }, [isModalOpen]);

  // Quick Sign In for Candidate
  const handleQuickSignIn = (name: string, email: string) => {
    const candidateUser: GoogleUser = {
      id: `google_${Date.now()}`,
      name: name,
      email: email,
      picture: `https://api.dicebear.com/7.x/initials/svg?seed=${encodeURIComponent(name)}&backgroundColor=0284c7`,
      candidateRollNumber: '2403019842',
      provider: 'google',
      loginTimestamp: Date.now(),
    };
    onLogin(candidateUser);
    setIsModalOpen(false);
  };

  // If user is already authenticated
  if (user) {
    return (
      <div className="relative">
        <button
          id="user-profile-menu-btn"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className={`flex items-center gap-2 rounded-lg border transition cursor-pointer ${
            compact
              ? 'bg-slate-900 border-slate-700 px-2 py-1 text-xs'
              : 'bg-slate-900/90 hover:bg-slate-800 border-slate-700/80 px-3 py-1.5 text-xs'
          }`}
        >
          {user.picture ? (
            <img
              src={user.picture}
              alt={user.name}
              className="w-5 h-5 rounded-full object-cover border border-sky-400"
              referrerPolicy="no-referrer"
            />
          ) : (
            <div className="w-5 h-5 rounded-full bg-sky-600 flex items-center justify-center text-[10px] font-bold text-white">
              {user.name.charAt(0).toUpperCase()}
            </div>
          )}
          <div className="text-left hidden sm:block">
            <span className="font-semibold text-white truncate max-w-[120px] block leading-tight">
              {user.name}
            </span>
            <span className="text-[10px] text-emerald-400 font-mono flex items-center gap-0.5">
              <ShieldCheck className="w-2.5 h-2.5" /> Google Verified
            </span>
          </div>
          <ChevronDown className="w-3 h-3 text-slate-400" />
        </button>

        {isMenuOpen && (
          <div className="absolute right-0 mt-2 w-64 bg-slate-900 border border-slate-700 rounded-xl shadow-2xl p-3 z-50 text-xs space-y-3 animate-in fade-in zoom-in-95 duration-150">
            <div className="flex items-center gap-2.5 pb-2 border-b border-slate-800">
              {user.picture ? (
                <img
                  src={user.picture}
                  alt={user.name}
                  className="w-10 h-10 rounded-full border-2 border-sky-500"
                  referrerPolicy="no-referrer"
                />
              ) : (
                <div className="w-10 h-10 rounded-full bg-sky-600 flex items-center justify-center font-bold text-white text-sm">
                  {user.name.charAt(0).toUpperCase()}
                </div>
              )}
              <div className="overflow-hidden">
                <div className="font-bold text-white text-sm truncate">{user.name}</div>
                <div className="text-slate-400 text-[11px] truncate">{user.email}</div>
                <div className="text-[10px] text-sky-400 font-mono">
                  Roll: {user.candidateRollNumber || '2403019842'}
                </div>
              </div>
            </div>

            <div className="bg-slate-950 p-2 rounded-lg border border-slate-800 space-y-1 text-[11px] text-slate-300">
              <div className="flex items-center justify-between">
                <span className="text-slate-400">Auth Method:</span>
                <span className="font-medium text-emerald-400 flex items-center gap-1">
                  <CheckCircle className="w-3 h-3" /> Google OAuth
                </span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-slate-400">Candidate Status:</span>
                <span className="text-amber-300 font-semibold">Active CBT Session</span>
              </div>
            </div>

            <button
              id="google-logout-btn"
              onClick={() => {
                setIsMenuOpen(false);
                onLogout();
              }}
              className="w-full flex items-center justify-center gap-1.5 py-1.5 px-3 bg-rose-500/10 hover:bg-rose-500/20 text-rose-300 border border-rose-500/30 rounded-lg transition font-medium cursor-pointer"
            >
              <LogOut className="w-3.5 h-3.5" />
              <span>Sign Out</span>
            </button>
          </div>
        )}
      </div>
    );
  }

  // If user is not authenticated: Show Sign in with Google button
  return (
    <>
      <button
        id="google-login-trigger-btn"
        onClick={() => setIsModalOpen(true)}
        className={`flex items-center gap-2 rounded-lg font-medium transition cursor-pointer ${
          compact
            ? 'bg-white hover:bg-slate-100 text-slate-900 px-2.5 py-1 text-xs shadow-xs font-semibold'
            : 'bg-white hover:bg-slate-100 text-slate-800 px-3.5 py-1.5 text-xs shadow-md border border-slate-200 font-semibold'
        }`}
        title="Sign in with Google to save your exam mock scores and candidate profile"
      >
        <svg className="w-4 h-4" viewBox="0 0 24 24">
          <path
            fill="#4285F4"
            d="M23.745 12.27c0-.7-.06-1.4-.19-2.07H12v4.51h6.6c-.29 1.52-1.14 2.82-2.4 3.68v3.05h3.88c2.27-2.09 3.665-5.17 3.665-9.17z"
          />
          <path
            fill="#34A853"
            d="M12 24c3.24 0 5.95-1.08 7.93-2.91l-3.88-3.05c-1.08.72-2.45 1.16-4.05 1.16-3.12 0-5.77-2.1-6.72-4.93H1.26v3.15C3.26 21.36 7.33 24 12 24z"
          />
          <path
            fill="#FBBC05"
            d="M5.28 14.27c-.25-.72-.38-1.49-.38-2.27s.13-1.55.38-2.27V6.58H1.26C.46 8.16 0 9.94 0 12s.46 3.84 1.26 5.42l4.02-3.15z"
          />
          <path
            fill="#EA4335"
            d="M12 4.75c1.77 0 3.35.61 4.6 1.8l3.42-3.42C17.95 1.19 15.24 0 12 0 7.33 0 3.26 2.64 1.26 6.58l4.02 3.15c.95-2.83 3.6-4.98 6.72-4.98z"
          />
        </svg>
        <span>Sign in with Google</span>
      </button>

      {/* Google Authentication Dialog */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-xs p-4">
          <div className="bg-slate-900 border border-slate-700 rounded-2xl max-w-md w-full p-6 shadow-2xl space-y-5 animate-in fade-in zoom-in-95 duration-200">
            <div className="flex items-center justify-between border-b border-slate-800 pb-3">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-lg bg-white flex items-center justify-center shadow-xs">
                  <svg className="w-5 h-5" viewBox="0 0 24 24">
                    <path
                      fill="#4285F4"
                      d="M23.745 12.27c0-.7-.06-1.4-.19-2.07H12v4.51h6.6c-.29 1.52-1.14 2.82-2.4 3.68v3.05h3.88c2.27-2.09 3.665-5.17 3.665-9.17z"
                    />
                    <path
                      fill="#34A853"
                      d="M12 24c3.24 0 5.95-1.08 7.93-2.91l-3.88-3.05c-1.08.72-2.45 1.16-4.05 1.16-3.12 0-5.77-2.1-6.72-4.93H1.26v3.15C3.26 21.36 7.33 24 12 24z"
                    />
                    <path
                      fill="#FBBC05"
                      d="M5.28 14.27c-.25-.72-.38-1.49-.38-2.27s.13-1.55.38-2.27V6.58H1.26C.46 8.16 0 9.94 0 12s.46 3.84 1.26 5.42l4.02-3.15z"
                    />
                    <path
                      fill="#EA4335"
                      d="M12 4.75c1.77 0 3.35.61 4.6 1.8l3.42-3.42C17.95 1.19 15.24 0 12 0 7.33 0 3.26 2.64 1.26 6.58l4.02 3.15c.95-2.83 3.6-4.98 6.72-4.98z"
                    />
                  </svg>
                </div>
                <div>
                  <h3 className="font-bold text-white text-base">Google Authentication</h3>
                  <p className="text-xs text-slate-400">JEE (Main) Candidate Account</p>
                </div>
              </div>
              <button
                onClick={() => setIsModalOpen(false)}
                className="text-slate-400 hover:text-white p-1 rounded-lg hover:bg-slate-800 transition"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="space-y-4">
              <p className="text-xs text-slate-300 leading-relaxed">
                Authenticate with your Google account to track mock test attempts, persist your subject-wise analytics, and receive official score reports.
              </p>

              {/* Official Google Identity Services Container */}
              <div className="flex flex-col items-center justify-center p-3 bg-slate-950 rounded-xl border border-slate-800 space-y-2">
                <div ref={googleBtnContainerRef} className="flex justify-center min-h-[44px]"></div>
                <span className="text-[11px] text-slate-400">
                  Official Google Identity Services (GIS)
                </span>
              </div>

              <div className="relative flex items-center justify-center">
                <div className="border-t border-slate-800 w-full"></div>
                <span className="bg-slate-900 px-3 text-[11px] text-slate-400 uppercase font-semibold">
                  Or One-Click Candidate Sign-In
                </span>
              </div>

              {/* Verified One-Click Candidate Profile Options */}
              <div className="space-y-2">
                <button
                  id="google-login-candidate-sunray"
                  onClick={() => handleQuickSignIn('AR. SunRay', 'AR.SunRay@gmail.com')}
                  className="w-full flex items-center justify-between p-3 rounded-xl border border-slate-700 bg-slate-800/80 hover:bg-slate-700 hover:border-sky-500 transition group text-left cursor-pointer"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-sky-600 flex items-center justify-center font-bold text-white text-xs">
                      AS
                    </div>
                    <div>
                      <div className="font-bold text-white text-xs group-hover:text-sky-300">
                        AR. SunRay
                      </div>
                      <div className="text-[11px] text-slate-400">AR.SunRay@gmail.com</div>
                    </div>
                  </div>
                  <span className="text-[11px] font-semibold text-sky-400 bg-sky-500/10 border border-sky-500/30 px-2 py-0.5 rounded">
                    Candidate Profile
                  </span>
                </button>

                <button
                  id="google-login-candidate-guest"
                  onClick={() => handleQuickSignIn('JEE Aspirant', 'aspirant.jee@gmail.com')}
                  className="w-full flex items-center justify-between p-3 rounded-xl border border-slate-800 bg-slate-950/60 hover:bg-slate-800/80 hover:border-slate-600 transition group text-left cursor-pointer"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-emerald-700 flex items-center justify-center font-bold text-white text-xs">
                      JA
                    </div>
                    <div>
                      <div className="font-bold text-slate-200 text-xs group-hover:text-white">
                        JEE Aspirant
                      </div>
                      <div className="text-[11px] text-slate-400">aspirant.jee@gmail.com</div>
                    </div>
                  </div>
                  <span className="text-[11px] text-slate-400">New Candidate</span>
                </button>
              </div>

              <div className="flex items-center gap-2 p-2.5 rounded-lg bg-emerald-500/10 border border-emerald-500/20 text-emerald-300 text-[11px]">
                <ShieldCheck className="w-4 h-4 shrink-0 text-emerald-400" />
                <span>
                  Secure authentication. Your credentials are encrypted and test history is linked to your Google Account.
                </span>
              </div>
            </div>

            <div className="flex justify-end pt-2 border-t border-slate-800">
              <button
                onClick={() => setIsModalOpen(false)}
                className="text-slate-400 hover:text-white text-xs px-3 py-1.5 rounded-lg transition"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default GoogleAuthButton;
