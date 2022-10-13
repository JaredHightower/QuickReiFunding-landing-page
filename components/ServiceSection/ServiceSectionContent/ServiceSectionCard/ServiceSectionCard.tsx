import * as Styles from "./ServiceSectionCard.styles";
import { SERVICE_SECTION_CARD_DATA } from "./ServiceSectionCard.const";

export const ServiceSectionCard = () => {
  return (
    <>
      {SERVICE_SECTION_CARD_DATA.map((card) => {
        return (
          <Styles.ServiceSectionCard key={card.id}>
            <Styles.ServiceSectionCardTopBorder />
            <Styles.ServiceSectionCardCircle>
              <Styles.ServiceSectionCardIcon src={card.image} />
            </Styles.ServiceSectionCardCircle>
            <Styles.ServiceSectionCardHeading>
              {card.header}
            </Styles.ServiceSectionCardHeading>
            <Styles.ServiceSectionCardDescription>
              {card.description}
            </Styles.ServiceSectionCardDescription>
            <Styles.ServiceSectionCardLearnMore>
              {card.learn}
            </Styles.ServiceSectionCardLearnMore>
          </Styles.ServiceSectionCard>
        );
      })}
    </>
  );
};
