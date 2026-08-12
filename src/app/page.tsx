import { Hero } from "@/components/Hero";
import { Marquee } from "@/components/Marquee";
import { SelectedWork } from "@/components/SelectedWork";
import { About } from "@/components/About";
import { WritingCallout } from "@/components/WritingCallout";
import { Contact } from "@/components/Contact";

export default function Home() {
  return (
    <>
      <Hero />
      <Marquee />
      <SelectedWork />
      <About />
      <WritingCallout />
      <Contact />
    </>
  );
}
