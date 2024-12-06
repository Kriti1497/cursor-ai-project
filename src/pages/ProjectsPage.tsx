import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useProjects } from '../contexts/ProjectContext';
import { ProjectDetailsPopup } from '../components/ProjectDetailsPopup';
import './ProjectsPage.css';

export const ProjectsPage: React.FC = () => {
  const { view = 'all' } = useParams<{ view: string }>();
  const navigate = useNavigate();
  const { projects } = useProjects();
  const [selectedProject, setSelectedProject] = useState<number | null>(null);

  const filteredProjects = projects.filter(project => {
    if (view === 'completed') return project.status === 'completed';
    if (view === 'in-progress') return project.status === 'in-progress';
    return true;
  });

  const getStatusColor = (status: string) => {
    return status === 'completed' ? 'var(--success-color)' : 'var(--warning-color)';
  };

  const viewTitles = {
    all: 'All Projects',
    completed: 'Completed Projects',
    'in-progress': 'Projects In Progress'
  };

  const handleViewDetails = (projectId: number) => {
    setSelectedProject(projectId);
  };

  const handleClosePopup = () => {
    setSelectedProject(null);
  };

  return (
    <div className="projects-page animate-fade-in">
      <div className="projects-header">
        <h1>{viewTitles[view as keyof typeof viewTitles]}</h1>
        <div className="view-filters">
          <button 
            className={`filter-button ${view === 'all' ? 'active' : ''}`}
            onClick={() => navigate('/projects/all')}
          >
            All
          </button>
          <button 
            className={`filter-button ${view === 'completed' ? 'active' : ''}`}
            onClick={() => navigate('/projects/completed')}
          >
            Completed
          </button>
          <button 
            className={`filter-button ${view === 'in-progress' ? 'active' : ''}`}
            onClick={() => navigate('/projects/in-progress')}
          >
            In Progress
          </button>
        </div>
      </div>

      <div className="projects-grid">
        {filteredProjects.map(project => (
          <div key={project.id} className="project-card animate-scale">
            <div className="project-header">
              <h3>{project.title}</h3>
              <span 
                className="status-badge"
                style={{ backgroundColor: getStatusColor(project.status) }}
              >
                {project.status === 'completed' ? 'Completed' : 'In Progress'}
              </span>
            </div>
            <p className="project-description">{project.description}</p>
            <div className="project-progress">
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
                <span className="progress-text">{project.progress}%</span>
                <span className="due-date">Due: {project.dueDate}</span>
              </div>
            </div>
            <div className="project-footer">
              <button 
                className="view-details-btn"
                onClick={() => handleViewDetails(project.id)}
              >
                View Details
              </button>
            </div>
          </div>
        ))}
      </div>

      {selectedProject !== null && (
        <ProjectDetailsPopup
          project={projects.find(p => p.id === selectedProject)!}
          onClose={handleClosePopup}
          isOpen={true}
        />
      )}
    </div>
  );
}; 