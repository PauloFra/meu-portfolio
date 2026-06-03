"use client";
import { EmblaOptionsType } from "embla-carousel";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import Image from "next/image";

const options: EmblaOptionsType = {
  loop: true,
  align: "center",
  slidesToScroll: 1,
};

interface Skill {
  name: string;
  icon: string;
}

export default function SkillGrid({ skills }: { skills: Skill[] }) {
  const [emblaRef] = useEmblaCarousel(options, [Autoplay({ delay: 2000 })]);

  return (
    <div
      className="overflow-hidden py-2"
      ref={emblaRef}
      style={{
        maskImage:
          "linear-gradient(to right, transparent, black 8%, black 92%, transparent)",
        WebkitMaskImage:
          "linear-gradient(to right, transparent, black 8%, black 92%, transparent)",
      }}
    >
      <div className="flex">
        {skills?.map((skill, index) => (
          <div
            key={`${skill.name}-${index}`}
            className="flex-[0_0_50%] px-2 sm:flex-[0_0_33%] md:flex-[0_0_20%]"
          >
            <div className="flex h-32 flex-col items-center justify-center gap-3 rounded-2xl border border-line bg-surface transition-colors duration-300 hover:border-accent/50">
              <Image
                src={skill.icon}
                alt={skill.name}
                width={44}
                height={44}
                className="object-contain"
                loading="lazy"
              />
              <span className="font-mono text-sm text-muted">{skill.name}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
