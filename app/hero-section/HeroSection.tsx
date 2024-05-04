import {
  React,
  motion,
  PROFILE,
  Image,
  IoLogoWhatsapp,
  HiDocumentDownload,
  FaLinkedinIn,
  BsGithub,
  MdEmail,
  Link,
} from "@/app/imports/Imports";

interface ITransition {
  ease?: string;
  type?: string;
  duration?: number;
  delay?: number;
  stiffness?: number;
}

interface IButtons {
  href: string;
  icon: React.ReactNode;
}

interface IDownloadButton {
  href: IButtons["href"];
  download: string;
  name: string;
  icon: IButtons["icon"];
}

const downloadButton: IDownloadButton[] = [
  {
    href: "https://drive.google.com/file/d/1NX7bm7OR-u43f-mZORQG-NCYdDeAY_vb/view?usp=drive_link",
    download: "Phumudzo Maphari CV.pdf",
    name: "Download CV",
    icon: <HiDocumentDownload />,
  },
];

const buttons: IButtons[] = [
  {
    href: "https://www.linkedin.com/in/phumudzo-maphari-56a652214/",
    icon: <FaLinkedinIn />,
  },
  {
    href: "https://github.com/Maphari",
    icon: <BsGithub />,
  },
  {
    href: "mailto:phumudzomaphari57@gmail.com",
    icon: <MdEmail />,
  },
  {
    href: "https://api.whatsapp.com/send?phone=0797881660",
    icon: <IoLogoWhatsapp />,
  },
];

export const HeroSection: React.FC = () => {
  const transition: ITransition = {
    ease: "backInOut",
    duration: 1,
    type: "spring",
  };
  return (
    <motion.section
      className="text-center hero-section-container px-[1.5rem]"
      id="home"
    >
      <motion.section className="mx-auto mb-4">
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={transition}
          className="h-[11rem] w-[11rem] flex items-center justify-center rounded-full bg-slate-800 p-1 overflow-hidden"
        >
          <Image
            className="w-[150px] h-[150px] object-cover rounded-full"
            src={PROFILE.src}
            alt="my profile picture"
            width="300"
            height="300"
          />
        </motion.div>
      </motion.section>
      <motion.h1
        className="mx-auto h1-hero"
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={transition}
      >
        I&apos;m Maphari Phumudzo, a{" "}
        <motion.span className="font-[700] text-yellow-700">
          Software Engineer
        </motion.span>{" "}
        skilled in turning{" "}
        <motion.span className="font-[700] text-yellow-700">ideas </motion.span>
        into{" "}
        <motion.span className="font-[700] text-yellow-700">
          reality.
        </motion.span>
      </motion.h1>

      <motion.div className="btn-container mt-12 mx-auto flex items-center gap-2 flex-wrap">
        {downloadButton.length > 0 &&
          downloadButton.map((btn: IDownloadButton, index: number) => (
            <Link
              key={index}
              href={btn.href}
              target="_blank"
              download={btn.download}
              className="flex items-center gap-2 px-1"
            >
              <motion.button
                className="btn-hero bg-[#080C13] one rounded-full text-sm flex items-center gap-3"
                initial={{ opacity: 0, y: -10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={transition}
              >
                <motion.span className="text-[18px] flex items-center gap-2">
                  <span>{btn.name}</span>
                </motion.span>
                <motion.span className="text-2xl">{btn.icon}</motion.span>
              </motion.button>
            </Link>
          ))}
        {buttons.length > 0 &&
          buttons.map((btn: IButtons, index: number) => (
            <Link key={index} href={btn.href} target="_blank">
              <motion.button
                className="btn-hero-download rounded-full px-3 flex items-center gap-2"
                initial={{ opacity: 0, y: -10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={transition}
              >
                <motion.span className="text-xl">{btn.icon}</motion.span>
              </motion.button>
            </Link>
          ))}
      </motion.div>
    </motion.section>
  );
};
