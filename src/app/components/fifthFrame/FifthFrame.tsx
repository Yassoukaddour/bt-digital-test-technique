import {
  Badge,
  Box,
  BoxContent,
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

function FifthFrame() {
  return (
    <Section backgroundColor="INFO_FADE">
      <Title typo={"has-text-centered"} level={3}>
        Nos forfaits, pour vous{" "}
      </Title>
      <div
        className="margin"
        style={
          {
            "--mb": "4%",
            "--ml": "22%",
            "--mr": "22%",
            "--mt": "4%",
          } as React.CSSProperties
        }
      >
        <Columns align="ALIGNED_CENTER">
          <Column size={7}>
            <Box fullheight>
              <div
                className="margin"
                style={
                  {
                    "--mb": "4%",
                    "--ml": "15%",
                    "--mr": "15%",
                  } as React.CSSProperties
                }
              >
                <BoxContent>
                  <Columns>
                    <Column>
                      <img
                        width={40}
                        style={{
                          display: "block",
                          marginRight: "0%",
                          marginLeft: "80%",
                          marginBottom: "10%",
                          filter:
                            "invert(22%) sepia(21%) saturate(1410%) hue-rotate(165deg) brightness(92%) contrast(93%)",
                        }}
                        src="/sim-card.svg"
                      />
                    </Column>
                    <Column>
                      <img
                        width={40}
                        style={{
                          display: "block",
                          marginRight: "80%",
                          marginBottom: "10%",
                          filter:
                            "invert(22%) sepia(21%) saturate(1410%) hue-rotate(165deg) brightness(92%) contrast(93%)",
                        }}
                        src="/mobile.svg"
                      />
                    </Column>
                  </Columns>
                  <Title level={5} typo={["has-text-centered"]}>
                    Découvrir nos forfaits Bouygues Telecom
                  </Title>
                  <Text
                    level={2}
                    typo={["has-text-weight-normal", "has-text-centered"]}
                  >
                    Bénéficier d'un réseau mobile de qualité, d'avantages et de
                    services exclusifs et d'un nouveau smartphone.
                  </Text>
                  <Columns align="ALIGNED_CENTER">
                    <Button variant="CONVERSION">En profiter</Button>
                  </Columns>
                </BoxContent>
              </div>
            </Box>
          </Column>
          <Column size={7}>
            <Box fullheight>
              <div
                className="margin"
                style={
                  {
                    "--mb": "4%",
                    "--ml": "15%",
                    "--mr": "15%",
                  } as React.CSSProperties
                }
              >
                <BoxContent>
                  <img
                    width={40}
                    style={{
                      display: "block",
                      marginLeft: "auto",
                      marginRight: "auto",
                      marginBottom: "10%",
                      filter:
                        "invert(22%) sepia(21%) saturate(1410%) hue-rotate(165deg) brightness(92%) contrast(93%)",
                    }}
                    src="/sim-card.svg"
                  />
                  <Title level={5} typo={["has-text-centered"]}>
                    Découvrir nos forfaits B&YOU sans engagement
                  </Title>
                  <Text
                    level={2}
                    typo={["has-text-weight-normal", "has-text-centered"]}
                  >
                    Profitez de la qualité de notre réseau avec nos forfaits
                    B&YOU sans engagement.
                  </Text>
                  <Columns align="ALIGNED_CENTER">
                    <Button variant="CONVERSION">En profiter</Button>
                  </Columns>
                </BoxContent>
              </div>
            </Box>
          </Column>
        </Columns>
      </div>
    </Section>
  );
}

export default FifthFrame;
