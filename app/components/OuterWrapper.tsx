import { React } from "@/app/components/imports/Imports";

interface IWrapper {
  children: React.ReactNode;
}

export const OuterWrapper: React.FC<IWrapper> = ({ children }) => {
  return <section className="outer-wrapper">{children}</section>;
};
