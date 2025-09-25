import { TopBar } from "@/components/site/top-bar";
import { MainNav } from "@/components/site/main-nav";
import { Hero } from "@/components/site/hero";
import { Mission } from "@/components/site/mission";
import { About } from "@/components/site/about";
import { Values } from "@/components/site/values";
import { Initiatives } from "@/components/site/initiatives";
import { VideoShowcase } from "@/components/site/video-showcase";
import { Gallery } from "@/components/site/gallery";
import { Join } from "@/components/site/join";
import { Team } from "@/components/site/team";
import { Testimonials } from "@/components/site/testimonials";
import { Newsletter } from "@/components/site/newsletter";
import { SiteFooter } from "@/components/site/footer";
import { ResizeableNavbar } from "@/components/site/resizeable-appbar";

export default function Page() {
  return (
    <main>
      <TopBar />
      <ResizeableNavbar />
      <Hero />
      <Mission />
      <div className="bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <About />
        <Values />
      </div>
      <Initiatives />
      <VideoShowcase />
      <Gallery />
      <Join />
      <Team />
      {/* <Testimonials /> */}
      <Newsletter />
      <SiteFooter />
    </main>
  );
}
