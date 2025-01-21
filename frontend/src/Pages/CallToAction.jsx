import { Button } from "../components/ui/button";
import BoxReveal from "../components/ui/box-reveal";
import { InteractiveHoverButton } from '../components/ui/interactive-hover-button';
import RetroGrid from "../components/ui/retro-grid";
export default function CallToAction() {
  return (
    <div className=" relative bg-black text-white w-full h-screen flex flex-col items-center justify-start overflow-hidden p-20">
      
      <BoxReveal boxColor={"#f87171"} duration={0.5}>
        <p className="text-[9rem] font-semibold">
          Join us Now!<span className="text-[#f87171]">.</span>
        </p>
      </BoxReveal>

      <BoxReveal boxColor={"#f87171"} duration={0.5}>
        <h2 className="text-2xl font-extralight">
            Let's help you get started on your journey to success.
        </h2>
      </BoxReveal>

      <BoxReveal boxColor={"#f87171"} duration={0.5}>
        <InteractiveHoverButton className="mt-[1.6rem] z-10 text-black"></InteractiveHoverButton>
      </BoxReveal>
      <RetroGrid  className=" -z-0 overflow-clip" ></RetroGrid>
    </div>
  );
}
