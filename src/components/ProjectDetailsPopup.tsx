import React from 'react';
import './ProjectDetailsPopup.css';
import { Project } from '../types/project';

interface ProjectDetailsPopupProps {
  project: Project;
  onClose: () => void;
  isOpen: boolean;
}

export const ProjectDetailsPopup: React.FC<ProjectDetailsPopupProps> = ({ project, onClose, isOpen }) => {
  if (!isOpen) return null;

  const getStatusColor = (status: string) => {
    return status === 'completed' ? 'var(--success-color)' : 'var(--warning-color)';
  };

  return (
    <div className="popup-overlay" onClick={onClose}>
      <div className="popup-content" onClick={e => e.stopPropagation()}>
        <button className="close-button" onClick={onClose}>&times;</button>
        
        <div className="popup-header">
          <h2>{project.title}</h2>
          <span 
            className="status-badge"
            style={{ backgroundColor: getStatusColor(project.status) }}
          >
            {project.status === 'completed' ? 'Completed' : 'In Progress'}
          </span>
        </div>

        <div className="popup-body">
          <div className="detail-section">
            <h3>Description</h3>
            <p>{project.description}</p>
          </div>

          <div className="detail-section">
            <h3>Progress</h3>
            <div className="progress-bar">
              <div 
                className="progress-fill"
                style={{ 
                  width: `${project.progress}%`,
                  backgroundColor: getStatusColor(project.status)
                }}
              />
            </div>
            <div className="progress-info">
              <span className="progress-text">{project.progress}% Complete</span>
            </div>
          </div>

          <div className="detail-section">
            <h3>Due Date</h3>
            <p>{project.dueDate}</p>
          </div>

          {project.team && (
            <div className="detail-section">
              <h3>Team Members</h3>
              <div className="team-members">
                {project.team.map((member, index) => (
                  <div key={index} className="team-member">
                    {member}
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}; 