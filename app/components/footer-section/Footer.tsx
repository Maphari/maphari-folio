import { React, motion } from "../imports/Imports";
interface ITransition {
  ease?: string;
  type?: string;
  duration?: number;
  delay?: number;
  stiffness?: number;
}

export const Footer: React.FC = ({}) => {
  const transition: ITransition = {
    ease: "backInOut",
    type: "spring",
    stiffness: 100,
    duration: 3,
    delay: 1,
  }
  return (
    <motion.footer className="text-center text-white opacity-30 my-5 font-[200] text-[12px] footer px-[1.5rem]">
      <motion.p
        initial={{ opacity: 0, y: -30, scale: 0.1 }}
        whileInView={{ opacity: 1, y: 0, scale: 1 }}
        transition={transition}
      >
        &copy; 2023 Phumudzo Maphari. All rights reserved.
      </motion.p>
      <motion.p
        className="mt-2"
        initial={{ opacity: 0, y: -30, scale: 0.1 }}
        whileInView={{ opacity: 1, y: 0, scale: 1 }}
        transition={transition}
      >
        Website information: built with React & Next.js, TypeScript, Tailwind
        CSS, Framer Motion.
      </motion.p>
    </motion.footer>
  );
};
