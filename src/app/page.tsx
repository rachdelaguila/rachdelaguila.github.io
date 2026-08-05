import { Hero } from "@/components/Hero";
import { SelectedWork } from "@/components/SelectedWork";
import { About } from "@/components/About";
import { WritingCallout } from "@/components/WritingCallout";
import { Contact } from "@/components/Contact";

export default function Home() {
  return (
    <>
      <Hero />
      <SelectedWork />
      <About />
      <WritingCallout />
      <Contact />
    </>
  );
}
