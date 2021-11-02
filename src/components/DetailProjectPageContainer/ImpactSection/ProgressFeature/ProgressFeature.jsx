import React from 'react';

export const ProgressFeature = ({ project }) => {
  return (
    <>
      {project.impact.map((project) => (
        <div className="progress-feature" key={project.name}>
          <p className="impact-number">{project.value}</p>
          <p className="impact-content">{project.name}</p>
        </div>
      ))}
    </>
  );
};
