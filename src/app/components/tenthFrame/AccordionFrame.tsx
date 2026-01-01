import {
  Accordion,
  AccordionBody,
  AccordionHeader,
  AccordionItem,
  Box,
  BoxContent,
  Column,
  Columns,
  Container,
  Link,
  Row,
  Section,
  Text,
  Title,
} from "@trilogy-ds/react";

function AccordionFrame() {
  return (
    <>
      <Accordion id="accordion-1">
        <AccordionItem id="THREE">
          <AccordionHeader>
            <Text typo={["has-text-weight-normal"]}>
              Comment faire réparer son téléphone chez Bouygues Telecom ?
            </Text>
          </AccordionHeader>
          <AccordionBody>
            <Text></Text>
          </AccordionBody>
        </AccordionItem>
        <AccordionItem>
          <AccordionHeader>
            <Text typo={["has-text-weight-normal"]}>
              Quels types de réparation propose le service?
            </Text>
          </AccordionHeader>
          <AccordionBody>
            <Text></Text>
          </AccordionBody>
        </AccordionItem>
        <AccordionItem>
          <AccordionHeader>
            <Text typo={["has-text-weight-normal"]}>
              Combien de temps prendra la réparation de mon téléphone?
            </Text>
          </AccordionHeader>
          <AccordionBody>
            <Text></Text>
          </AccordionBody>
        </AccordionItem>
        <AccordionItem>
          <AccordionHeader>
            <Text typo={["has-text-weight-normal"]}>
              La réparation est-elle garantie?
            </Text>
          </AccordionHeader>
          <AccordionBody>
            <Text></Text>
          </AccordionBody>
        </AccordionItem>
        <AccordionItem>
          <AccordionHeader>
            <Text typo={["has-text-weight-normal"]}>
              Quels sont les avantages si je fais réparer mon téléphone chez
              Bouygues Telecom?
            </Text>
          </AccordionHeader>
          <AccordionBody>
            <Text></Text>
          </AccordionBody>
        </AccordionItem>
        <AccordionItem>
          <AccordionHeader>
            <Text typo={["has-text-weight-normal"]}>
              Quelles marques de téléphone sont réparables?
            </Text>
          </AccordionHeader>
          <AccordionBody>
            <Text></Text>
          </AccordionBody>
        </AccordionItem>
        <AccordionItem>
          <AccordionHeader>
            <Text typo={["has-text-weight-normal"]}>
              Comment faire réparer mon téléphone tout en préservant la
              garantie?
            </Text>
          </AccordionHeader>
          <AccordionBody>
            <Text></Text>
          </AccordionBody>
        </AccordionItem>
      </Accordion>
    </>
  );
}

export default AccordionFrame;
