import { NavLink } from 'react-router-dom';
import './Sidebar.css';

const navItems = [
  { label: 'Dashboard', path: '/' },
  { label: 'Players', path: '/players' },
  { label: 'Match Center', path: '/match-center' },
  { label: 'History', path: '/history' },
  { label: 'Weekly Summary', path: '/weekly-summary' },
  { label: 'Rules Patoda(g)', path: '/rules-patodag' },
  { label: 'Ground Expense', path: '/ground-expense' },
  { label: 'Ground Fund Summary', path: '/ground-fund-summary' },
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
          Mode: {accessMode === 'admin' ? 'Admin' : 'Player'}
        </small>
        <button type="button" className="sidebar-switch-btn" onClick={onSwitchRole}>
          Switch Role
        </button>
      </div>
    </aside>
  );
}

export default Sidebar;
