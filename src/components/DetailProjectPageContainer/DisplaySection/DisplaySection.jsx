import React from 'react';
import { HeaderDisplaySection } from './HeaderDisplaySection/HeaderDisplaySection';
import { Problem } from './Problem/Problem';

export const DisplaySection = ({ projects }) => {
  return (
    <div className="display-section">
      {projects.data?.map((project) => (
        <HeaderDisplaySection project={project} key={project.id} />
      ))}
      {projects.data?.map((project) => (
        <Problem project={project} key={project.id} />
      ))}
    </div>
  );
};
