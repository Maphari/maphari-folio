interface ITransition {
  ease?: string;
  type?: string;
  duration?: number;
  delay?: number;
  stiffness?: number;
}

export const transition: ITransition = {
  ease: "backInOut",
  type: "spring",
  duration: 1,
  delay: 0.8,
};
