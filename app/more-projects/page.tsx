"use client";

import { React, motion, useState } from "../imports/Imports";
import {
  WebProjects,
  MobileProjects,
  UIUXProjects,
  DesktopProjects
} from "./More-projects-imports";

const MoreProjects: React.FC = () => {
  const [isWebActive, setIsWebActive] = useState<boolean>(true);
  const [isMobileActive, setIsMobileActive] = useState<boolean>(false);
  const [isUIUXActive, setIsUIUXActive] = useState<boolean>(false);
  const [isdesktopActive, setIsDeskopActive] = useState<boolean>(false);

  type VoidType = () => void;

  const whichIsActiveHandler: (
    web: boolean,
    mobile: boolean,
    uiux: boolean,
    desktop: boolean,
    game: boolean
  ) => void = (web: boolean, mobile: boolean, uiux: boolean, desktop:boolean) => {
    setIsMobileActive(mobile);
    setIsUIUXActive(uiux);
    setIsWebActive(web);
    setIsDeskopActive(desktop)
  };

  const webActiveHandler: VoidType = () => {
    whichIsActiveHandler(true, false, false, false, false);
  };

  const mobileActiveHandler: VoidType = () => {
    whichIsActiveHandler(false, true, false, false, false);
  };

  const uiuxActiveHandler: VoidType = () => {
    whichIsActiveHandler(false, false, true, false, false);
  };
  const desktopActiveHandler: VoidType = () => {
    whichIsActiveHandler(false, false, false, true, false);
  };

  const RenderComponent: React.FC = () => {
    if (isWebActive) return <WebProjects />;
    else if (isMobileActive) return <MobileProjects />;
    else if (isUIUXActive) return <UIUXProjects />;
    else if (isdesktopActive) return <DesktopProjects />
  };

  return (
    <>
      <motion.nav className="more-project-nav">
        <motion.header className="more-project-nav__card rounded-full p-2">
          <motion.div
            className={`more-project-nav__card${
              isWebActive && "-one opacity-90"
            } transition-all duration-700 ease-linear p-[0.7rem] rounded-full opacity-50 hover:opacity-100 hover:cursor-pointer`}
            onClick={webActiveHandler}
          >
            <motion.span>
              Web <motion.span className="prj-space">Development</motion.span>
            </motion.span>
          </motion.div>
          <motion.div
            className={`more-project-nav__card${
              isUIUXActive && "-one opacity-90"
            } transition-all duration-700 ease-linear p-[0.7rem] hover:opacity-100 rounded-full opacity-50 hover:cursor-pointer`}
            onClick={uiuxActiveHandler}
          >
            <motion.span>
              UI UX <motion.span className="prj-space">Designer</motion.span>
            </motion.span>
          </motion.div>
          <motion.div
            className={`more-project-nav__card${
              isMobileActive && "-one opacity-90"
            } transition-all duration-700 ease-linear p-[0.7rem] rounded-full opacity-50 hover:opacity-100 hover:cursor-pointer`}
            onClick={mobileActiveHandler}
          >
            <motion.span>
              Mobile{" "}
              <motion.span className="prj-space">Development</motion.span>
            </motion.span>
          </motion.div>
{/*           <motion.div
            className={`more-project-nav__card${
              isdesktopActive && "-one opacity-90"
            } transition-all duration-700 ease-linear p-[0.7rem] rounded-full opacity-50 hover:opacity-100 hover:cursor-pointer`}
            onClick={desktopActiveHandler}
          >
            <motion.span>
              Desktop <motion.span className="prj-space">Development</motion.span>
            </motion.span>
          </motion.div> */}
        </motion.header>
      </motion.nav>
      <div className=" padding-div pt-[9rem]"></div>
      <RenderComponent />
    </>
  );
};

export default MoreProjects;
