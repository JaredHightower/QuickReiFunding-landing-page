import styled from "styled-components";

export const ServiceSectionContainer = styled.div`
  display: flex;
  gap: 10.375rem;
  flex-direction: row;
  justify-content: center;
  padding: 0 22.5rem 7.5rem;

  background: linear-gradient(
      180deg,
      #eaf8f9 50.93%,
      rgba(234, 248, 249, 0) 80.88%
    ),
    url(/Image/ServiceSectionBackground.png);
  background-size: cover;
  mix-blend-mode: fill;
`;

export const ServiceSectionMessageContainer = styled.div`
  margin-top: 7.188rem;
  text-align: center;
`;

export const ServiceSectionHeading = styled.h1`
  height: 4.375rem;
  width: 27.125rem;
  margin: auto;

  font-weight: 700;
  color: #043236;
  font-size: 3.75rem;
  line-height: 4.375rem;
  text-transform: uppercase;
  font-family: "ITC Avant Garde Gothic W01 Bd";
`;

export const ServiceSectionDescription = styled.p`
  width: 39.188rem;
  height: 3.5rem;
  margin: auto;
  margin-top: 1.875rem;
  margin-bottom: 3.125rem;

  font-family: ITC Avant Garde Gothic W01 Bk;
  font-style: normal;
  font-weight: 300;
  font-size: 18px;
  line-height: 28px;
  color: #043236;
`;

export const ServiceSectionCardContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  width: 75rem;
  flex-direction: row;
  gap: 1.438rem;
  margin-bottom: 1.438rem;
`;
export const ServiceSectionCard = styled.div`
  width: 24.063rem;
  height: 26.25rem;

  background: #ffffff;
  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
  border-radius: 0.75rem;
`;
