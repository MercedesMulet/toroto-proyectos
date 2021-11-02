import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { DisplaySection } from './DisplaySection/DisplaySection';
import { ImpactSection } from './ImpactSection/ImpactSection';
import { ImplementationSection } from './ImplementationSection/ImplementationSection';
import { ProjectDevelopmentSection } from './ProjectDevelopmentSection/ProjectDevelopmentSection';

export const DetailProjectPageContainer = () => {
  const { projectid } = useParams();
  const [projects, setProjects] = useState(null);

  useEffect(() => {
    fetch(`https://fieldops-api.toroto.mx/api/projects/${projectid}`)
      .then((response) => response.json())
      .then((data) => {
        setProjects(data);
        console.log();
      })
      .catch((err) => {
        console.log(err);
      });
  }, [projectid]);

  if (!projects) return null;

  return (
    <div className="detail-project-page-container">
      <DisplaySection projects={projects} />
      <ImplementationSection projects={projects} />
      <ImpactSection projects={projects} />
      <ProjectDevelopmentSection />
    </div>
  );
};
