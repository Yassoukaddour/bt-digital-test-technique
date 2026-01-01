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

function SixthFrame() {
  return (
    <Section className="has-background-info ">
      <div
        className="margin"
        style={
          { "--mb": "3%", "--ml": "15%", "--mr": "15%" } as React.CSSProperties
        }
      >
        <Title inverted typo={"has-text-centered"} level={3}>
          Quel que soit le problème, nous avons la solution
        </Title>
      </div>
      <Columns align="ALIGNED_CENTER">
        <Column size={4}>
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
                src="/mobile-broken.svg"
              />
              <Title level={6}>Mon téléphone n'est plus sous garantie</Title>
              <Text level={3} typo={["has-text-weight-normal"]}>
                Si le téléphone que nous vous avons vendu n'est plus garanti et
                n'est pas assuré ou si vous n'avez pas acheté votre téléphone
                chez nous, vous pouvez bénéficier d'une réparation en boutique,
                et à prix réduit si vous détenez un forfait Bouygues Telecom.
              </Text>
              <Text level={4}>
                <Link className="has-text-info ">Trouver ma boutique</Link>
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
                  marginBottom: "7%",
                  filter:
                    "invert(22%) sepia(21%) saturate(1410%) hue-rotate(165deg) brightness(92%) contrast(93%)",
                }}
                src="/hand-mobile.svg"
              />
              <Title level={6}>Mon téléphone est sous garantie</Title>
              <Text level={3} typo={["has-text-weight-normal"]}>
                Tous nos téléphones sont garantis 2 ans. Si vos téléphones tombe
                en panne pendant ce délais et qu'il s'agit d'un défaut couvert
                par les garanties légales (par exemple, un défaut de
                fabrication), sa réparation est prise en charge gratuitement par
                Bouygues Telecom.{" "}
              </Text>
            </BoxContent>
          </Box>
        </Column>
      </Columns>
    </Section>
  );
}

export default SixthFrame;
