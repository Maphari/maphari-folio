import {
  React,
  motion,
  ProjectCardMore,
  DKT_LOGIN_SHOWCASE,
  BsGithub,
  FiMoreVertical,
  Link,
} from "../imports/Imports";

interface ITransition {
  ease?: string;
  type?: string;
  duration?: number;
  delay?: number;
  stiffness?: number;
}

export const DesktopProjects: React.FC = () => {
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
          Desktop development <span className="text-yellow-600">Projects</span>
        </h1>
      </header>
      <section className="my-10 flex items-center justify-center gap-3 flex-wrap px-[1.5rem] w-screen h-sreen">
        <ProjectCardMore
          ImageURL={DKT_LOGIN_SHOWCASE.src}
          header="Login Form"
          explanation="This we desktop log in form wa developed for practice purposes using C# with WPF and it has security checks like email validation and password validation."
        >
          <Link href="https://github.com/Maphari/Login-form" target="_blank">
            <motion.div className="cat-prj rounded-xl text-[10px] flex items-center gap-2">
              <BsGithub />
              <span>Check repository</span>
            </motion.div>
          </Link>
        </ProjectCardMore>
      </section>
      <motion.section className="mt-20">
        <header className="web-project-container__header">
          <h1 className="web-project-container__header-head text-center">
            My Desktop Development{" "}
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
            When I embarked on my desktop development journey, it was back in
            the day. Now, in 2023, I still find myself a novice in the realm of
            desktop development using C# and WPF. The journey began with a keen
            interest and an eager heart, diving into the world of coding and
            graphical interfaces. Little did I know then that this path would
            lead me to where I stand today, continuously learning and growing in
            the art of crafting functional and visually appealing desktop
            applications.
          </motion.p>

          <motion.p
            className="p"
            initial={{ opacity: 0, y: -30, scale: 0.5 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            transition={transition}
          >
            When I first delved into desktop development, the
            yearning to comprehend the intricacies of C# and WPF gripped me.
            Fast forward to the present, 2023, and I&apos;m humbly embracing my
            status as a beginner in this domain. The initial steps were like
            learning the rhythms of a new dance – understanding the syntax,
            comprehending XAML&apos;s power, and gradually building the
            confidence to design graphical user interfaces. As the sun sets on
            each coding day, I am reminded that this journey is a marathon, not
            a sprint, and each line of code contributes to my evolution.
          </motion.p>
          <motion.p
            className="p"
            initial={{ opacity: 0, y: -30, scale: 0.5 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            transition={transition}
          >
            I recognize that I&apos;m still traversing the early phases of this
            expedition. The terrain of desktop development, particularly with C#
            and WPF, remains both exhilarating and challenging. My skills have
            evolved from tentative, hesitant keystrokes to more purposeful,
            informed inputs. Though I may still be a neophyte, I hold a profound
            sense of achievement for persisting along this educational passage,
            as I work towards mastery in constructing seamless and sophisticated
            desktop applications.
          </motion.p>
        </motion.section>
      </motion.section>
    </main>
  );
};
