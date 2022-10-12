import * as Styles from "./ServiceSectionCard.styles";
import { SERVICE_SECTION_CARD_DATA } from "./ServiceSectionCard.const";

export const ServiceSectionCard = () => {
  console.log(SERVICE_SECTION_CARD_DATA);
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

//   <Styles.ServiceSectionCard key={SERVICE_SECTION_CARD_DATA[0].id}>
//     <Styles.ServiceSectionCardTopBorder />
//     <Styles.ServiceSectionCardCircle>
//       <Styles.ServiceSectionCardIcon
//         src={SERVICE_SECTION_CARD_DATA[0].image}
//       />
//     </Styles.ServiceSectionCardCircle>
//     <Styles.ServiceSectionCardHeading>
//       {SERVICE_SECTION_CARD_DATA[0].header}
//     </Styles.ServiceSectionCardHeading>
//     <Styles.ServiceSectionCardDescription>
//       {SERVICE_SECTION_CARD_DATA[0].description}
//     </Styles.ServiceSectionCardDescription>
//     <Styles.ServiceSectionCardLearnMore>
//       {SERVICE_SECTION_CARD_DATA[0].learn}
//     </Styles.ServiceSectionCardLearnMore>
//   </Styles.ServiceSectionCard>;
