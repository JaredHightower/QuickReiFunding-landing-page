import Image from "next/image";
import React from "react";
import { CallToActionButton } from "../../CallToActionButton/CallToActionButton.styles";
import {
  ABOUT_SECTION_DESCRIPTION_ONE,
  ABOUT_SECTION_DESCRIPTION_TWO,
  ABOUT_SECTION_HEADING,
  CALL_TO_ACTION_BORDER_COLOR,
  CALL_TO_ACTION_BUTTON_BG_COLOR,
  CALL_TO_ACTION_TEXT_COLOR,
} from "./AboutSectionContent.const";
import * as Styles from "./AboutSectionContent.styles";

export const AboutSectionContent = () => {
  const aboutSectionDescription = (
    <>
      {[ABOUT_SECTION_DESCRIPTION_ONE, ABOUT_SECTION_DESCRIPTION_TWO].map(
        (part, index) => (
          <Styles.AboutSectionDescription key={index}>
            {part}
          </Styles.AboutSectionDescription>
        )
      )}
    </>
  );
  return (
    <Styles.AboutSectionContainer>
      <Image
        src="/Image/AboutSectionImage.png"
        height="600"
        width="600"
        alt="about section image"
      />
      <Styles.AboutSectionMessageContainer>
        <Styles.AboutSectionHeading>
          {ABOUT_SECTION_HEADING}
        </Styles.AboutSectionHeading>
        {aboutSectionDescription}
        <Styles.AboutSectionCallToActionContainer>
          <CallToActionButton
            bgColor={CALL_TO_ACTION_BUTTON_BG_COLOR}
            textColor={CALL_TO_ACTION_TEXT_COLOR}
            borderColor={CALL_TO_ACTION_BORDER_COLOR}
          >
            Get Started
          </CallToActionButton>
        </Styles.AboutSectionCallToActionContainer>
      </Styles.AboutSectionMessageContainer>
    </Styles.AboutSectionContainer>
  );
};
