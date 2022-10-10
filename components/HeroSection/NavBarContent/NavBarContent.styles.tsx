import Image from "next/image";
import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 1.875rem;
`;

export const PhoneIcon = styled(Image)``;

export const BusinessPhoneNumber = styled.h2`
  font-family: "ITC Avant Garde Gothic W01 Bk";
  font-weight: 300;
  font-size: 1.5rem;
  line-height: 2.188rem;
`;
