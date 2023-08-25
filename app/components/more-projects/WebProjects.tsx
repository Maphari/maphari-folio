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
  }
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
            When I began my journey into web development in the beginning, it
            was tough, and I didn&apos;t grasp much. As time rolled on, I delved into
            researching front end technologies and comprehending the
            architecture of the web and its functioning. It was back in 2021
            during my first year that I grappled with these concepts. However,
            fast forward to today, I am proficient in web development, and my
            focus is expanding towards the realm of back end web development.
          </motion.p>

          <motion.p
            className="p"
            initial={{ opacity: 0, y: -30, scale: 0.5 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            transition={transition}
          >
            In the initial stages of my web development journey, I found myself
            faced with difficulty and a lack of understanding. As the days
            turned into weeks and the weeks into months, I immersed myself in
            the exploration of front end technologies and gained a deeper
            understanding of the intricate structure and operations of the web.
            Cast back to the year 2021, my introductory year, and there I was,
            slowly piecing together the puzzle. Presently, my skills have grown,
            allowing me to navigate the world of web development with
            confidence, and my aspirations now extend to mastering the
            intricacies of back end web development.
          </motion.p>
          <motion.p
            className="p"
            initial={{ opacity: 0, y: -30, scale: 0.5 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            transition={transition}
          >
            Embarking on my venture into web development, the outset proved to
            be a perplexing ordeal, leaving me bewildered. As time marched
            forward, so did my determination to decipher the intricacies.
            Through diligent research into the nuances of front end technologies
            and the fundamental architecture governing the web&apos;s
            functionality, I made significant strides. Reflecting upon the past,
            specifically 2021, my inaugural year, I vividly recall grappling
            with these nascent concepts. Today, I stand adept in web
            development, and my horizons broaden as I set my sights on delving
            into the domain of back end web development.
          </motion.p>
        </motion.section>
      </motion.section>
    </main>
  );
};
