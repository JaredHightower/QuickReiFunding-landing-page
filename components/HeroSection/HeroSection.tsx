import React from "react";
import * as Styles from "./HeroSection.styles";
import MainLogo from "public/MainLogo.png";
import { Logo } from "../Logo/Logo";
import { NavBarContent } from "./NavBarContent/NavBarContent";

export const HeroSection = (): JSX.Element => {
  return (
    <Styles.HeaderContainer>
      <Styles.PageHeader>
        <Logo src={MainLogo} height={68} width={300} />
        <NavBarContent />
      </Styles.PageHeader>
    </Styles.HeaderContainer>
  );
};
