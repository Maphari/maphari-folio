import {
  React,
  motion,
  ProjectCardMore,
  UIUX_COMMUNICATEE_SHOWCASE,
  UIUX_RENTAL_SHOWCASE,
  UIUX_WEFIND_SHOWCASE,
  UIUX_WEFIND_MOBILE_SHOWCASE,
  BiLogoFigma,
  FiMoreVertical,
  Link,
  UIUX_REQUEST_MOBILE_SHOWCASE,
} from "../imports/Imports";

interface ITransition {
  ease?: string;
  type?: string;
  duration?: number;
  delay?: number;
  stiffness?: number;
}

export const UIUXProjects: React.FC = () => {
  const transition: ITransition = {
    ease: "backInOut",
    type: "spring",
    stiffness: 100,
    duration: 3,
    delay: 0.8,
  }
  return (
    <main className="web-project-container">
      <header className="web-project-container__header">
        <motion.h1
          className="web-project-container__header-head text-center"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={transition}
        >
          UI UX Designer <span className="text-yellow-600">Projects</span>
        </motion.h1>
      </header>
      <motion.h1
        className="mt-20 text-xl font-[400] text-center"
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={transition}
      >
        <span className="text-yellow-600">Website</span>
      </motion.h1>
      <section className="my-10 flex items-center justify-center gap-3 flex-wrap px-[1.5rem]">
        <ProjectCardMore
          ImageURL={UIUX_COMMUNICATEE_SHOWCASE.src}
          header="Communicatee UIUX"
          explanation="This was designed to help people with package delivery and to help people move from their old place to the new place."
        >
          <Link
            href="https://www.figma.com/file/Txwn9J1IAkRphHr55QoRfX/Communicatee.?type=design&node-id=0%3A1&mode=design&t=6HxzHR87g3Grnt91-1"
            target="_blank"
          >
            <motion.div className="cat-prj rounded-xl text-[10px] flex items-center gap-2">
              <BiLogoFigma />
              <span>Check Figma Design</span>
            </motion.div>
          </Link>
          <Link href="#">
            <motion.div className="cat-prj rounded-xl text-[10px] flex items-center gap-1">
              <FiMoreVertical />
              <span>Read More</span>
            </motion.div>
          </Link>
        </ProjectCardMore>
        <ProjectCardMore
          ImageURL={UIUX_RENTAL_SHOWCASE.src}
          header="Reantal agancy UIUX"
          explanation="This was designed to help people buy or rent real estate properties adding more flexibility to users who want to check how online estate looks like."
        >
          <Link
            href="https://www.figma.com/file/q2aOzGsviJSW8rA9vcJhKc/We-rent.com?type=design&node-id=51%3A244&mode=design&t=mTTOKtcUzNvwduUg-1"
            target="_blank"
          >
            <motion.div className="cat-prj rounded-xl text-[10px] flex items-center gap-2">
              <BiLogoFigma />
              <span>Check Figma Design</span>
            </motion.div>
          </Link>
          <Link href="#">
            <motion.div className="cat-prj rounded-xl text-[10px] flex items-center gap-1">
              <FiMoreVertical />
              <span>Read More</span>
            </motion.div>
          </Link>
        </ProjectCardMore>
        <ProjectCardMore
          ImageURL={UIUX_WEFIND_SHOWCASE.src}
          header="Wefind UIUX"
          explanation="This was designed to help people find their soulmates online get to explore more in online dating giving users flexibility to search for love online."
        >
          <Link
            href="https://www.figma.com/file/P8pCveNmcLj77juNxDbpMe/weFind-actual-design?type=design&node-id=601%3A15&mode=design&t=WeikqwKuTvrRuh1H-1"
            target="_blank"
          >
            <motion.div className="cat-prj rounded-xl text-[10px] flex items-center gap-2">
              <BiLogoFigma />
              <span>Check Figma Design</span>
            </motion.div>
          </Link>
        </ProjectCardMore>
      </section>
      <motion.h1
        className="mt-20 text-xl font-[400] text-center"
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={transition}
      >
        <span className="text-yellow-600">Mobile</span>
      </motion.h1>
      <section className="my-10 flex items-center justify-center gap-3 flex-wrap px-[1.5rem]">
        <ProjectCardMore
          ImageURL={UIUX_WEFIND_MOBILE_SHOWCASE.src}
          header="WeFind UIUX"
          explanation="This mobile app was designed to help people find their soulmates online get to explore more in online dating giving users flexibility to search for love online."
        >
          <Link
            href="https://www.figma.com/file/P8pCveNmcLj77juNxDbpMe/weFind-actual-design?type=design&node-id=606%3A44&mode=design&t=WeikqwKuTvrRuh1H-1"
            target="_blank"
          >
            <motion.div className="cat-prj rounded-xl text-[10px] flex items-center gap-2">
              <BiLogoFigma />
              <span>Check Figma Design</span>
            </motion.div>
          </Link>
        </ProjectCardMore>
        <ProjectCardMore
          ImageURL={UIUX_REQUEST_MOBILE_SHOWCASE.src}
          header="Request UIUX"
          explanation="This mobile app was designed to help people to request for help from people who have experties in their daily tasks and add flexibility"
        >
          <Link
            href="https://www.figma.com/file/P8pCveNmcLj77juNxDbpMe/weFind-actual-design?type=design&node-id=606%3A44&mode=design&t=WeikqwKuTvrRuh1H-1"
            target="_blank"
          >
            <motion.div className="cat-prj rounded-xl text-[10px] flex items-center gap-2">
              <BiLogoFigma />
              <span>Check Figma Design</span>
            </motion.div>
          </Link>
        
        </ProjectCardMore>
      </section>
      <motion.section className="mt-20">
        <header className="web-project-container__header">
          <h1 className="web-project-container__header-head text-center">
            My UI UX Design <span className="text-yellow-600">Journey</span>
          </h1>
        </header>
        <motion.section className="text-center mt-14 about-container px-[1.5rem] mb-[70px]">
          <motion.p
            className="p"
            initial={{ opacity: 0, y: -30, scale: 0.5 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            transition={transition}
          >
            My venture into UI UX design kicked off with a playful vibe, as a
            surge of ideas demanded expression. Yet, turning these ideas into
            reality posed a challenge due to my lack of experience in aligning
            design elements seamlessly. Spending quite some time without a clear
            design direction prompted me to dive into the world of UI UX design,
            seeking knowledge and refining skills. This journey of research and
            learning allowed me to skillfully synchronize design
            components.
          </motion.p>

          <motion.p
            className="p"
            initial={{ opacity: 0, y: -30, scale: 0.5 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            transition={transition}
          >
           Today, armed with newfound knowledge and refined techniques, my
            approach to UI UX design has undergone a remarkable transformation.
            I now approach development with increased efficiency, equipped with
            a clear structural framework and a product blueprint right from the
            get-go. This evolution, from an experimental start to a proficient
            methodology, underscores the significance of persistent learning and
            the power of turning challenges into growth opportunities.
          </motion.p>
          <motion.p
            className="p"
            initial={{ opacity: 0, y: -30, scale: 0.5 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            transition={transition}
          >
             In the realm of UI UX design, my journey spotlights the fusion of
            creativity and structured methodology. The spark of creativity that
            initially ignited my interest has been channeled through learning,
            resulting in a deep grasp of design principles. This synergy between
            innovation and technique not only hones my approach, but also
            empowers me to navigate the complexities of UI UX design with
            confidence and prowess.
          </motion.p>
        </motion.section>
      </motion.section>
    </main>
  );
};
