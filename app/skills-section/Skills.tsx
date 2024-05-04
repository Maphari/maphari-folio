import { React, motion, transition } from "@/app/imports/Imports";


const skills: string[] = [
  "Python",
  "C++",
  "Java",
  "Typescript",
  "HTML5",
  "CSS3",
  "SASS",
  "Tailwind",
  "ReactJS",
  "NextJS",
  "React Native",
  "NodeJS",
  "ExpressJS",
  "mySQL",
  "MongoDB",
];

export const Skills: React.FC = () => {
 
  return (
    <motion.section
      className=" about-container px-[1.5rem] mb-[70px]"
      id="skills"
    >
      <motion.h1
        className="text-center"
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={transition}
      >
        My Skills
      </motion.h1>
      <motion.section className="mt-10 flex flex-wrap mx-auto items-center justify-center gap-3 max-w-[56rem]">
        {skills.length > 0 &&
          skills.map((skill: string, index: number) => (
            <motion.div
              key={index}
              className="bg-[#1F2937] py-3 px-4 rounded-xl"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={transition}
            >
              {skill}
            </motion.div>
          ))}
      </motion.section>
    </motion.section>
  );
};
