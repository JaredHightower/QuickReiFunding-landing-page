import Image from "next/image";
import * as Styles from "./PartnerLogos.styles";

import { PartnerLogoProps } from "../AboutSection.types";

const PARTNER_LOGOS: PartnerLogoProps[] = [
  {
    height: 96,
    width: 119,
    name: "REIClubLogo",
    src: "/Image/REIClubLogo.png",
  },
  {
    height: 74,
    width: 122,
    name: "NationalREILogo",
    src: "/Image/NationalREILogo.png",
  },
  {
    height: 74,
    width: 184,
    name: "MeetupLogo",
    src: "/Image/MeetupLogo.png",
  },
  {
    height: 60,
    width: 240,
    name: "MareiLogo",
    src: "/Image/MareiLogo.png",
  },
];

export const PartnerLogos = () => {
  return (
    <Styles.PartnerLogoContainer>
      {PARTNER_LOGOS.map((logo) => (
        <Image
          key={logo.name}
          src={logo.src}
          height={logo.height}
          width={logo.width}
          alt="PartnerLogos"
        />
      ))}
    </Styles.PartnerLogoContainer>
  );
};
