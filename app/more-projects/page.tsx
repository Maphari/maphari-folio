"use client";

import {
  BsGithub,
  Link,
  ProjectCardMore,
  React,
  WEB_DEV_COMMUNICATEE_SHOWCASE,
  WEB_DEV_REQUEST_SHOWCASE,
  WEB_DEV_ELITE_SHOWCASE,
  motion,
  Footer,
} from "../imports/Imports";

interface IProjectCardMore {
  ImageURL: string;
  header: string;
  explanation: string;
  href: string;
}

const projectData: IProjectCardMore[] = [
  {
    ImageURL: WEB_DEV_COMMUNICATEE_SHOWCASE.src,
    header: "Communicatee Web App",
    explanation:
      "This web app called communicatee was build to help people with package delivery and to help people move from their old place to the new place.",
    href: "https://github.com/Maphari/communicate.com",
  },
  {
    ImageURL: WEB_DEV_REQUEST_SHOWCASE.src,
    header: "Request Website",
    explanation:
      "This website was designed to help people create network to grow their businesses and make it easy for people who want to succeed through the internet.",
    href: "https://github.com/Maphari/request.com",
  },
  {
    ImageURL: WEB_DEV_ELITE_SHOWCASE.src,
    header: "Wefind Website",
    explanation:
      "This website was designed to help people find their desired estate online and get to explore more in online estate giving users flexibility.",
    href: "https://github.com/Maphari/weBook.com",
  },
];

const MoreProjects: React.FC = () => {
  return (
    <>
      <motion.nav>
        <motion.header className="bg-[#090c11] p-4 m-4 rounded-2xl">
          <motion.h1 className="text-lg text-white font-medium">
            More Projects
          </motion.h1>
        </motion.header>
      </motion.nav>
      <section className="py-10 mb-10 flex items-center justify-center gap-3 flex-wrap px-[1.5rem]">
        {projectData.length > 0 &&
          projectData.map((project: IProjectCardMore, index: number) => (
            <ProjectCardMore
              key={index}
              ImageURL={project.ImageURL}
              header={project.header}
              explanation={project.explanation}
            >
              <Link href={project.href} target="_blank">
                <motion.div className="cat-prj rounded-xl text-[10px] flex items-center gap-2">
                  <BsGithub />
                  <span>Check Repository</span>
                </motion.div>
              </Link>
            </ProjectCardMore>
          ))}
      </section>
      <Footer />
    </>
  );
};

export default MoreProjects;
