import { React, motion } from "@/app/imports/Imports";

interface ITransition {
  ease?: string;
  type?: string;
  duration?: number;
  delay?: number;
  stiffness?: number;
}

export const Skills: React.FC = () => {
  const transtition: ITransition = {
    ease: "backInOut",
    type: "spring",
    duration: 1,
    delay: 0.8,
  };
  return (
    <motion.section
      className=" about-container px-[1.5rem] mb-[70px]"
      id="skills"
    >
      <motion.h1
        className="text-center"
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={transtition}
      >
        My Skills
      </motion.h1>
      <motion.section className="mt-10 flex flex-wrap mx-auto items-center justify-center gap-3 max-w-[56rem]">
        <motion.div
          className="bg-[#1F2937] py-3 px-4 rounded-xl"
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={transtition}
        >
          Java
        </motion.div>
     <motion.div
        className="bg-[#1F2937] py-3 px-4 rounded-xl"
        initial={{ opacity: 0, x: -30 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={transtition}
      >
        Python
      </motion.div>    
      <motion.div
        className="bg-[#1F2937] py-3 px-4 rounded-xl"
        initial={{ opacity: 0, x: -30 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={transtition}
      >
        TypeScript
      </motion.div>
      <motion.div
        className="bg-[#1F2937] py-3 px-4 rounded-xl"
        initial={{ opacity: 0, x: -30 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={transtition}
      >
        JavaScript
      </motion.div>
          <motion.div
          className="bg-[#1F2937] py-3 px-4 rounded-xl"
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={transtition}
        >
          React Native 
        </motion.div>
        <motion.div
        className="bg-[#1F2937] py-3 px-4 rounded-xl"
        initial={{ opacity: 0, x: -30 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={transtition}
      >
        ReactJS
      </motion.div>
        <motion.div
          className="bg-[#1F2937] py-3 px-4 rounded-xl"
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={transtition}
        >
          NextJS 
        </motion.div>
      <motion.div
          className="bg-[#1F2937] py-3 px-4 rounded-xl"
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={transtition}
        >
          NodeJS
        </motion.div>
        <motion.div
          className="bg-[#1F2937] py-3 px-4 rounded-xl"
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={transtition}
        >
          ExpressJS
        </motion.div>
        <motion.div
          className="bg-[#1F2937] py-3 px-4 rounded-xl"
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={transtition}
        >
          MongoDB | Mongoose
        </motion.div>
        <motion.div
          className="bg-[#1F2937] py-3 px-4 rounded-xl"
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={transtition}
        >
          MongoDB
        </motion.div>
        <motion.div
          className="bg-[#1F2937] py-3 px-4 rounded-xl"
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={transtition}
        >
          UI UX Designer
        </motion.div>
      </motion.section>
    </motion.section>
  );
};
