import { React, useRef } from "react";
import AnimatedTitle from "./AnimatedTitle";
import StoryImage from "../assets/img/entrance.webp";
import gsap from "gsap";
import RoundedCorner from "./RoundedCorner";
import Button from "./Button";

const Story = () => {
  const frameRef = useRef("null");

  const handleMouseLeave = () => {
    const element = frameRef.current;
    gsap.to(element, {
      duration: 0.3,
      rotateX: 0,
      rotateY: 0,
      transformPerspective: 500,
      ease: "power1.inOut",
    });
  };
  const handleMouseMove = (e) => {
    const { clientX, clientY } = e;
    const element = frameRef.current;

    if (!element) return;

    const rect = element.getBoundingClientRect();
    const x = clientX - rect.left;
    const y = clientY - rect.top;

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateX = ((y - centerY) / centerY) * -10;
    const rotateY = ((x - centerX) / centerX) * 10;

    gsap.to(element, {
      duration: 0.5,
      rotateX,
      rotateY,
      transformPerspective: 500,
      ease: "power1.inOut",
    });
  };
  const handleMouseEnter = () => {};
  const handleMouseUp = () => {};

  return (
    <section id="story" className="min-h-dvh w-screen bg-black text-blue-50">
      <div className="flex size-full flex-col items-center py-10 pb-24">
        <p className="font-genral text-sm uppercase md:text-[10px]">
          the multiversal ip world
        </p>
        <div className="relative size-full">
          <AnimatedTitle
            title="the st<b>o</b>ry of <br /> a hidden real<b>m</b>"
            sectonId="#story"
            containerClass="mt-5 pointer-events-none mix-blend-difference relative z-10"
          />

          <div className="story-img-container">
            <div className="story-img-mask">
              <div className="story-img-content">
                <img
                  ref={frameRef}
                  onMouseLeave={handleMouseLeave}
                  onMouseUp={handleMouseUp}
                  onMouseEnter={handleMouseEnter}
                  onMouseMove={handleMouseMove}
                  src={StoryImage}
                  alt="entrance"
                  className="object-contain"
                />
              </div>
            </div>
            <RoundedCorner />
          </div>
        </div>

        <div className="-mt-80 flex w-full justify-center md:-mt-64 md:me-44 md:justify-end">
          <div className="flex h-full w-fit flex-col items-center md:items-start">
            <p className="mt-3 max-w-sm text-center font-circular-web text-violet-50 md:text-start">
              Where realms converge, lies Zentry and the boundless pillar.
              Discover its secrets and shape your fate amidst infinite
              opportunities.
            </p>
            <Button
              id="realm-btn"
              title="discover prologue"
              containerClass="mt-5"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Story;
