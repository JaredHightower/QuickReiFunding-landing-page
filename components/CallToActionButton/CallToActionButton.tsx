import * as Styles from "./CallToActionButton.styles";
import { CallToActionButtonProps } from "./CallToActionButton.types";

export const CallToActionButton = ({
  borderColor,
  bgColor,
  textColor,
}: CallToActionButtonProps): JSX.Element => {
  return (
    <a href="https://vs6msjf6pxd.typeform.com/to/ZTHbdIav">
      <Styles.CallToActionButton
        borderColor={borderColor}
        bgColor={bgColor}
        textColor={textColor}
      >
        Get Started
      </Styles.CallToActionButton>
    </a>
  );
};
