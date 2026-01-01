import {
  Badge,
  Button,
  Column,
  Columns,
  Hero,
  Icon,
  Row,
  Rows,
  Section,
  Text,
  Title,
} from "@trilogy-ds/react";

function Reparation() {
  return (
    <>
      <Section backgroundColor="MAIN">
        <div
          className="margin"
          style={{ "--ml": "18%", "--mr": "18%" } as React.CSSProperties}
        >
          <img
            width={48}
            style={{
              display: "block",
              marginLeft: "auto",
              marginRight: "auto",
              filter:
                "invert(48%) sepia(79%) saturate(600%) hue-rotate(90deg) brightness(95%) contrast(95%)",
            }}
            src="/mobile-tools.svg"
          />
          <div
            className="margin"
            style={{ "--mt": "3%", "--mb": "0%" } as React.CSSProperties}
          >
            <Title inverted typo={"has-text-centered"} level={2}>
              Bénéficier du service
            </Title>
          </div>

          <Title inverted typo={"has-text-centered"} level={2}>
            de réparation express en boutique *
          </Title>

          <div
            className="margin"
            style={
              {
                "--ml": "40%",
                "--mt": "3%",
                "--mb": "5%",
              } as React.CSSProperties
            }
          >
            {/* <div className="is-justified-center is-centered"> */}
            <Button
              className="is-justified-center is-centered has-background-info"
              variant="PRIMARY"
            >
              Trouver ma boutique
            </Button>
          </div>
        </div>
        {/* </div> */}

        {/* <Hero backgroundColor="MAIN" className="has-pattern-dark" overlap> */}
        <Title inverted typo={"has-text-centered"} level={3}>
          Avec Bouygues Telecom, la réparation c'est ...
        </Title>
        {/* </Hero> */}
        <div
          className="margin"
          style={
            {
              "--mt": "3%",
              "--mb": "3%",
              "--ml": "10%",
              "--mr": "10%",
            } as React.CSSProperties
          }
        >
          <Columns>
            <Column>
              <Rows gap={4}>
                <Row>
                  <img
                    width={48}
                    style={{
                      display: "block",
                      marginLeft: "auto",
                      marginRight: "auto",
                      filter:
                        "invert(48%) sepia(79%) saturate(600%) hue-rotate(90deg) brightness(95%) contrast(95%)",
                    }}
                    src="/users.svg"
                  />
                </Row>
                <Row>
                  <Text
                    inverted
                    typo={["has-text-weight-bold", "has-text-centered"]}
                  >
                    Ouvert à tout
                  </Text>
                </Row>
                <Row>
                  <Text inverted typo={"has-text-centered"}>
                    Que vous soyeez client Bouygues Telecom ou non !
                  </Text>
                </Row>
              </Rows>
            </Column>

            <Column>
              <Rows gap={4}>
                <Row>
                  <img
                    width={48}
                    style={{
                      display: "block",
                      marginLeft: "auto",
                      marginRight: "auto",
                      filter:
                        "invert(48%) sepia(79%) saturate(600%) hue-rotate(90deg) brightness(95%) contrast(95%)",
                    }}
                    src="/france.svg"
                  />
                </Row>
                <Row>
                  <Text
                    inverted
                    typo={["has-text-weight-bold", "has-text-centered"]}
                  >
                    Partout en France
                  </Text>
                </Row>
                <Row>
                  <Text inverted typo={"has-text-centered"}>
                    Le service est accessible dans toutes nos boutiques
                  </Text>
                </Row>
              </Rows>
            </Column>

            <Column>
              <Rows gap={4}>
                <Row>
                  <img
                    width={48}
                    style={{
                      display: "block",
                      marginLeft: "auto",
                      marginRight: "auto",
                      filter:
                        "invert(48%) sepia(79%) saturate(600%) hue-rotate(90deg) brightness(95%) contrast(95%)",
                    }}
                    src="/calendar.svg"
                  />
                </Row>
                <Row>
                  <Text
                    inverted
                    typo={["has-text-weight-bold", "has-text-centered"]}
                  >
                    Express
                  </Text>
                </Row>
                <Row>
                  <Text inverted typo={"has-text-centered"}>
                    Entre 1 et 5 jours, et pour près d'un client sur 2, la
                    réparation est réalisée en 24h !
                  </Text>
                </Row>
              </Rows>
            </Column>

            <Column>
              <Rows gap={4}>
                <Row>
                  <img
                    width={48}
                    style={{
                      display: "block",
                      marginLeft: "auto",
                      marginRight: "auto",
                      filter:
                        "invert(48%) sepia(79%) saturate(600%) hue-rotate(90deg) brightness(95%) contrast(95%)",
                    }}
                    src="/mobile-tools.svg"
                  />
                </Row>
                <Row>
                  <Text
                    inverted
                    typo={["has-text-weight-bold", "has-text-centered"]}
                  >
                    Garantie de qualité
                  </Text>
                </Row>
                <Row>
                  <Text inverted typo={"has-text-centered"}>
                    Réparation réalisée par notre partenaire WiFix et garantie 1
                    an (i)
                  </Text>
                </Row>
              </Rows>
            </Column>
          </Columns>
        </div>

        <Text
          inverted
          level={4}
          typo={["has-text-weight-normal", "has-text-centered"]}
        >
          *Retrouvez les conditions et informations détaillées du service de
          réparation dans la FAQ accessible en bas de page. Kit-mains libre
          recommendé.
        </Text>
      </Section>
    </>
  );
}

export default Reparation;
