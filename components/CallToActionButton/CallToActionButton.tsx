import * as Styles from "./CallToActionButton.styles";

interface CallToActionButtonProps {
  color?: string;
  height?: number;
  width?: number;
}

export const CallToActionButton = ({
  color,
  height,
  width,
}: CallToActionButtonProps): JSX.Element => {
  return (
    <Styles.CallToActionButton color={color} height={height} width={width}>
      Get Started
    </Styles.CallToActionButton>
  );
};
