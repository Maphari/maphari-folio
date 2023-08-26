import { React } from "@/app/imports/Imports";

interface IWrapper {
  children: React.ReactNode;
}

export const ContentSeparator: React.FC<IWrapper> = ({ children }) => {
  return <section className="container-wrapper">{children}</section>;
};
