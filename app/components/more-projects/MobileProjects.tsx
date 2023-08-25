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
  const transition :ITransition = {
    ease: "backInOut",
    type: "spring",
    stiffness: 100,
    duration: 3,
    delay: 0.8
  }
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
            When I began my journey into mobile development in the beginning, it
            was tough and everything seemed a bit perplexing. I struggled to
            grasp the concepts, feeling a bit lost. However, as time rolled on,
            I delved into research about front-end technologies and grasped the
            fundamental structure of mobile development, including getting a
            handle on how React Native operates. This was back in 2022, during
            my second year of studies. Presently, I&apos;m in a much more
            confident position, proficient in mobile development. And now,
            I&apos;m extending my skills further, venturing into the realm of
            back-end mobile development.
          </motion.p>

          <motion.p
            className="p"
            initial={{ opacity: 0, y: -30, scale: 0.5 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            transition={transition}
          >
            In the early stages of my mobile development journey, I found myself
            grappling with concepts and feeling quite befuddled. The terrain was
            unfamiliar, and comprehending the nuances was a true challenge. As
            time marched on, I immersed myself in exploring front-end
            technologies, gradually unraveling the intricacies of mobile
            development and gaining a solid understanding of the inner workings
            of React Native. This was all unfolding in the backdrop of 2022,
            while I was navigating through my second year of studies. These
            days, my confidence has soared, and I&apos;ve honed my abilities in
            mobile development significantly. Presently, I&apos;m setting my
            sights on expanding my proficiency even further by delving into the
            realm of back-end mobile development.
          </motion.p>
          <motion.p
            className="p"
            initial={{ opacity: 0, y: -30, scale: 0.5 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            transition={transition}
          >
            Back when I embarked on my mobile development journey, I was met
            with a cascade of complexities and an aura of bewilderment. The
            terrain was uncharted, and the intricacies of the field eluded my
            grasp initially. However, with the passage of time, I plunged into
            diligent research on the intricacies of front-end technologies. I
            unraveled the architecture of mobile development and deciphered the
            mechanics underlying the functioning of React Native. All of this
            transpired in the year 2022, during the tenure of my second academic
            year. At this juncture, my proficiency in mobile development has
            soared to new heights, allowing me to confidently navigate its
            landscape. As I stand today, I&apos;m reaching even further by immersing
            myself in the domain of back-end mobile development.
          </motion.p>
        </motion.section>
      </motion.section>
    </main>
  );
};
