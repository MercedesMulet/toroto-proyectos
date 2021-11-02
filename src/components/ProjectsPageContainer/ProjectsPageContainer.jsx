import React from 'react';
import { HeaderSectionDesktop } from './HeaderSectionDesktop/HeaderSectionDesktop';
import { HeaderSectionMobile } from './HeaderSectionMobile/HeaderSectionMobile';
import { ProjectGridContainer } from './ProjectGridContainer/ProjectGridContainer';

export const ProjectsPageContainer = () => {
  return (
    <>
      <div className="header-mobile">
        <HeaderSectionMobile />
      </div>
      <div className="header-desktop">
        <HeaderSectionDesktop />
      </div>
      <ProjectGridContainer />
    </>
  );
};
