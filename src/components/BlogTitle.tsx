import * as React from "react";
import { Header, Segment, Icon } from "semantic-ui-react";

export default () => {
  return (
    <Segment vertical>
      
      <Header as="h2">
       <img src="https://image.flaticon.com/icons/png/512/2413/2413035.png"></img>
        <Header.Content>
          Evenements intégration
            <Header.Subheader>
            Rien de mieux pour souder une équipe !
            </Header.Subheader>
        </Header.Content>
      </Header>
    </Segment>
  );
};
