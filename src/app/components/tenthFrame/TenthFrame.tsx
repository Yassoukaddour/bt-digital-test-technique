import { Column, Columns, Section, Title } from "@trilogy-ds/react";
import AccordionFrame from "./AccordionFrame";

function TenthFrame() {
  return (
    <>
      <Section backgroundColor="WHITE">
        <div
          className="margin"
          style={
            {
              "--ml": "5%",
              "--mr": "5%",
            } as React.CSSProperties
          }
        >
          <Columns>
            <Column size={6}>
              <Title level={2}>
                Toutes vos questions sur la réparation de téléphone
              </Title>
            </Column>
            <Column size={6}>
              <AccordionFrame />
            </Column>
          </Columns>
        </div>
      </Section>
    </>
  );
}

export default TenthFrame;
