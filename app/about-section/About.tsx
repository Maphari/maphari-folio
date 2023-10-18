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
        As a software engineer, I&apos;ve got a strong drive and a can-do
        attitude. I can work on my own or with just a little guidance, and I
        make sure to follow the best ways of doing things in the industry.
        I&apos;m really good at understanding programming, designing
        applications, and figuring out solutions. I&apos;m also comfortable
        using lots of different tools and coding languages. Plus, I&apos;m great
        at working with others in a team and making a meaningful contribution to
        our goals.
      </motion.p>

      <motion.p
        className="p"
        initial={{ opacity: 0, y: -30, scale: 0.5 }}
        whileInView={{ opacity: 1, y: 0, scale: 1 }}
        transition={transition}
      >
        As a programmer, I find great joy in taking on challenges directly;
        it&apos;s just a part of who I am. The coding world really gets me
        excited, and I have the know-how to come up with various solutions,
        whether it&apos;s making mobile apps or websites. I&apos;m good at
          languages like Python, C/C++ , Java, and I also
        know my way around frameworks like React Native, Next.js, and backend
        technologies like Express.js, nodejs.
      </motion.p>
      <motion.p
        className="p"
        initial={{ opacity: 0, y: -30, scale: 0.5 }}
        whileInView={{ opacity: 1, y: 0, scale: 1 }}
        transition={transition}
      >
        When I&apos;m not all caught up in programming, you&apos;ll catch me
        enjoying a bunch of other things. I really like watching cartoons,
        checking out video game playthroughs, getting lost in the beauty of
        nature, and watching interesting documentaries. Also, hanging out with
        my family is a big source of happiness for me; it&apos;s something I
        really treasure alongside my coding adventures. Plus, I&apos;m quite
        curious about movies related to programming – I find them really
        interesting and captivating.
      </motion.p>
    </motion.section>
  );
};
