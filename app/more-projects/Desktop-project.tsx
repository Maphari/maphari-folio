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
            When I started my desktop development journey, it was a while ago.
            Now, in 2023, I&apos;m still a beginner in the world of desktop
            development using C# and WPF. It all began with a strong interest
            and a lot of enthusiasm, jumping into the world of coding and
            graphical interfaces. Back then, I didn&apos;t realize that this path
            would bring me to where I am today – always learning and getting
            better at making practical and good-looking desktop applications.
          </motion.p>

          <motion.p
            className="p"
            initial={{ opacity: 0, y: -30, scale: 0.5 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            transition={transition}
          >
            When I jumped into desktop development, the desire to understand C#
            and WPF really grabbed me. Now, in 2023, I&apos;m humbly accepting
            my beginner status in this field. Starting out was like learning the
            steps of a new dance – getting the hang of the syntax, getting the
            power of XAML, and slowly gaining the courage to create visual
            interfaces. At the end of each day of coding, I remember that this
            journey is a long one, not a quick race, and every line of code
            helps me grow.
          </motion.p>
          <motion.p
            className="p"
            initial={{ opacity: 0, y: -30, scale: 0.5 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            transition={transition}
          >
            I know that I&apos;m still in the early stages of this journey.
            Navigating the world of desktop development, especially with C# and
            WPF, is both exciting and tough. My skills have grown from unsure,
            cautious keystrokes to more confident, well-informed inputs. Even
            though I&apos;m still a beginner, I feel really proud for sticking
            with this learning path. I&apos;m working hard to become skilled at
            creating smooth and advanced desktop applications.
          </motion.p>
        </motion.section>
      </motion.section>
    </main>
  );
};
