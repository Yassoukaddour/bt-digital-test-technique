import {
  Section,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  Title,
} from "@trilogy-ds/react";
// import {Tabs} from "@bytel/trilogy-react"

function Steps() {
  return (
    <>
      <div
        className="margin"
        style={
          {
            "--mt": "0%",
            "--mb": "-5%",
            "--ml": "0%",
            "--mr": "0%",
          } as React.CSSProperties
        }
      >
        <Section backgroundColor="WHITE" inverted>
          <div
            className="margin"
            style={
              {
                "--mt": "-1%",
                "--mb": "0%",
                "--ml": "5%",
                "--mr": "12%",
              } as React.CSSProperties
            }
          >
            <Tabs inverted>
              <TabList>
                <Tab className="has-text-info" active label="WeFix" />
                <Tab label="Réparation express en boutique" />
                <Tab label="Avantages client" />
                <Tab label="Forfait" />
                <Tab label="L'assurance" />
                <Tab label="Une question ?" />
              </TabList>
            </Tabs>
          </div>
        </Section>
      </div>
    </>
  );
}

export default Steps;
