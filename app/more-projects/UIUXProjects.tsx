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
  };
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
            My journey into UI UX design started off with a fun feeling, as a
            bunch of ideas wanted to come out. But, making these ideas real
            became tough because I didn&apos;t have much experience in fitting
            design pieces together smoothly. Spending a good amount of time
            without a clear design path pushed me into exploring the world of UI
            UX design, looking for knowledge and getting better at the skills.
            This journey of researching and learning helped me get really good
            at putting design parts together skillfully.
          </motion.p>

          <motion.p
            className="p"
            initial={{ opacity: 0, y: -30, scale: 0.5 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            transition={transition}
          >
            Today, with the new knowledge and improved techniques I&apos;ve
            gained, my way of doing UI UX design has changed a lot. Now, I
            handle development more effectively, having a clear plan and a
            product plan right from the beginning. This change, from starting
            out as a beginner to developing a solid approach, shows how
            important it is to keep learning and turn challenges into chances to
            grow.
          </motion.p>
          <motion.p
            className="p"
            initial={{ opacity: 0, y: -30, scale: 0.5 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            transition={transition}
          >
            In the world of UI UX design, my journey highlights the blend of
            creativity and structured ways of working. The initial burst of
            creativity that got me interested has now been channeled through
            learning, leading to a strong understanding of design rules. This
            combination of coming up with new ideas and having the right methods
            not only sharpens how I work, but also gives me the ability to
            handle the tricky parts of UI UX design with confidence and skill.
          </motion.p>
        </motion.section>
      </motion.section>
    </main>
  );
};
