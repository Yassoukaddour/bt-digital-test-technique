import {
  Badge,
  Box,
  BoxContent,
  Button,
  Column,
  Columns,
  Hero,
  Icon,
  Link,
  Row,
  Rows,
  Section,
  Text,
  Title,
} from "@trilogy-ds/react";

function SeventhFrame() {
  return (
    <>
      <Section backgroundColor="NEUTRAL_FADE">
        <Title typo={"has-text-centered"} level={3}>
          L'assurance, la formule tout confort pour votre mobile
        </Title>
        <div
          className="margin"
          style={{ "--mb": "3%", "--mt": "3%" } as React.CSSProperties}
        >
          <Columns align="ALIGNED_CENTER">
            <Column size={7}>
              <img
                style={{
                  display: "block",
                  marginLeft: "2%",
                  marginRight: "2%",
                }}
                src="/assurance.png"
              />
            </Column>
            <Column size={4}>
              <Rows>
                <Row>
                  <Box fullheight>
                    <BoxContent>
                      <img
                        width={40}
                        style={{
                          display: "block",
                          marginBottom: "7%",
                          filter:
                            "invert(22%) sepia(21%) saturate(1410%) hue-rotate(165deg) brightness(92%) contrast(93%)",
                        }}
                        src="/sun-euro.svg"
                      />
                      <Title level={4}>Aucune dépense</Title>
                      <Text level={2} typo={["has-text-weight-normal"]}>
                        à débourser en cas d'incident
                      </Text>
                    </BoxContent>
                  </Box>
                </Row>
                <Row>
                  <Box fullheight>
                    <BoxContent>
                      <img
                        width={40}
                        style={{
                          display: "block",
                          marginBottom: "7%",
                          filter:
                            "invert(22%) sepia(21%) saturate(1410%) hue-rotate(165deg) brightness(92%) contrast(93%)",
                        }}
                        src="/hand-mobile.svg"
                      />
                      <Title level={4}>Téléphone assuré</Title>
                      <Text level={2} typo={["has-text-weight-normal"]}>
                        en cas de vol, dommages ou oxydation
                      </Text>
                    </BoxContent>
                  </Box>
                </Row>
              </Rows>
            </Column>
          </Columns>
        </div>
        <div
          className="margin"
          style={
            {
              "--mt": "0%",
              "--mb": "0%",
              "--ml": "40%",
              "--mr": "40%",
            } as React.CSSProperties
          }
        >
          <Button className="has-background-info ">
            L'assurance en détail
          </Button>
        </div>
      </Section>
    </>
  );
}

export default SeventhFrame;
