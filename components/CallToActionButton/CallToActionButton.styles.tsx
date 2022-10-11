import styled from "styled-components";
import { CallToActionButtonProps } from "./CallToActionButton.types";

export const CallToActionButton = styled.button<CallToActionButtonProps>`
  width: 201px;
  height: 64px;
  cursor: pointer;
  padding: 1.44rem 2.81rem;

  font-weight: 700;
  font-size: 0.875rem;
  text-transform: uppercase;
  font-family: "ITC Avant Garde Gothic W01 Bd";
  color: ${({ textColor }) => (textColor ? textColor : "#ffffff")};

  border-radius: 0px 30px;
  border: 1px solid
    ${({ borderColor }) => (borderColor ? borderColor : "#ffffff")};

  background-color: ${({ bgColor }) => (bgColor ? bgColor : "transparent")};
`;
