import React, { useEffect, useRef, useState } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import Dashboard from './pages/Dashboard';
import PlayersPage from './pages/PlayersPage';
import TeamsPage from './pages/TeamsPage';
import CaptainsPage from './pages/CaptainsPage';
import MatchPage from './pages/MatchPage';
import HistoryPage from './pages/HistoryPage';
import GroundExpensePage from './pages/GroundExpensePage';
import WeeklySummaryPage from './pages/WeeklySummaryPage';
import RulesPatodaPage from './pages/RulesPatodaPage';
import { AppDataProvider, useAppData } from './context/AppDataContext';

const ADMIN_PASSWORD = '9322070390';

const isInteractiveWriteTarget = (target) => {
  if (!(target instanceof HTMLElement)) {
    return false;
  }

  return Boolean(
    target.closest('form, button, input, select, textarea, label, [contenteditable="true"]')
  );
};

function AppContent() {
  const location = useLocation();
  const routeScrollRef = useRef(null);
  const [accessMode, setAccessMode] = useState(null);
  const [showAdminLogin, setShowAdminLogin] = useState(false);
  const [adminPassword, setAdminPassword] = useState('');
  const [authError, setAuthError] = useState('');
  const { isReady } = useAppData();

  useEffect(() => {
    if (routeScrollRef.current) {
      routeScrollRef.current.scrollTo({ top: 0, behavior: 'auto' });
    }
  }, [location.pathname]);

  const isGuest = accessMode === 'guest';

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

    if (isInteractiveWriteTarget(event.target)) {
      event.preventDefault();
      event.stopPropagation();
    }
  };

  const blockGuestKeyboardWrite = (event) => {
    if (!isGuest) {
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
      <div className="auth-shell">
        <div className="auth-card">
          <h1 className="auth-title">Patoda XI Access</h1>
          <p className="auth-subtitle">Choose how you want to open the app.</p>

          <div className="auth-actions">
            <button type="button" className="button-secondary" onClick={handleGuestEntry}>
              Continue as Guest
            </button>
            <button
              type="button"
              className="button-primary"
              onClick={() => {
                setShowAdminLogin(true);
                setAuthError('');
              }}
            >
              Login as Admin
            </button>
          </div>

          {showAdminLogin ? (
            <form className="auth-form" onSubmit={handleAdminEntry}>
              <label className="input-label" htmlFor="admin-password">
                Admin Password
              </label>
              <input
                id="admin-password"
                type="password"
                value={adminPassword}
                onChange={(event) => setAdminPassword(event.target.value)}
                placeholder="Enter admin password"
                autoFocus
                required
              />
              <div className="auth-actions">
                <button type="submit" className="button-primary">
                  Unlock Admin
                </button>
                <button
                  type="button"
                  className="button-secondary"
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
          ) : (
            <p className="auth-note">
              Guest can only view data. Admin can manage and update all sections.
            </p>
          )}
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
            Guest Mode: View only. Login as Admin to edit or manage data.
          </div>
        ) : null}

        {!isReady ? (
          <div className="readonly-banner" style={{ marginBottom: '14px' }}>
            Connecting to shared Firebase data...
          </div>
        ) : null}

        <div className="route-scroll-area" ref={routeScrollRef}>
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/players" element={<PlayersPage />} />
            <Route path="/teams" element={<TeamsPage />} />
            <Route path="/captains" element={<CaptainsPage />} />
            <Route path="/match" element={<MatchPage />} />
            <Route path="/history" element={<HistoryPage />} />
            <Route path="/ground-expense" element={<GroundExpensePage accessMode={accessMode} />} />
            <Route path="/weekly-summary" element={<WeeklySummaryPage />} />
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
