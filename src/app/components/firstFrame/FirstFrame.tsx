import {
  Box,
  BoxContent,
  Column,
  Columns,
  Rows,
  Section,
  Text,
  Title,
} from "@trilogy-ds/react";

function FirstFrame() {
  return (
    <>
      <Section backgroundColor="MAIN">
        <div
          className="margin"
          style={
            {
              "--mt": "-2%",
              "--mb": "-2%",
              "--ml": "10%",
            } as React.CSSProperties
          }
        >
          <Columns className="is-vcentered">
            <Column>
              <Title inverted typo={"TEXT_WHITE"} level={1}>
                {" "}
                Réparation de votre téléphone{" "}
              </Title>
              <Text inverted>
                {" "}
                Un smartphone cassé ou en panne, ça arrive à tout le monde.{" "}
              </Text>
              <Text inverted>
                {" "}
                Heureusement, que vous soyez sous garantie ou non,{" "}
              </Text>
              <Text inverted>
                {" "}
                on a des solutions de réparation pour vous!{" "}
              </Text>
            </Column>

            <Column className="margin">
              <Section backgroundColor="MAIN">
                <img
                  style={{
                    display: "block",
                    marginLeft: "auto",
                    marginRight: "auto",
                  }}
                  src="/casse.png"
                />
              </Section>
            </Column>
          </Columns>
        </div>
      </Section>
    </>
  );
}

export default FirstFrame;
