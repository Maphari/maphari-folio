import {
  React,
  motion,
  ProjectCardMore,
  Link,
  BsGithub,
  FiMoreVertical,
  UIUX_REQUEST_MOBILE_SHOWCASE,
  UIUX_WEFIND_MOBILE_SHOWCASE,
} from "../imports/Imports";

interface ITransition {
  ease?: string;
  type?: string;
  duration?: number;
  delay?: number;
  stiffness?: number;
}

export const MobileProjects: React.FC = () => {
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
        <h1 className="web-project-container__header-head text-center">
          Mobile development <span className="text-yellow-600">Projects</span>
        </h1>
      </header>
      <section className="my-10 flex items-center justify-center gap-3 flex-wrap px-[1.5rem]">
        <ProjectCardMore
          ImageURL={UIUX_REQUEST_MOBILE_SHOWCASE.src}
          header="Request Mobile App"
          explanation="This mobile app was developed to help people to request for help from people who have experties in their daily tasks and add flexibility"
        >
          <Link href="https://github.com/Maphari/requestApp" target="_blank">
            <motion.div className="cat-prj rounded-xl text-[10px] flex items-center gap-2">
              <BsGithub />
              <span>Check Repository</span>
            </motion.div>
          </Link>
        </ProjectCardMore>
        <ProjectCardMore
          ImageURL={UIUX_WEFIND_MOBILE_SHOWCASE.src}
          header="WeFind Mobile App"
          explanation="This mobile app was developed to help people find their soulmates online get to explore more in online dating giving users flexibility to search for love online."
        >
          <Link href="https://github.com/Maphari/weFindApp" target="_blank">
            <motion.div className="cat-prj rounded-xl text-[10px] flex items-center gap-2">
              <BsGithub />
              <span>Check Repository</span>
            </motion.div>
          </Link>
        </ProjectCardMore>
      </section>
      <motion.section className="mt-20">
        <header className="web-project-container__header">
          <h1 className="web-project-container__header-head text-center">
            My Mobile Development{" "}
            <span className="text-yellow-600">Journey</span>
          </h1>
        </header>
        <motion.section className="text-center mt-14 about-container px-[1.5rem] mb-[70px]">
          <motion.p
            className="p"
            initial={{ opacity: 0, y: -30, scale: 0.5 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            transition={transition}
          >
            When I kicked off my journey into mobile development at the start,
            it was quite challenging and everything seemed a bit puzzling. I had
            a hard time getting a grip on the concepts and felt a bit unsure.
            But as time went on, I dug into researching front-end technologies
            and got the hang of the basic structure of mobile development,
            including understanding how React Native works. This was back in
            2022, during my second year of studies. Right now, I&apos;m feeling
            much more confident, and I&apos;ve become skilled in mobile
            development. And at this point, I&apos;m taking things a step
            further by exploring the world of back-end mobile development.
          </motion.p>

          <motion.p
            className="p"
            initial={{ opacity: 0, y: -30, scale: 0.5 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            transition={transition}
          >
            In the early stages of my journey in mobile development, I found
            myself struggling to grasp concepts and feeling quite confused. The
            territory was unfamiliar, and understanding the details was a real
            challenge. As time went by, I got deeply into exploring front-end
            technologies, slowly uncovering the complexities of mobile
            development and building a strong grasp of how React Native really
            works. All of this was happening in 2022, while I was making my way
            through my second year of studies. Nowadays, my confidence has shot
            up, and I&apos;ve really improved my skills in mobile development.
            Right now, I&apos;m aiming to expand my expertise even more by
            diving into the world of back-end mobile development.
          </motion.p>
          <motion.p
            className="p"
            initial={{ opacity: 0, y: -30, scale: 0.5 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            transition={transition}
          >
            When I started my journey into mobile development, I faced a bunch
            of complexities and felt pretty confused. The whole thing was new to
            me, and the details of the field were a bit hard to grasp at first.
            But as time went on, I got deep into researching front-end
            technologies. I understood the structure of mobile development and
            figured out how React Native really works. This was all happening in
            2022, during my second year of studies. Right now, I&apos;ve become
            really good at mobile development, and I&apos;m confidently
            navigating through it. As of now, I&apos;m taking it a step further
            by diving into the world of back-end mobile development.
          </motion.p>
        </motion.section>
      </motion.section>
    </main>
  );
};
