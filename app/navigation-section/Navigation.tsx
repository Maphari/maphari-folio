import {
  React,
  motion,
  useState,
  useEffect,
  NavLink,
} from "@/app/imports/Imports";

export const Navigation: React.FC = () => {
  const [isSectionFocus, setIsSectionFocus] = useState<string>("");

  const handleLinkClick: (sectionID: string) => void | undefined = (
    sectionID: string
  ) => {
    setIsSectionFocus(sectionID);
  };
  const handleScroll: () => void = () => {
    const sections = document.querySelectorAll("section");
    sections.forEach((section) => {
      const rect = section.getBoundingClientRect();
      if (rect.top <= 100 && rect.bottom >= 100) {
        setIsSectionFocus(section.id);
      }
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <motion.section className="nav-container" id="home">
        <motion.header className="nav-container__inner flex items-center flex-wrap px-1 py-2 text-white">
          <NavLink
            title="Home"
            state={isSectionFocus === "home"}
            href="#home"
            onClick={handleLinkClick.bind(this, "home")}
          />
          <NavLink
            title="About"
            state={isSectionFocus === "about"}
            href="#about"
            onClick={handleLinkClick.bind(this, "about")}
          />
          <NavLink
            title="Projects"
            state={isSectionFocus === "projects"}
            href="#projects"
            onClick={handleLinkClick.bind(this, "projects")}
          />
          <NavLink
            title="Skills"
            state={isSectionFocus === "skills"}
            href="#skills"
            onClick={handleLinkClick.bind(this, "skills")}
          />
          <NavLink
            title="Education"
            state={isSectionFocus === "education"}
            href="#education"
            onClick={handleLinkClick.bind(this, "education")}
          />
          <NavLink
            title="Contact"
            state={isSectionFocus === "contact"}
            href="#contact"
            onClick={handleLinkClick.bind(this, "contact")}
          />
        </motion.header>
      </motion.section>
      {/* <NavSmallScreen /> */}
    </>
  );
};
