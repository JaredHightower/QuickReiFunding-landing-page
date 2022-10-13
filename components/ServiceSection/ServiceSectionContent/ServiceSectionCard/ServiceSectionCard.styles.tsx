import styled from "styled-components";

export const ServiceSectionCard = styled.div`
  width: 23.063rem;
  height: 26.25rem;
  background: #ffffff;
  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
  border-radius: 0.75rem;
`;

export const ServiceSectionCardTopBorder = styled.div`
  height: 0.313rem;
  background: #3dbdc7;
`;

export const ServiceSectionCardContent = styled.div`
  width: 15rem;
  height: 26.25rem;
  margin: 1.25rem;
  background: #ffffff;
`;

export const ServiceSectionCardCircle = styled.div`
  width: 7rem;
  height: 7rem;
  border-radius: 50%;
  margin-left: 1.25rem;
  margin-top: 1.875rem;
  border: 1px solid #3dbdc7;
`;

export const ServiceSectionCardIcon = styled.img`
  margin-top: 1.875rem;
  object-fit: cover;
`;

export const ServiceSectionCardHeading = styled.h1`
  height: 1.875rem;
  margin-left: 1.25rem;

  font-family: "ITC Avant Garde Gothic Std";
  font-style: normal;
  font-weight: 700;
  font-size: 25px;
  line-height: 1.875rem;

  display: flex;
  align-items: center;
  text-transform: uppercase;

  color: #043236;
`;

export const ServiceSectionCardDescription = styled.p`
  width: 15.625rem;
  height: 6.125rem;
  margin-left: 1.25rem;

  font-family: ITC Avant Garde Gothic W01 Bk;
  text-align: left;
  font-style: normal;
  font-weight: 300;
  font-size: 16px;
  line-height: 26px;

  color: #043236;
`;

export const ServiceSectionCardLearnMore = styled.a`
  width: 12.5rem;
  height: 1.625rem;
  margin-left: 1.25rem;

  font-family: "ITC Avant Garde Gothic Std";
  font-style: normal;
  font-weight: 700;
  font-size: 15px;
  line-height: 26px;

  display: flex;
  align-items: center;
  letter-spacing: 0.1em;
  text-transform: uppercase;

  color: #3dbdc7;
`;
