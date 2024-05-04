import { React, motion, transition } from "../imports/Imports";

export const Footer: React.FC = ({}) => {
  const updateYear = function(): string | number {
    let year = new Date().getFullYear();
    
    if(year === new Date().getFullYear()) {
      return year
    } else {
      return `2023 - ${year}`
    }
  }
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
