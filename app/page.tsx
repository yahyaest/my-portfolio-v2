import { navItems } from "@/data";

import Hero from "@/components/Hero";
import Footer from "@/components/Footer";
import Clients from "@/components/Clients";
import Experience from "@/components/Experience";
import RecentProjects from "@/components/RecentProjects";
import { FloatingNav } from "@/components/ui/FloatingNavbar";
import Skills from "@/components/Skills";
import Contact from "@/components/Contact";
import Stats from "@/components/Stats";

const Home = () => {
  return (
    <main className="relative bg-black-100 flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5">
      <div className="max-w-7xl w-full">
        <Stats />
        <FloatingNav navItems={navItems} />
        <Hero />
        <Experience />
        <Skills />
        <RecentProjects />
        {/* <Clients /> */}
        <Contact />
        <Footer />
      </div>
    </main>
  );
};

export default Home;
