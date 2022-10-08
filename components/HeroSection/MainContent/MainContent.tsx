import React from "react";
import { LANDING_PAGE_MESSAGE } from "./MainContent.const";
import { Container } from "./MainContent.styles";

export const MainContent = (): JSX.Element => {
  return <Container>{LANDING_PAGE_MESSAGE}</Container>;
};
