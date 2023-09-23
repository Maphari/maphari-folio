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
<<<<<<< HEAD

 
=======
  const updateYear = function(): string | number {
    let year = new Date().getFullYear();
    
    if(year === 2023) {
      return year
    } else {
      return `2023 - ${year}`
    }
  }
>>>>>>> 437a33d6e57373e664cede568d065edcabed35bd
  return (
    <motion.footer className="text-center text-white opacity-30 my-5 font-[200] text-[12px] footer px-[1.5rem]">
      <motion.p
        initial={{ opacity: 0, y: -30, scale: 0.1 }}
        whileInView={{ opacity: 1, y: 0, scale: 1 }}
        transition={transition}
      >
        &copy; {updateYear()} Phumudzo Maphari. All rights reserved.
      </motion.p>
    </motion.footer>
  );
};
