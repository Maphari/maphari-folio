import { React, motion, transition } from "@/app/imports/Imports";

const aboutData: string[] = [
  "As a software engineer, I've got a strong drive and a can-do attitude. I like working with a team that i know i am going to bring value to and learn more from them as we grow together as a team, and I make sure to follow the best ways of doing things in the industry. I'm really good at understanding programming, designing applications, and figuring out solutions. I'm also comfortable using lots of different tools and coding languages. Plus, I&apos;m great at working with others in a team and making a meaningful contribution to our goals.",
  "As a programmer, I find great joy in taking on challenges directly. it's just a part of who I am. The coding world really gets me excited, and I have the know-how to come up with various solutions, whether it's making mobile apps or websites. I'm good at languages like C++, Python, Java, JavaScript and I also know my way around frameworks like React Native, Next.js, and backend technologies like Express.js, nodejs.",
  "When I'm not all caught up in programming, you'll catch me enjoying a bunch of other things. I really like watching cartoons, checking out video game walkthroughs, getting lost in the beauty of nature, and watching interesting documentaries. Also, hanging out with my family is a big source of happiness for me. It's something I really treasure alongside my coding adventures. Plus, I'm quite curious about movies related to programming – I find them really  interesting and captivating.",
];
export const About: () => React.JSX.Element = () => {
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

      {aboutData.map((data: string, index: number) => (
        <motion.p
          key={index}
          className="p"
          initial={{ opacity: 0, y: -30, scale: 0.5 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          transition={transition}
        >
          {data}
        </motion.p>
      ))}
    </motion.section>
  );
};
