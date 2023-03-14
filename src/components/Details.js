import React from "react";
import { Segment } from "semantic-ui-react";

function Details({children}) {

  // We'll render the logo if no host is selected. But if a host does get selected....
  // Watch the video to see how this works in the app.

  return (
    <Segment id="details" className="HQComps">
      {children}
    </Segment>
  );
}

export default Details;
