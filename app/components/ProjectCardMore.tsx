import { React, Link, motion, Image } from "../imports/Imports";

interface INavLinkProps {
  ImageURL: string;
  header: string;
  explanation: string;
  children: React.ReactNode;
}
interface ITransition {
  ease?: string;
  type?: string;
  duration?: number;
  delay?: number;
  stiffness?: number;
}

export const ProjectCardMore: React.FC<INavLinkProps> = ({
  ImageURL,
  header,
  explanation,
  children,
}) => {
  const transition: ITransition = {
    ease: "backInOut",
    type: "spring",
    stiffness: 100,
    duration: 3,
    delay: 1,
  };
  return (
    <motion.section
      className="project-inner text-white"
      initial={{ opacity: 0, y: -30, scale: 0.1 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      transition={transition}
    >
      <motion.div className="project-inner__top rounded py-4 max-w-[360px] min-h-[300px] px-5">
        <Image
          src={ImageURL}
          alt="project image"
          priority
          width={500}
          height={500}
          style={{ width: "auto", height: "auto", objectFit: "cover" }}
        />
        <motion.div className="flex flex-col items-start justify-start">
          <motion.h2 className="font-[700] text-[1.2rem] my-3">
            {header}
          </motion.h2>
          <motion.p className="opacity-60 max-w-[30rem] text-xs font-[200] mb-3">
            {explanation}
          </motion.p>
          <motion.div className="flex flex-wrap items-center gap-1">
            {children}
          </motion.div>
        </motion.div>
      </motion.div>
    </motion.section>
  );
};
