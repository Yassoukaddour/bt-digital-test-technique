import {
  Accordion,
  AccordionBody,
  AccordionHeader,
  AccordionItem,
  Box,
  BoxContent,
  Breadcrumb,
  BreadcrumbItem,
  Column,
  Columns,
  Container,
  Link,
  Row,
  Section,
  Text,
  Title,
} from "@trilogy-ds/react";

function Recyclage() {
  return (
    <>
      <Section backgroundColor="WHITE">
        <Breadcrumb>
          <BreadcrumbItem> Acceuil </BreadcrumbItem>
          <BreadcrumbItem> Choisir Bouygues Telecom </BreadcrumbItem>
          <BreadcrumbItem active> Recyclage</BreadcrumbItem>
        </Breadcrumb>

        <Accordion>
          <AccordionItem disabled>
            <AccordionHeader>
              <Text typo={["has-text-weight-normal", "has-text-right"]}>
                Mentions Légales
              </Text>
            </AccordionHeader>
            <AccordionBody>
              <Text></Text>
            </AccordionBody>
          </AccordionItem>
        </Accordion>
      </Section>
    </>
  );
}

export default Recyclage;
