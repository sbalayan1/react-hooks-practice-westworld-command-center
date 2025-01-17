import React from "react";
import { Card } from "semantic-ui-react";
import "../stylesheets/Host.css";
// import HostInfo from "./HostInfo";

function Host({host, handleSelectHost, selectedHost}) {

  /* NOTE: The className "host selected" renders a different style than simply "host". */
  return (
    <Card
      className={selectedHost === host ? "host selected" : "host"}
      onClick={() => handleSelectHost(host)}
      image={host.imageUrl}
      raised
      link
    >
    </Card>
  );
}

export default Host;
