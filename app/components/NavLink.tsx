import { React, Link } from "../imports/Imports";

interface INavLinkProps {
  title: string;
  state: boolean | string;
  href: string;
  onClick: any;
}

export const NavLink: React.FC<INavLinkProps> = ({
  title,
  href,
  state,
  onClick,
}) => {
  return (
    <Link
      onClick={onClick}
      href={href}
      scroll={true}
      passHref
      className={`p-3 text-sm rounded-full transition-all duration-700 ease-linear opacity-60 hover:opacity-100 ${
        state ? "bg-[#1F2937]" : ""
      }`}
    >
      {title}
    </Link>
  );
};
