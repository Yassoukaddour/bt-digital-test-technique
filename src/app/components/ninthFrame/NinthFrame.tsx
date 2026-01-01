import {
  Badge,
  Box,
  BoxContent,
  Button,
  Card,
  CardContent,
  CardImage,
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

function NinthFrame() {
  return (
    <Section backgroundColor="NEUTRAL_FADE">
      <Title typo={"has-text-centered"} level={2}>
        Ensemble, faisons durer nos smartphones plus longtemps
      </Title>
      <Columns align="ALIGNED_CENTER">
        <Column size={11}>
          <Card horizontal>
            <CardImage size={2} src="/durable.png" />
            <CardContent>
              <Title level={4}>
                Nos téléphones ont une place particulière dans notre quotidien,
                en nous accompagnant partout et tout le temps
              </Title>
              <Text level={2} typo={["has-text-weight-normal"]}>
                Alors pour s'en séparer le plus tard possible, on lance les
                Solutions Smartphone Durable:4 façons de prolonger la vie de nos
                mobiles tout en faisant un geste pour la planète.
              </Text>
              <Text level={4}>
                <Link className="has-text-info ">Découvrir nos solutions</Link>
              </Text>
            </CardContent>
          </Card>
        </Column>
      </Columns>
    </Section>
  );
}

export default NinthFrame;
