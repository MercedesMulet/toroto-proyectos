import React, { useState, useEffect } from 'react';
import { ProjectGridList } from './ProjectGridList/ProjectGridList';

export const ProjectGridContainer = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    fetch('https://fieldops-api.toroto.mx/api/projects?limit=4')
      .then((response) => response.json())
      .then((data) => {
        setProjects(data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div className="project-grid-container">
      <div className="h2-project-grid-container-div">
        <h2 className="h2-project-grid-container">Todos nuestros proyectos</h2>
      </div>
      <ProjectGridList projects={projects} />
    </div>
  );
};
