import Image from "next/image";
import CocaCola from "../../public/logos/CocaCola.png";
import MaxiTea from "../../public/logos/MaxiTea.png";
import QazMunaiGaz from "../../public/logos/QazMunaiGaz.png";
import AlES from "../../public/logos/AlES.png";
import Kazakhmys from "../../public/logos/Kazakhmys.png";
import Linde from "../../public/logos/Linde.png";
import KazMinerals from "../../public/logos/KazMinerals.png";
import Altynalmas from "../../public/logos/Altynalmas.png";
import Kazatomprom from "../../public/logos/Kazatomprom.png";

interface CompaniesProps {
  dict: any;
}

export default function Companies({ dict }: CompaniesProps) {
  const logos = [
    { src: CocaCola, alt: "CocaCola" },
    { src: MaxiTea, alt: "MaxiTea" },
    { src: QazMunaiGaz, alt: "QazMunaiGaz" },
    { src: AlES, alt: "AlES" },
    { src: Kazakhmys, alt: "Kazakhmys" },
    { src: Linde, alt: "Linde" },
    { src: KazMinerals, alt: "KazMinerals" },
    { src: Altynalmas, alt: "Altynalmas" },
    { src: Kazatomprom, alt: "Kazatomprom" },
  ];

  return (
    <div className="py-20">
      <div className="px-4 md:px-8 lg:px-12 mb-16">
        <div className="lg:px-24">
          <span className="block text-sm font-condensed uppercase tracking-[0.15em] text-gray-500 mb-4">
            {dict.label}
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-[2.75rem] leading-tight font-usual max-w-5xl text-[var(--foreground)]">
            {dict.title}
          </h2>
        </div>
      </div>

      <div className="group inline-flex w-full flex-nowrap overflow-hidden [mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-128px),transparent_100%)]">
        <ul className="flex animate-infinite-scroll group-hover:[animation-play-state:paused] items-center justify-center md:justify-start [&_img]:max-w-none [&_li]:mx-12">
          {logos.map((logo, index) => (
            <li key={index}>
              <Image
                src={logo.src}
                alt={logo.alt}
                sizes="(max-width: 768px) 160px, 192px"
                quality={68}
                className="h-48 w-auto object-contain opacity-50 grayscale hover:opacity-100 hover:grayscale-0 transition-all duration-500 cursor-pointer"
              />
            </li>
          ))}
        </ul>
        <ul
          className="flex animate-infinite-scroll group-hover:[animation-play-state:paused] items-center justify-center md:justify-start [&_img]:max-w-none [&_li]:mx-12"
          aria-hidden="true"
        >
          {logos.map((logo, index) => (
            <li key={index}>
              <Image
                src={logo.src}
                alt={logo.alt}
                sizes="(max-width: 768px) 160px, 192px"
                quality={68}
                className="h-48 w-auto object-contain opacity-50 grayscale hover:opacity-100 hover:grayscale-0 transition-all duration-500 cursor-pointer"
              />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
