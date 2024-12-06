import React, { createContext, useContext } from 'react';

export interface Project {
  id: number;
  title: string;
  description: string;
  status: 'completed' | 'in-progress';
  progress: number;
  dueDate: string;
}

// Mock projects data
export const projectsData: Project[] = [
  {
    id: 1,
    title: 'Website Redesign',
    description: 'Modernizing the company website with new features',
    status: 'completed',
    progress: 100,
    dueDate: '2024-02-15'
  },
  {
    id: 2,
    title: 'Mobile App Development',
    description: 'Creating a new mobile app for customers',
    status: 'in-progress',
    progress: 65,
    dueDate: '2024-03-30'
  },
  {
    id: 3,
    title: 'Database Migration',
    description: 'Migrating to a new cloud database system',
    status: 'completed',
    progress: 100,
    dueDate: '2024-01-20'
  },
  {
    id: 4,
    title: 'API Integration',
    description: 'Integrating third-party APIs',
    status: 'in-progress',
    progress: 40,
    dueDate: '2024-04-10'
  }
];

interface ProjectContextType {
  projects: Project[];
  getProjectStats: () => {
    total: number;
    completed: number;
    inProgress: number;
  };
}

const ProjectContext = createContext<ProjectContextType | undefined>(undefined);

export const ProjectProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const getProjectStats = () => {
    const completed = projectsData.filter(p => p.status === 'completed').length;
    const inProgress = projectsData.filter(p => p.status === 'in-progress').length;
    return {
      total: projectsData.length,
      completed,
      inProgress
    };
  };

  return (
    <ProjectContext.Provider value={{ projects: projectsData, getProjectStats }}>
      {children}
    </ProjectContext.Provider>
  );
};

export const useProjects = () => {
  const context = useContext(ProjectContext);
  if (context === undefined) {
    throw new Error('useProjects must be used within a ProjectProvider');
  }
  return context;
}; 