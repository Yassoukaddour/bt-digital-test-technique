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

function FourthFrame() {
  return (
    <Section backgroundColor="NEUTRAL_FADE">
      <div
        className="margin"
        style={
          { "--mb": "4%", "--ml": "15%", "--mr": "15%" } as React.CSSProperties
        }
      >
        <Title typo={"has-text-centered"} level={2}>
          Et encore plus d'avantages si vous êtes client Bouygues Telecom !{" "}
        </Title>
      </div>
      <div
        className="margin"
        style={{ "--ml": "3%", "--mr": "3%" } as React.CSSProperties}
      >
        <Columns>
          <Column size={4}>
            <Box fullheight>
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
                  src="/sun-euro.svg"
                />
                <Title level={6} typo={["has-text-centered"]}>
                  {" "}
                  -30% de remise* valables sur toutes les réparations{" "}
                </Title>
                <Text
                  level={3}
                  typo={["has-text-weight-normal", "has-text-centered"]}
                >
                  {" "}
                  et -20% de remise sur les autres réparations effectuées lors
                  de la même prise en charge
                </Text>
                <Text
                  level={4}
                  typo={["has-text-weight-normal", "has-text-centered"]}
                >
                  {" "}
                  *2 fois par an !
                </Text>
              </BoxContent>
            </Box>
          </Column>
          <Column size={4}>
            <Box fullheight>
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
                  src="/mobile.svg"
                />
                <Title level={6} typo={["has-text-centered"]}>
                  {" "}
                  On vous prête un smartphone{" "}
                </Title>
                <Text
                  level={3}
                  typo={["has-text-weight-normal", "has-text-centered"]}
                >
                  {" "}
                  le temps de la réparation (i)
                </Text>
              </BoxContent>
            </Box>
          </Column>
          <Column size={4}>
            <Box fullheight backgroundColor="INFO_FADE">
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
                  src="/users.svg"
                />
                <Title level={6} typo={["has-text-centered"]}>
                  {" "}
                  Faites profiter de la remise de 30% à un proche,{" "}
                </Title>
                <Text
                  level={3}
                  typo={["has-text-weight-normal", "has-text-centered"]}
                >
                  {" "}
                  que le téléphone ait été acheté chez Bouygues Telecom ou
                  ailleurs !
                </Text>
              </BoxContent>
            </Box>
          </Column>
        </Columns>
      </div>
    </Section>
  );
}

export default FourthFrame;
