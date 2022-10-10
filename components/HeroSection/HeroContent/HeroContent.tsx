import React from "react";
import { HEADING_DESCRIPTION, HERO_IMAGE } from "./HeroContent.const";
import {
  Container,
  Description,
  Heading,
  HeroContentCallToActionButton,
  HeroImage,
  HeroImageContainer,
  Wrapper,
} from "./HeroContent.styles";

export const HeroContent = (): JSX.Element => {
  return (
    <Wrapper>
      <Container>
        <Heading>
          The Easy Way <br /> To Find And Fund Properties
        </Heading>
        <Description>{HEADING_DESCRIPTION}</Description>
        <HeroContentCallToActionButton>
          Get Started
        </HeroContentCallToActionButton>
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
