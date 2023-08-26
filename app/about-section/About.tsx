import { React, motion } from "@/app/imports/Imports";

interface ITransition {
  ease?: string;
  type?: string;
  duration?: number;
  delay?: number;
}

export const About: () => React.JSX.Element = () => {
  const transition: ITransition = {
    ease: "backInOut",
    type: "spring",
    duration: 1,
    delay: 0.8,
  };
  return (
    <motion.section
      className="text-center mt-14 about-container px-[1.5rem] mb-[70px]"
      id="about"
    >
      <motion.h1
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ ...transition }}
      >
        About Me
      </motion.h1>

      <motion.p
        className="p"
        initial={{ opacity: 0, y: -30, scale: 0.5 }}
        whileInView={{ opacity: 1, y: 0, scale: 1 }}
        transition={transition}
      >
        As a proactive software engineer, I possess a robust motivation and
        self-starting attitude. I am capable of operating autonomously or with
        minimal direction, all while adhering to industry best practices. My
        foundation in programming analysis, application design, and analysis is
        strong, complemented by my adeptness with a variety of development tools
        and languages. Furthermore, I excel in collaborative environments,
        effectively contributing to team achievements.
      </motion.p>

      <motion.p
        className="p"
        initial={{ opacity: 0, y: -30, scale: 0.5 }}
        whileInView={{ opacity: 1, y: 0, scale: 1 }}
        transition={transition}
      >
        As a programmer, I derive immense satisfaction from tackling challenges
        head-on; it&apos;s an integral part of who I am. The world of coding
        excites me profoundly, and I possess the skillset to create diverse
        solutions, whether they involve crafting mobile apps, websites. My
        proficiency spans languages like Java, C++, Python TypeScript,
        JavaScript, and frameworks like React Native, Next.js, Express.js and
        Javascript run time like Node.js.
      </motion.p>
      <motion.p
        className="p"
        initial={{ opacity: 0, y: -30, scale: 0.5 }}
        whileInView={{ opacity: 1, y: 0, scale: 1 }}
        transition={transition}
      >
        When I&apos;m not engrossed in programming, you&apos;ll find me
        relishing a variety of other interests. I take delight in watching
        cartoons, observing video game playthroughs, immersing myself in
        nature&apos;s beauty, and indulging in enlightening documentaries.
        Furthermore, spending quality time with my family brings me immense
        happiness; it&apos;s a treasured source of joy outside of my coding
        pursuits. Additionally, I&apos;m intrigued by programming-related
        movies, finding them captivating and engaging.
      </motion.p>
    </motion.section>
  );
};
