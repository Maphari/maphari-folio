import {
  React,
  motion,
  ProjectCardMore,
  WEB_DEV_COMMUNICATEE_SHOWCASE,
  WEB_DEV_ELITE_SHOWCASE,
  WEB_DEV_WEFIND_SHOWCASE,
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

export const WebProjects: React.FC = () => {
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
          Web Development <span className="text-yellow-600">Projects</span>
        </h1>
      </header>
      <section className="my-10 flex items-center justify-center gap-3 flex-wrap px-[1.5rem]">
        <ProjectCardMore
          ImageURL={WEB_DEV_COMMUNICATEE_SHOWCASE.src}
          header="Communicatee Web App"
          explanation="This web app called communicatee was build to help people with package delivery and to help people move from their old place to the new place."
        >
          <Link
            href="https://github.com/Maphari/communicate.com"
            target="_blank"
          >
            <motion.div className="cat-prj rounded-xl text-[10px] flex items-center gap-2">
              <BsGithub />
              <span>Check Repository</span>
            </motion.div>
          </Link>
        </ProjectCardMore>
        <ProjectCardMore
          ImageURL={WEB_DEV_ELITE_SHOWCASE.src}
          header="Elite Express Web App"
          explanation="This we app called elite express was build to help people move from their old place to the new place with just a single call giving users flexibility."
        >
          <Link href="https://github.com/Maphari/weBook.com" target="_blank">
            <motion.div className="cat-prj rounded-xl text-[10px] flex items-center gap-2">
              <BsGithub />
              <span>Check repository</span>
            </motion.div>
          </Link>
        </ProjectCardMore>
        <ProjectCardMore
          ImageURL={WEB_DEV_WEFIND_SHOWCASE.src}
          header="Wefind Web App"
          explanation="This website was designed to help people find their soulmates online get to explore more in online dating giving users flexibility to search for love online."
        >
          <Link
            href="https://github.com/Maphari/Front_end_wefind"
            target="_blank"
          >
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
            My Web Development <span className="text-yellow-600">Journey</span>
          </h1>
        </header>
        <motion.section className="text-center mt-14 about-container px-[1.5rem] mb-[70px]">
          <motion.p
            className="p"
            initial={{ opacity: 0, y: -30, scale: 0.5 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            transition={transition}
          >
            When I started my journey into web development initially, it was
            tough and I didn&apos;t understand much. As time went on, I got into
            researching front-end technologies and understanding how the web
            works and its structure. It was back in 2021 during my first year
            when I was figuring out these things. But now, looking ahead to
            today, I&apos;m really good at web development, and I&apos;m looking
            to learn more about back-end web development.
          </motion.p>

          <motion.p
            className="p"
            initial={{ opacity: 0, y: -30, scale: 0.5 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            transition={transition}
          >
            When I started my web development journey, I struggled to understand
            things at first. As time went by, I spent more and more time diving
            into front-end technologies and learning about how the web works.
            Looking back to 2021, which was my first year, I was slowly figuring
            things out. Now, my skills have grown, and I&apos;m comfortable
            working in web development. And now, I&apos;m aiming to become
            really skilled in the more complex aspects of back-end web
            development.
          </motion.p>
          <motion.p
            className="p"
            initial={{ opacity: 0, y: -30, scale: 0.5 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            transition={transition}
          >
            When I started my journey in web development, the beginning was
            really confusing and left me feeling lost. But as time went on, my
            determination to understand the complexities grew stronger. I put in
            a lot of effort to research front-end technologies and the basic
            structure that makes the web work. When I look back at the past,
            especially in 2021, which was my first year, I remember struggling
            with these new ideas. Today, I&apos;m skilled in web development, and I&apos;m
            looking ahead to learn even more by getting into the world of
            back-end web development.
          </motion.p>
        </motion.section>
      </motion.section>
    </main>
  );
};
