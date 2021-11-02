import React from 'react';
import { ActivitiesImplementation } from './ActivitiesImplementation/ActivitiesImplementation';
import { GalleryImplementation } from './GalleryImplementation/GalleryImplementation';
import { HeaderImplementation } from './HeaderImplementation/HeaderImplementation';
import { SitesMap } from './SitesMap/SitesMap';

export const ImplementationSection = ({ projects }) => {
  return (
    <div className="implementation-section">
      {projects.data?.map((project) => (
        <HeaderImplementation project={project} key={project.id} />
      ))}
      <h3 className="h3-implementation">Actividades de restauración</h3>
      {projects.data?.map((project) => (
        <ActivitiesImplementation project={project} key={project.id} />
      ))}
      <SitesMap />
      <GalleryImplementation />
    </div>
  );
};
