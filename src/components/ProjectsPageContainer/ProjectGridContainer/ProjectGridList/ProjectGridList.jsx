import React from 'react';
import { ProjectGridItem } from '../ProjectGridItem/ProjectGridItem';

export const ProjectGridList = ({ projects }) => {
  return (
    <div className="project-grid-list">
      {projects.data?.map((project) => (
        <ProjectGridItem project={project} key={project.id} />
      ))}
    </div>
  );
};
