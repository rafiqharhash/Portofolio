import { GuardianMouseFollower } from "@/components/effects/guardian-mouse-follower";
import { GuardianWatermark } from "@/components/effects/guardian-watermark";
import { CursorSpotlight } from "@/components/effects/cursor-spotlight";
import { FloatingParticles } from "@/components/effects/floating-particles";
import { GridBackground } from "@/components/effects/grid-background";
import { LoadingScreen } from "@/components/effects/loading-screen";
import { ScrollProgress } from "@/components/effects/scroll-progress";
import { SectionDivider } from "@/components/layout/section-divider";
import { SiteHeader } from "@/components/layout/site-header";
import { AboutSection } from "@/components/sections/about-section";
import { ContactSection } from "@/components/sections/contact-section";
import { ExperienceSection } from "@/components/sections/experience-section";
import { FooterSection } from "@/components/sections/footer-section";
import { GithubStatsSection } from "@/components/sections/github-stats-section";
import { HeroSection } from "@/components/sections/hero-section";
import { ProjectsSection } from "@/components/sections/projects-section";
import { SkillsSection } from "@/components/sections/skills-section";

export default function Home() {
  return (
    <>
      <LoadingScreen />
      <ScrollProgress />
      <GridBackground />
      <GuardianWatermark />
      <FloatingParticles />
      <CursorSpotlight />
      <GuardianMouseFollower />
      <div className="relative z-10">
        <SiteHeader />
        <main id="main">
          <HeroSection />
          <SectionDivider />
          <AboutSection />
          <SkillsSection />
          <SectionDivider />
          <ProjectsSection />
          <GithubStatsSection />
          <SectionDivider />
          <ExperienceSection />
          <ContactSection />
        </main>
        <FooterSection />
      </div>
    </>
  );
}
