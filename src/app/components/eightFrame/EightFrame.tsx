import {
  Badge,
  Box,
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

function EightFrame() {
  return (
    <Section backgroundColor="MAIN">
      <Rows>
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
              filter: "invert(100%)",
            }}
            src="/mobile-sync.svg"
          />
        </div>
        <Row>
          <div
            className="margin"
            style={
              {
                "--ml": "200px",
                "--mr": "200px",
                "--mb": "3%",
              } as React.CSSProperties
            }
          >
            <Title inverted typo={"has-text-centered"} level={2}>
              Réparer son téléphone, c'est aussi un geste pour l'environnement
            </Title>
            <Title
              inverted
              typo={["has-text-weight-bold", "has-text-centered"]}
              level={4}
            >
              Prolonger la durée de vie d'un an d'un téléphone permettrait de
              réduire son empreinte carbonne de 30% environ*
            </Title>
          </div>
        </Row>
        <Row>
          <Text
            inverted
            typo={["has-text-weight-bold", "has-text-centered"]}
            level={1}
          >
            Comment ?{" "}
          </Text>
        </Row>
        <Row>
          <Columns align="ALIGNED_CENTER">
            <Column size={4}>
              <Box backgroundColor="MAIN" shadowless>
                <img
                  width={35}
                  style={{
                    display: "block",
                    marginLeft: "auto",
                    marginRight: "auto",
                    marginBottom: "3%",
                    filter:
                      "invert(48%) sepia(79%) saturate(600%) hue-rotate(90deg) brightness(95%) contrast(95%)",
                  }}
                  src="/mobile-up-down.svg"
                />
                <Text
                  inverted
                  typo={["has-text-weight-bold", "has-text-centered"]}
                >
                  Environnement
                </Text>
                <Text level={3} inverted typo={"has-text-centered"}>
                  En évitant la production d'un nouveau mobile et ses
                  conséquences sur l'environnement.
                </Text>
              </Box>
            </Column>
            <Column size={4}>
              <Box backgroundColor="MAIN" shadowless>
                <img
                  width={35}
                  style={{
                    display: "block",
                    marginLeft: "auto",
                    marginRight: "auto",
                    marginBottom: "3%",
                    filter:
                      "invert(48%) sepia(79%) saturate(600%) hue-rotate(90deg) brightness(95%) contrast(95%)",
                  }}
                  src="/recycle.svg"
                />
                <Text
                  inverted
                  typo={["has-text-weight-bold", "has-text-centered"]}
                >
                  Recyclage
                </Text>
                <Text level={3} inverted typo={"has-text-centered"}>
                  En permettant le recyclage des pièces changées suite à la
                  réparation de votre téléphone.
                </Text>
              </Box>
            </Column>
          </Columns>
        </Row>
        <Text
          inverted
          level={4}
          typo={["has-text-weight-normal", "has-text-centered"]}
        >
          *Source : Green Alliance
        </Text>
      </Rows>
    </Section>
  );
}

export default EightFrame;
