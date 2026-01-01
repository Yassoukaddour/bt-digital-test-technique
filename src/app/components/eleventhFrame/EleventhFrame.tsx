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

function EleventhFrame() {
  return (
    <Section backgroundColor="NEUTRAL_FADE">
      <Title typo={"has-text-centered"} level={2}>
        Nos astuces pour prendre soin de votre mobile
      </Title>
      <div
        className="margin"
        style={{ "--ml": "7%", "--mr": "7%" } as React.CSSProperties}
      >
        <Columns>
          <Column size={4}>
            <Card fullheight>
              <CardImage src="/prolonger.png" />
              <CardContent>
                <Title level={6}>
                  Comment prolonger la vie de son smartphone?
                </Title>
                <Link className="has-text-info ">Visiter WeFix</Link>
              </CardContent>
            </Card>
          </Column>
          <Column size={4}>
            <Card fullheight>
              <CardImage src="oxydation.png" />
              <CardContent>
                <Title level={6}>
                  Comment protéger son smartphone de l'oxydation?
                </Title>
                <Link className="has-text-info ">Visiter WeFix</Link>
              </CardContent>
            </Card>
          </Column>
          <Column size={4}>
            <Card>
              <CardImage src="conseil.png" />
              <CardContent>
                <Title level={6}>
                  Les conseils à suivre avant d'envoyer votre téléphone en
                  réparation
                </Title>
                <Link className="has-text-info ">Visiter WeFix</Link>
              </CardContent>
            </Card>
          </Column>
        </Columns>
      </div>
    </Section>
  );
}

export default EleventhFrame;
