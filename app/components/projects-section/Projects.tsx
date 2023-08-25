import {
  React,
  motion,
  WEB_DEV_COMMUNICATEE_SHOWCASE,
  WEB_DEV_REQUEST_SHOWCASE,
  ProjectCard,
  BiRightArrowAlt,
  Link,
  useRouter,
} from "@/app/components/imports/Imports";

interface ITransition {
  ease?: string;
  type?: string;
  duration?: number;
  delay?: number;
  stiffness?: number;
}

export const Projects: React.FC = () => {
  const router = useRouter();
  const transition: ITransition = {
    ease: "backInOut",
    type: "spring",
    stiffness: 100,
    duration: 3,
    delay: 0.8,
  };
  return (
    <motion.section
      className=" about-container px-[1.5rem] mb-[70px] relative"
      id="projects"
    >
      <motion.h1
        className="text-center"
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={transition}
      >
        My Projects
      </motion.h1>

      <ProjectCard
        ImageURL={WEB_DEV_COMMUNICATEE_SHOWCASE.src}
        header="Communicatee Web App"
        explanation="This web app called communicatee was build to help people with package delivery and to help people move from their old place to the new place."
      >
        <motion.div className="cat-prj rounded-xl text-[10px]">
          HTML5
        </motion.div>
        <motion.div className="cat-prj rounded-xl text-[10px]">CSS3</motion.div>
        <motion.div className="cat-prj rounded-xl text-[10px]">SASS</motion.div>
        <motion.div className="cat-prj rounded-xl text-[10px]">
          Tailwind
        </motion.div>
        <motion.div className="cat-prj rounded-xl text-[10px]">
          ReactJS
        </motion.div>
        <motion.div className="cat-prj rounded-xl text-[10px]">
          NodeJS
        </motion.div>
        <motion.div className="cat-prj rounded-xl text-[10px]">
          ExpressJS
        </motion.div>
        <motion.div className="cat-prj rounded-xl text-[10px]">
          MongoDB
        </motion.div>
        <motion.div className="cat-prj rounded-xl text-[10px]">
          Mongoose
        </motion.div>
        <motion.div className="cat-prj rounded-xl text-[10px]">
          PassportJS
        </motion.div>
      </ProjectCard>

      <ProjectCard
        ImageURL={WEB_DEV_REQUEST_SHOWCASE.src}
        header="Network Web App"
        explanation="This website was designed to help people create network to grow their businesses and make it easy for people who want to succseed through the internet."
      >
        <motion.div className="cat-prj rounded-xl text-[10px]">
          HTML5
        </motion.div>
        <motion.div className="cat-prj rounded-xl text-[10px]">CSS3</motion.div>
        <motion.div className="cat-prj rounded-xl text-[10px]">SASS</motion.div>
        <motion.div className="cat-prj rounded-xl text-[10px]">
          Tailwind
        </motion.div>
        <motion.div className="cat-prj rounded-xl text-[10px]">
          ReactJS
        </motion.div>
      </ProjectCard>

      <motion.section className="my-10 mx-auto max-w-[11rem]">
        <motion.button
          onClick={() => router.push("/more-projects")}
          className="prj-more rounded-lg w-full flex items-center justify-between gap-4"
          initial={{ opacity: 0, y: -30, scale: 0.1 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          transition={transition}
        >
          <motion.span>More Projects</motion.span>
          <motion.span className="text-xl">
            <BiRightArrowAlt />
          </motion.span>
        </motion.button>
      </motion.section>
    </motion.section>
  );
};
