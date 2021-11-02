import React from 'react';

export const Problem = ({ project }) => {
  return (
    <div className="problem">
      <h3 className="h3-problem">Problemática</h3>
      <p className="txt-problem">{project.problem}</p>
    </div>
  );
};
