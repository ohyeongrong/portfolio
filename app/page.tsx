import Hero from "@/components/home/Hero";
import About from "@/components/home/About";
import StackTool from "@/components/home/StackTool/StackTool";
import LatestProjects from "@/components/home/LatestProjects/LatestProjects";

export default function Home() {
  return (
    <>
      <Hero/>
      <About/>
      <StackTool/>
      <LatestProjects/>
    </>
  );
}
