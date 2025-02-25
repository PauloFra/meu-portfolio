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
  const [emblaRef] = useEmblaCarousel(options, [
    Autoplay({
      delay: 2000,
    }),
  ]);

  return (
    <div className="relative ">
      <div
        className="overflow-hidden py-6"
        ref={emblaRef}
        style={{
          maskImage:
            "linear-gradient(to right, transparent, black 10%, black 90%, transparent)",
          WebkitMaskImage:
            "linear-gradient(to right, transparent, black 10%, black 90%, transparent)",
        }}
      >
        <div className="flex">
          {skills?.map((skill, index) => (
            <div
              key={`${skill.name}-${index}`}
              className="flex-[0_0_100%] sm:flex-[0_0_33%] md:flex-[0_0_20%] lg:flex-[0_0_15%] min-w-0 mx-2"
            >
              <div className="p-4 h-32 bg-gradient-to-br from-gray-800/70 to-gray-900/70 dark:from-gray-200/70 dark:to-gray-300/70 rounded-xl shadow-lg border border-gray-700 dark:border-gray-400 hover:scale-105 transition-transform duration-300 flex flex-col justify-center items-center">
                <Image
                  src={skill.icon}
                  alt={skill.name}
                  width={48}
                  height={48}
                  className="mb-2 object-contain"
                  loading="lazy"
                />
                <span className="block text-gray-300 dark:text-gray-900 text-center font-medium text-sm">
                  {skill.name}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
