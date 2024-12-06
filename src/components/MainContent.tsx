import React, { useState } from 'react';
import { useAuth } from '../contexts/AuthContext';
import { useTheme } from '../contexts/ThemeContext';
import { Login } from './Login';
import { Sidebar } from './Sidebar';
import { HomePage } from '../pages/HomePage';
import { AboutPage } from '../pages/AboutPage';
import { ContactPage } from '../pages/ContactPage';
import '../pages/Pages.css';
import './MainContent.css';

export const MainContent: React.FC = () => {
  const { user, logout, isAuthenticated } = useAuth();
  const { theme, toggleTheme } = useTheme();
  const [activePage, setActivePage] = useState('home');
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  if (!isAuthenticated) {
    return <Login />;
  }

  const renderPage = () => {
    switch (activePage) {
      case 'about':
        return <AboutPage />;
      case 'contact':
        return <ContactPage />;
      default:
        return <HomePage />;
    }
  };

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className="main-content">
      <nav className="navbar">
        <div className="nav-left">
          <button onClick={toggleSidebar} className="sidebar-toggle">
            {isSidebarOpen ? '◀' : '▶'}
          </button>
          <div className="user-info">
            Welcome, {user?.username}!
          </div>
        </div>
        <div className="nav-controls">
          <div className="theme-control">
            <span className="theme-text">Theme: <span className="theme-value">{theme}</span></span>
            <button onClick={toggleTheme} className="theme-toggle">
              {theme === 'light' ? '🌙' : '☀️'}
            </button>
          </div>
          <button onClick={logout} className="logout-button">
            Logout
          </button>
        </div>
      </nav>
      <div className="layout">
        <Sidebar activePage={activePage} onPageChange={setActivePage} isOpen={isSidebarOpen} />
        <main className={`main-area ${!isSidebarOpen ? 'sidebar-collapsed' : ''}`}>
          {renderPage()}
        </main>
      </div>
    </div>
  );
}; 