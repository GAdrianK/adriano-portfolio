import { SiteNavigation } from "@/components/navigation/site-navigation";
import { Hero } from "@/components/sections/hero";
import { Projects } from "@/components/sections/projects";
import { Expertise } from "@/components/sections/expertise";
import { Solutions } from "@/components/sections/solutions";
import { Journey } from "@/components/sections/journey";
import { Contact } from "@/components/sections/contact";

export default function HomePage() {
  return (
    <>
      <SiteNavigation />
      <main id="main-content" className="page-shell pb-32 lg:pb-0">
        <Hero />
        <Projects />
        <Expertise />
        <Solutions />
        <Journey />
        <Contact />
      </main>
    </>
  );
}
