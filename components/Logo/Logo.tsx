import Image, { StaticImageData } from "next/image";
import * as Styles from "./Logo.styles";

interface LogoProps {
  src: string | StaticImageData;
  height: number;
  width: number;
}

export const Logo = ({ src, height, width }: LogoProps): JSX.Element => {
  return (
    <Styles.logoContentContainer>
      <Image
        src={src}
        height={height}
        width={width}
        alt="Quick REI Funding Logo"
        loading="lazy"
      />
    </Styles.logoContentContainer>
  );
};
