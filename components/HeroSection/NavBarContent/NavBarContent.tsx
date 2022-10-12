import * as Styles from "./NavBarContent.styles";

import PhoneIcon from "public/Icons/PhoneIcon.png";
import { BUSINESS_PHONE_NUMBER } from "./NavBarContent.const";
import { CallToActionButton } from "../../CallToActionButton/CallToActionButton";

export const NavBarContent = (): JSX.Element => {
  return (
    <Styles.Container>
      <Styles.PhoneIcon src={PhoneIcon} />
      <Styles.BusinessPhoneNumber>
        {BUSINESS_PHONE_NUMBER}
      </Styles.BusinessPhoneNumber>
      <CallToActionButton />
    </Styles.Container>
  );
};
