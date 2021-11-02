import React from 'react';
import { ProgressFeature } from './ProgressFeature/ProgressFeature';

export const ImpactSection = ({ projects }) => {
  console.log();

  return (
    <div className="impact-section">
      <h2 className="h2-impact">Impacto</h2>
      <div className="impact-grid">
        {projects.data?.map((project) => (
          <ProgressFeature project={project} key={project.id} />
        ))}
      </div>
    </div>
  );
};
