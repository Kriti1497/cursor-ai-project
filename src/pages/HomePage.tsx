import React from 'react';
import { useAuth } from '../contexts/AuthContext';
import { useProjects } from '../contexts/ProjectContext';
import { useNavigate } from 'react-router-dom';
import './HomePage.css';

export const HomePage: React.FC = () => {
  const { user } = useAuth();
  const { getProjectStats } = useProjects();
  const navigate = useNavigate();
  const stats = getProjectStats();

  const handleProjectClick = (view: string) => {
    navigate(`/projects/${view}`);
  };

  return (
    <div className="home-page">
      <div className="hero-section">
        <div className="hero-content animate-fade-in">
          <h1>Welcome to Your Dashboard</h1>
          <p className="subtitle">Hello, {user?.username}! 👋</p>
        </div>
        <div className="stats-container">
          <div 
            className="stat-card animate-slide-up clickable"
            onClick={() => handleProjectClick('all')}
          >
            <div className="stat-icon">📊</div>
            <div className="stat-content">
              <h3>Projects</h3>
              <p className="stat-number">{stats.total}</p>
            </div>
          </div>
          <div 
            className="stat-card animate-slide-up clickable" 
            style={{ animationDelay: '0.2s' }}
            onClick={() => handleProjectClick('completed')}
          >
            <div className="stat-icon">✅</div>
            <div className="stat-content">
              <h3>Completed</h3>
              <p className="stat-number">{stats.completed}</p>
            </div>
          </div>
          <div 
            className="stat-card animate-slide-up clickable" 
            style={{ animationDelay: '0.4s' }}
            onClick={() => handleProjectClick('in-progress')}
          >
            <div className="stat-icon">🎯</div>
            <div className="stat-content">
              <h3>In Progress</h3>
              <p className="stat-number">{stats.inProgress}</p>
            </div>
          </div>
        </div>
      </div>

      <div className="features-section">
        <h2 className="section-title animate-fade-in">Featured Tools</h2>
        <div className="features-grid">
          <div className="feature-card animate-scale">
            <div className="feature-icon">🔒</div>
            <h3>Security</h3>
            <p>Advanced authentication and data protection</p>
          </div>
          <div className="feature-card animate-scale" style={{ animationDelay: '0.2s' }}>
            <div className="feature-icon">🎨</div>
            <h3>Themes</h3>
            <p>Customizable light and dark mode</p>
          </div>
          <div className="feature-card animate-scale" style={{ animationDelay: '0.4s' }}>
            <div className="feature-icon">📱</div>
            <h3>Responsive</h3>
            <p>Works on all devices and screen sizes</p>
          </div>
          <div className="feature-card animate-scale" style={{ animationDelay: '0.6s' }}>
            <div className="feature-icon">⚡</div>
            <h3>Performance</h3>
            <p>Optimized for speed and efficiency</p>
          </div>
        </div>
      </div>

      <div className="quick-actions">
        <h2 className="section-title animate-fade-in">Quick Actions</h2>
        <div className="actions-container">
          <button 
            className="action-button animate-bounce"
            onClick={() => handleProjectClick('all')}
          >
            <span className="action-icon">📝</span>
            New Project
          </button>
          <button 
            className="action-button animate-bounce" 
            style={{ animationDelay: '0.2s' }}
            onClick={() => navigate('/projects/all')}
          >
            <span className="action-icon">📊</span>
            View Reports
          </button>
          <button 
            className="action-button animate-bounce" 
            style={{ animationDelay: '0.4s' }}
          >
            <span className="action-icon">⚙️</span>
            Settings
          </button>
        </div>
      </div>
    </div>
  );
};
