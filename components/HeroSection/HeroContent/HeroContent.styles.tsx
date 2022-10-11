import Image from "next/image";
import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
`;

export const Container = styled.div`
  display: flex;
  gap: 0.75rem;
  flex-direction: column;
`;

export const Heading = styled.h1`
  width: 49rem;
  font-weight: 700;
  line-height: 5rem;
  font-size: 4.375rem;
  padding-top: 12.188rem;
  text-transform: uppercase;
  font-family: "ITC Avant Garde Gothic W01 Bd";
`;

export const Description = styled.span`
  width: 547px;
  font-weight: 300;
  font-size: 1.563rem;
  line-height: 2.188rem;
  margin-bottom: 3.375rem;
  font-family: "ITC Avant Garde Gothic W01 Bk";
`;

export const HeroImageContainer = styled.div`
  display: flex;
  align-items: flex-end;

  right: 0;
  bottom: 0;
  position: absolute;
`;

export const HeroImage = styled(Image)`
  object-fit: cover;
`;
