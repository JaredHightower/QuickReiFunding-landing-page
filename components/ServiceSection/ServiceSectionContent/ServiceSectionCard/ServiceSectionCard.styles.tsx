import styled from "styled-components";

export const ServiceSectionCard = styled.div`
  width: 23.063rem;
  height: 26.25rem;
  background: #ffffff;
  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
  border-radius: 12px;
`;

export const ServiceSectionCardTopBorder = styled.div`
  height: 5px;
  background: #3dbdc7;
`;

export const ServiceSectionCardContent = styled.div`
  width: 240px;
  height: 420px;
  margin: 20px;
  background: #ffffff;
`;

export const ServiceSectionCardCircle = styled.div`
  width: 112px;
  height: 112px;
  border-radius: 50%;
  margin-left: 20px;
  margin-top: 30px;
  border: 1px solid #3dbdc7;
`;

export const ServiceSectionCardIcon = styled.img`
  margin-top: 30px;
  object-fit: cover;
`;

export const ServiceSectionCardHeading = styled.h1`
  height: 30px;
  margin-left: 20px;

  font-family: "ITC Avant Garde Gothic Std";
  font-style: normal;
  font-weight: 700;
  font-size: 25px;
  line-height: 30px;
  /* identical to box height */

  display: flex;
  align-items: center;
  text-transform: uppercase;

  color: #043236;
`;

export const ServiceSectionCardDescription = styled.p`
  width: 200px;
  height: 78px;
  margin-left: 20px;

  font-family: "ITC Avant Garde Gothic Std";
  font-style: normal;
  font-weight: 300;
  font-size: 16px;
  line-height: 26px;
  /* or 162% */

  display: flex;
  align-items: center;

  color: #043236;
`;

export const ServiceSectionCardLearnMore = styled.a`
  width: 200px;
  height: 26px;
  margin-left: 20px;

  font-family: "ITC Avant Garde Gothic Std";
  font-style: normal;
  font-weight: 700;
  font-size: 15px;
  line-height: 26px;
  /* identical to box height, or 173% */

  display: flex;
  align-items: center;
  letter-spacing: 0.1em;
  text-transform: uppercase;

  color: #3dbdc7;
`;
