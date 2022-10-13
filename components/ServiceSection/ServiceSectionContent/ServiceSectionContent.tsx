import * as Styles from "./ServiceSectionContent.styles";
import {
  SERVICE_SECTION_HEADING,
  SERVICE_SECTION_DESCRIPTION_ONE,
} from "./ServiceSectionContent.const";
import { ServiceSectionCard } from "./ServiceSectionCard/ServiceSectionCard";

export const ServiceSectionContent = () => {
  return (
    <>
      <Styles.ServiceSectionContainer>
        <Styles.ServiceSectionMessageContainer>
          <Styles.ServiceSectionHeading>
            {SERVICE_SECTION_HEADING}
          </Styles.ServiceSectionHeading>
          <Styles.ServiceSectionDescription>
            {SERVICE_SECTION_DESCRIPTION_ONE}
          </Styles.ServiceSectionDescription>
          <Styles.ServiceSectionCardContainer>
            <ServiceSectionCard />
          </Styles.ServiceSectionCardContainer>
        </Styles.ServiceSectionMessageContainer>
      </Styles.ServiceSectionContainer>
    </>
  );
};
