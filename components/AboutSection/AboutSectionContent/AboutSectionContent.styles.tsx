import styled from "styled-components";

export const AboutSectionContainer = styled.div`
  display: flex;
  gap: 10.375rem;
  flex-direction: row;
  justify-content: center;
  padding: 0 22.5rem 7.5rem;
`;

export const AboutSectionMessageContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
`;

export const AboutSectionHeading = styled.h1`
  height: 8.75rem;
  width: 27rem;

  font-weight: 700;
  color: #043236;
  font-size: 3.75rem;
  line-height: 4.375rem;
  text-transform: uppercase;
  font-family: "ITC Avant Garde Gothic W01 Bd";
`;

export const AboutSectionDescription = styled.p`
  width: 30rem;
  overflow-wrap: break-word;

  font-weight: 300;
  color: #043236;
  font-size: 1.375rem;
  line-height: 1.75rem;
  font-family: "ITC Avant Garde Gothic W01 Bk";
`;

export const AboutSectionCallToActionContainer = styled.div`
  padding: 3.75rem 0;
`;
