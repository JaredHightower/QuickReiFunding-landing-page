import styled from "styled-components";

interface CallToActionButtonProps {
  color?: string;
  height?: number;
  width?: number;
}

export const CallToActionButton = styled.button<CallToActionButtonProps>`
  width: 201px;
  height: 64px;
  cursor: pointer;

  font-weight: 700;
  font-size: 0.875rem;
  text-transform: uppercase;

  border-radius: 0px 30px;
  padding: 1.44rem 2.81rem;

  border: 1px solid #ffffff;
  background-color: #3bbec8;
`;
