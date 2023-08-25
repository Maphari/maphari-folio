import {
  RootLayout,
  Navigation,
  HeroSection,
  About,
  Projects,
  Skills,
  Education,
  Contact,
  Footer,
} from "./components/imports/Imports";
import { ContentSeparator } from "@/app/components/ContentSeparator";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";

export default function Home() {
  return (
    <RootLayout>
      <Navigation />
      <ContentSeparator>
        <ToastContainer
          position="bottom-left"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="dark"
        />
        <HeroSection />
        <About />
        <Projects />
        <Skills />
        <Education />
        <Contact />
        <Footer />
      </ContentSeparator>
    </RootLayout>
  );
}
