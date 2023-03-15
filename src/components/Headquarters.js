import React, {useState} from "react";
import { Grid} from "semantic-ui-react";
import Details from "./Details";
import ColdStorage from './ColdStorage'
import "../stylesheets/Headquarters.css";

function Headquarters({children}) {
  return (
    <Grid celled="internally">
      <Grid.Column width={8}>
        <ColdStorage>
          {children[0]}
        </ColdStorage>
      </Grid.Column>
      <Grid.Column width={5}>
        <Details>
        {children[1]}
        </Details>
      </Grid.Column>
      <Grid.Column width={3}>
        {children[2]}
      </Grid.Column>
    </Grid>
  );
}

export default Headquarters;
