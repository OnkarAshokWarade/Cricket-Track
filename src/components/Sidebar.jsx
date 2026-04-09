import { NavLink } from 'react-router-dom';
import './Sidebar.css';

const navItems = [
  { label: 'Dashboard', path: '/' },
  { label: 'Players', path: '/players' },
  { label: 'Teams', path: '/teams' },
  { label: 'Captains', path: '/captains' },
  { label: 'Match', path: '/match' },
  { label: 'History', path: '/history' },
  { label: 'Ground Expense', path: '/ground-expense' },
  { label: 'Weekly Summary', path: '/weekly-summary' },
  { label: 'Rules Patoda(g)', path: '/rules-patodag' },
];

function Sidebar({ accessMode, onSwitchRole }) {
  return (
    <aside className="sidebar">
      <div className="sidebar-brand">
        <span>Patoda XI</span>
        <p>Cricket group manager</p>
      </div>

      <nav className="sidebar-nav">
        {navItems.map((item) => (
          <NavLink
            key={item.path}
            to={item.path}
            className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')}
          >
            {item.label}
          </NavLink>
        ))}
      </nav>

      <div className="sidebar-footer">
        <small className="sidebar-mode-tag">
          Mode: {accessMode === 'admin' ? 'Admin' : 'Guest'}
        </small>
        <button type="button" className="sidebar-switch-btn" onClick={onSwitchRole}>
          Switch Role
        </button>
      </div>
    </aside>
  );
}

export default Sidebar;