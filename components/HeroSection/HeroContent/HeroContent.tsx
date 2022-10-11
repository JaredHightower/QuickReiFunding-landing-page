import React from "react";
import { CallToActionButton } from "../../CallToActionButton/CallToActionButton";
import {
  HEADING_DESCRIPTION,
  HERO_IMAGE,
  HERO_CALL_TO_ACTION_BUTTON_BG,
  HERO_CALL_TO_ACTION_BUTTON_TEXT,
} from "./HeroContent.const";
import {
  Container,
  Description,
  Heading,
  HeroImage,
  HeroImageContainer,
  Wrapper,
} from "./HeroContent.styles";

export const HeroContent = (): JSX.Element => {
  return (
    <Wrapper>
      <Container>
        <Heading>
          {/* The Easy Way <br /> To Find And Fund Properties */}
          Get The Funds <br />
          You Need, When You Need Them
        </Heading>
        <Description>{HEADING_DESCRIPTION}</Description>
        <CallToActionButton
          bgColor={HERO_CALL_TO_ACTION_BUTTON_BG}
          textColor={HERO_CALL_TO_ACTION_BUTTON_TEXT}
        >
          Get Started
        </CallToActionButton>
      </Container>
      <HeroImageContainer>
        <HeroImage
          src={HERO_IMAGE}
          height="793"
          width="1056"
          alt="Hero image of a home"
        />
      </HeroImageContainer>
    </Wrapper>
  );
};
