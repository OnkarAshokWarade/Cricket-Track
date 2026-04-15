import React, { useEffect, useRef, useState } from 'react';
import { Navigate, Routes, Route, useLocation } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import PendingFeeNotice from './components/PendingFeeNotice';
import Dashboard from './pages/Dashboard';
import PlayersPage from './pages/PlayersPage';
import MatchCenterPage from './pages/MatchCenterPage';
import HistoryPage from './pages/HistoryPage';
import GroundExpensePage from './pages/GroundExpensePage';
import GroundFundSummaryPage from './pages/GroundFundSummaryPage';
import WeeklySummaryPage from './pages/WeeklySummaryPage';
import RulesPatodaPage from './pages/RulesPatodaPage';
import { AppDataProvider, useAppData } from './context/AppDataContext';
import useAutoClearMessage from './hooks/useAutoClearMessage';

const ADMIN_PASSWORD = '9322070390';

const isInteractiveWriteTarget = (target) => {
  if (!(target instanceof HTMLElement)) {
    return false;
  }

  return Boolean(
    target.closest('form, button, input, select, textarea, label, [contenteditable="true"]')
  );
};

const isGuestAllowedTarget = (target) => {
  if (!(target instanceof HTMLElement)) {
    return false;
  }

  return Boolean(target.closest('[data-guest-allowed="true"]'));
};

function AppContent() {
  const location = useLocation();
  const routeScrollRef = useRef(null);
  const authCardRef = useRef(null);
  const adminPasswordInputRef = useRef(null);
  const [accessMode, setAccessMode] = useState(null);
  const [showAdminLogin, setShowAdminLogin] = useState(false);
  const [adminPassword, setAdminPassword] = useState('');
  const [authError, setAuthError] = useState('');
  const { isReady, isDatabaseConfigured, syncError, players, matches } = useAppData();

  useAutoClearMessage(authError, setAuthError);

  useEffect(() => {
    if (routeScrollRef.current) {
      routeScrollRef.current.scrollTo({ top: 0, behavior: 'auto' });
    }
  }, [location.pathname]);

  useEffect(() => {
    if (!showAdminLogin) {
      return undefined;
    }

    const scrollAuthCardIntoView = () => {
      authCardRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
      adminPasswordInputRef.current?.scrollIntoView({ behavior: 'smooth', block: 'center' });
    };

    const timerId = window.setTimeout(scrollAuthCardIntoView, 120);
    const viewport = window.visualViewport;

    if (viewport) {
      viewport.addEventListener('resize', scrollAuthCardIntoView);
      viewport.addEventListener('scroll', scrollAuthCardIntoView);
    }

    return () => {
      window.clearTimeout(timerId);
      if (viewport) {
        viewport.removeEventListener('resize', scrollAuthCardIntoView);
        viewport.removeEventListener('scroll', scrollAuthCardIntoView);
      }
    };
  }, [showAdminLogin]);

  const isGuest = accessMode === 'guest';
  const noticeEnabledRoutes = new Set(['/', '/players', '/match-center', '/history', '/weekly-summary']);
  const shouldShowPendingFeeNotice = noticeEnabledRoutes.has(location.pathname);

  const handleGuestEntry = () => {
    setAccessMode('guest');
    setShowAdminLogin(false);
    setAuthError('');
    setAdminPassword('');
  };

  const handleAdminEntry = (event) => {
    event.preventDefault();

    if (adminPassword.trim() !== ADMIN_PASSWORD) {
      setAuthError('Incorrect password. Please try again.');
      return;
    }

    setAccessMode('admin');
    setShowAdminLogin(false);
    setAuthError('');
    setAdminPassword('');
  };

  const handleSwitchRole = () => {
    setAccessMode(null);
    setShowAdminLogin(false);
    setAdminPassword('');
    setAuthError('');
  };

  const blockGuestInteraction = (event) => {
    if (!isGuest) {
      return;
    }

    if (isGuestAllowedTarget(event.target)) {
      return;
    }

    if (isInteractiveWriteTarget(event.target)) {
      event.preventDefault();
      event.stopPropagation();
    }
  };

  const blockGuestKeyboardWrite = (event) => {
    if (!isGuest) {
      return;
    }

    if (isGuestAllowedTarget(event.target)) {
      return;
    }

    if (!isInteractiveWriteTarget(event.target)) {
      return;
    }

    if (event.key === 'Tab' || event.key === 'Escape') {
      return;
    }

    event.preventDefault();
    event.stopPropagation();
  };

  if (!accessMode) {
    return (
      <div className={`auth-shell ${showAdminLogin ? 'auth-shell-login-active' : ''}`}>
        <div className={`auth-card ${showAdminLogin ? 'auth-card-active' : ''}`} ref={authCardRef}>
          <div className="auth-copy">
            <h1 className="auth-title">Patoda XI Access</h1>
            <p className="auth-subtitle">Choose how you want to open the app.</p>
          </div>

          <div className="auth-actions">
            <button type="button" className="auth-choice-button auth-choice-button-secondary" onClick={handleGuestEntry}>
              Continue as Player
            </button>
            <button
              type="button"
              className="auth-choice-button auth-choice-button-primary"
              onClick={() => {
                setShowAdminLogin(true);
                setAuthError('');
              }}
            >
              Login as Admin
            </button>
          </div>

          {showAdminLogin ? (
            <div className="auth-form-panel">
              <form className="auth-form" onSubmit={handleAdminEntry}>
                <label className="input-label auth-input-label" htmlFor="admin-password">
                  Admin Password
                </label>
                <input
                  id="admin-password"
                  type="password"
                  ref={adminPasswordInputRef}
                  value={adminPassword}
                  onChange={(event) => setAdminPassword(event.target.value)}
                  onFocus={() => adminPasswordInputRef.current?.scrollIntoView({ behavior: 'smooth', block: 'center' })}
                  placeholder="Enter admin password"
                  autoFocus
                  required
                />
                <div className="auth-form-actions">
                  <button type="submit" className="auth-choice-button auth-choice-button-primary">
                    Unlock Admin
                  </button>
                  <button
                    type="button"
                    className="auth-choice-button auth-choice-button-secondary"
                    onClick={() => {
                      setShowAdminLogin(false);
                      setAdminPassword('');
                      setAuthError('');
                    }}
                  >
                    Cancel
                  </button>
                </div>
                {authError ? <p className="auth-error">{authError}</p> : null}
              </form>
            </div>
          ) : null}
        </div>
      </div>
    );
  }

  return (
    <div className="app-shell">
      <Sidebar accessMode={accessMode} onSwitchRole={handleSwitchRole} />
      <main
        className={`app-main ${isGuest ? 'read-only-mode' : ''}`}
        onClickCapture={blockGuestInteraction}
        onChangeCapture={blockGuestInteraction}
        onSubmitCapture={blockGuestInteraction}
        onKeyDownCapture={blockGuestKeyboardWrite}
      >
        {isGuest ? (
          <div className="readonly-banner">
            Player Mode: You can Only View
          </div>
        ) : null}

        {shouldShowPendingFeeNotice ? (
          <PendingFeeNotice
            matches={matches}
            players={players}
            resetKey={location.pathname}
            timedVisibility
          />
        ) : null}

        {!isDatabaseConfigured ? (
          <div className="database-banner database-banner-warning">
            Firebase Realtime Database is not configured. Admin changes cannot be saved.
          </div>
        ) : syncError ? (
          <div className="database-banner database-banner-warning">{syncError}</div>
        ) : !isReady ? (
          <div className="database-banner">Loading database data...</div>
        ) : null}

        <div className="route-scroll-area" ref={routeScrollRef}>
          <Routes>
            <Route path="/" element={<Dashboard accessMode={accessMode} />} />
            <Route path="/players" element={<PlayersPage accessMode={accessMode} />} />
            <Route path="/match-center" element={<MatchCenterPage accessMode={accessMode} />} />
            <Route path="/teams" element={<Navigate to="/match-center" replace />} />
            <Route path="/captains" element={<Navigate to="/match-center" replace />} />
            <Route path="/match" element={<Navigate to="/match-center" replace />} />
            <Route path="/history" element={<HistoryPage accessMode={accessMode} />} />
            <Route path="/ground-expense" element={<GroundExpensePage accessMode={accessMode} />} />
            <Route path="/ground-fund-summary" element={<GroundFundSummaryPage accessMode={accessMode} />} />
            <Route path="/weekly-summary" element={<WeeklySummaryPage accessMode={accessMode} />} />
            <Route path="/rules-patodag" element={<RulesPatodaPage />} />
          </Routes>
        </div>
      </main>
    </div>
  );
}

function App() {
  return (
    <AppDataProvider>
      <AppContent />
    </AppDataProvider>
  );
}

export default App;
