import React from "react";
import { Segment } from "semantic-ui-react";
// import HostList from './HostList'

function ColdStorage({children}) {
  return (
    <Segment.Group className="HQComps">
      <Segment compact>
        <h3 className="labels">ColdStorage</h3>
      </Segment>
      <Segment compact>
        {children}
      </Segment>
    </Segment.Group>
  );
}

export default ColdStorage;
