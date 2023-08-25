import { React } from "@/app/components/imports/Imports";

interface IWrapper {
  children: React.ReactNode;
}

export const ContentSeparator: React.FC<IWrapper> = ({ children }) => {
  return <section className="container-wrapper">{children}</section>;
};
