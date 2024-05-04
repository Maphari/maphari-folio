import { React, motion, transition } from "../imports/Imports";

interface IEducationProps {
  title: string;
  description: string;
  year: string;
  isLast: boolean;
}

const educationData: IEducationProps[] = [
  {
    title: "IBM DevOps and Software Engineering Professional Certificate",
    description: `I have completed the IBM DevOps and Software Engineering Professional Certificate. I look back on an
    incredible journey.`,
    year: "FEB 2024 - JUN 2024",
    isLast: false,
  },
  {
    title: "BSc Honours in Information Technology - Data Engineering",
    description: `As I wrap up my honours degree in information technology and data engineering, I look back on an
    incredible journey. Over the past three years, I&apos;ve been really
    excited about diving into learning programming languages.`,
    year: "JAN 2024 - DEC 2024",
    isLast: false,
  },
  {
    title: " BSc Information Technology - Software Engineering",
    description: `I have finished my information technology degree, I look back on an
    incredible journey. Over the past three years, I&apos;ve been really
    excited about diving into learning programming languages.`,
    year: "JAN 2021 - DEC 2023",
    isLast: false,
  },
  {
    title: "HC Information Technology",
    description: ` I began by grasping the foundations of information technology, all
    in readiness for my BSc in Information Technology. I&apos;ve gained
    a good understanding of the basics, and I can surely say that the
    hard work has paid off up to this point.`,
    year: "JAN 2019 - DEC 2020",
    isLast: true,
  },
];

export const Education: React.FC = () => {
  return (
    <motion.section
      className="about-container px-[1.5rem] mb-[70px]"
      id="education"
    >
      <motion.h1
        className="text-center"
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={transition}
      >
        Education
      </motion.h1>
      <motion.section className="flex flex-col max-w-[30rem] py-10 mx-auto">
        {/* start here */}
        {educationData.length > 0 &&
          educationData.map((data: IEducationProps, index: number) => (
            <motion.section key={index}>
              <motion.div
                className="h-auto edu-first font-[300] rounded"
                initial={{ opacity: 0, y: -30, scale: 0.1 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                transition={transition}
              >
                <motion.h2 className="mb-2 font-[600] text-[19px]">
                  {data.title}
                </motion.h2>
                <motion.p className="font-[300] text-[13px] opacity-60">
                  {data.description}
                </motion.p>
              </motion.div>
              <motion.div
                className="w-2 mx-auto h-[2.5rem] edu-line"
                initial={{ opacity: 0, y: -30, scale: 0.1 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                transition={transition}
              ></motion.div>
              <motion.div
                className="text-sm flex items-center justify-center font-[500] edu-last rounded"
                initial={{ opacity: 0, y: -30, scale: 0.1 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                transition={transition}
              >
                <span className="w-full px-3">{data.year}</span>
              </motion.div>
              {!data.isLast && (
                <motion.div
                  className="w-2 mx-auto h-[2.5rem] edu-line"
                  initial={{ opacity: 0, y: -30, scale: 0.1 }}
                  whileInView={{ opacity: 1, y: 0, scale: 1 }}
                  transition={transition}
                ></motion.div>
              )}
            </motion.section>
          ))}
        {/* ends here */}
      </motion.section>
    </motion.section>
  );
};
