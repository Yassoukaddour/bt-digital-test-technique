import {
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

function SecondFrame() {
  return (
    <>
      <Section backgroundColor="NEUTRAL_FADE">
        <Title typo={"has-text-centered"} level={2}>
          Le choix d'un partenaire expert pour votre téléphone{" "}
        </Title>
        <div
          className="margin"
          style={
            {
              "--mt": "-2%",
              "--mb": "-2%",
              "--ml": "5%",
              "--mr": "12%",
            } as React.CSSProperties
          }
        >
          <Columns className="is-vcentered">
            <Column>
              <Section>
                <img
                  style={{
                    display: "block",
                    marginLeft: "auto",
                    marginRight: "auto",
                  }}
                  src="/partenaire.png"
                />
              </Section>
            </Column>
            <Column>
              <Text typo={["has-text-weight-bold"]}>
                WeFix, filiale de Fnac Darty, est le leader français de la
                réparation de smartphones
              </Text>
              <Text>
                Quelle que soit la réparation, WeFix a la solution: écran,
                batterie, WiFi, haut-parleur, écouteurs, appareil photo,
                connecteur de charge, avec des pièces compatibles.
              </Text>
              <Row>
                <Link className="has-text-info">Visiter WeFix</Link>
              </Row>
            </Column>
          </Columns>
        </div>
      </Section>
    </>
  );
}

export default SecondFrame;
