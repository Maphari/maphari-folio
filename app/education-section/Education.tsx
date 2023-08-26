import { React, motion } from "../imports/Imports";

interface ITransition {
  ease?: string;
  type?: string;
  duration?: number;
  delay?: number;
  stiffness?: number;
}

export const Education: React.FC = () => {
  const transition: ITransition = {
    ease: "backInOut",
    type: "spring",
    stiffness: 100,
    duration: 1,
    delay: 0.8,
  };
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
        <motion.div
          className="h-auto edu-first font-[300] rounded"
          initial={{ opacity: 0, y: -30, scale: 0.1 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          transition={transition}
        >
          <motion.h2 className="mb-2 font-[600] text-[19px]">
            ALX Software Engineering Program
          </motion.h2>
          <motion.p className="font-[300] text-[13px] opacity-60">
            As I approach the end of my ALX online bootcamp, I can proudly say
            that it&apos;s been an amazing journey. In the last two months,
            I&apos;ve really dived into learning various programming languages
            and tackling project building.
          </motion.p>
        </motion.div>
        <motion.div
          className="w-2 mx-auto h-[2.5rem] edu-line"
          initial={{ opacity: 0, y: -30, scale: 0.1 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          transition={transition}
        ></motion.div>
        <motion.div
          className="h-auto flex font-[500] items-center justify-center edu-last rounded"
          initial={{ opacity: 0, y: -30, scale: 0.1 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          transition={transition}
        >
          2023 - 2024
        </motion.div>
        <motion.div
          className="w-2 mx-auto h-[2.5rem] edu-line"
          initial={{ opacity: 0, y: -30, scale: 0.1 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          transition={transition}
        ></motion.div>
        {/* ends here */}
        {/* start here */}
        <motion.div
          className="h-auto edu-first font-[300] rounded"
          initial={{ opacity: 0, y: -30, scale: 0.1 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          transition={transition}
        >
          <motion.h2 className="mb-2 font-[600] text-[19px]">
            BSc Information Technology - SE
          </motion.h2>
          <motion.p className="font-[300] text-[13px] opacity-60">
            As I wrap up my information technology degree, I look back on an
            incredible journey. Over the past three years, I&apos;ve been really
            excited about diving into learning programming languages.
          </motion.p>
        </motion.div>
        <motion.div
          className="w-2 mx-auto h-[2.5rem] edu-line"
          initial={{ opacity: 0, y: -30, scale: 0.1 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          transition={transition}
        ></motion.div>
        <motion.div
          className="h-auto flex font-[500] rounded items-center justify-center edu-last"
          initial={{ opacity: 0, y: -30, scale: 0.1 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          transition={transition}
        >
          2021 - 2023
        </motion.div>
        <motion.div
          className="w-2 mx-auto h-[2.5rem] edu-line"
          initial={{ opacity: 0, y: -30, scale: 0.1 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          transition={transition}
        ></motion.div>
        {/* ends here */}
        {/* start here */}
        <motion.div
          className="h-auto edu-first font-[300] rounded"
          initial={{ opacity: 0, y: -30, scale: 0.1 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          transition={transition}
        >
          <motion.h2 className="mb-2 font-[600] text-[19px]">
            HC Information Technology
          </motion.h2>
          <motion.p className="font-[300] text-[13px] opacity-60">
            I began by grasping the foundations of information technology, all
            in readiness for my BSc in Information Technology. I&apos;ve gained a
            good understanding of the basics, and I can surely say that the hard
            work has paid off up to this point.
          </motion.p>
        </motion.div>
        <motion.div
          className="w-2 mx-auto h-[2.5rem] edu-line"
          initial={{ opacity: 0, y: -30, scale: 0.1 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          transition={transition}
        ></motion.div>
        <motion.div
          className="h-auto flex font-[500] items-center justify-center edu-last rounded"
          initial={{ opacity: 0, y: -30, scale: 0.1 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          transition={transition}
        >
          2020 - 2021
        </motion.div>
        {/* ends here */}
      </motion.section>
    </motion.section>
  );
};
