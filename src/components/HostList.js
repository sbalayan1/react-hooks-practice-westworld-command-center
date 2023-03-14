import React from "react";
import { Card } from "semantic-ui-react";
import Host from './Host'

function HostList({hosts, handleSelectHost}) {
  const hostsToDisplay = hosts.map(host => <Host key={host.id} host={host} handleSelectHost={handleSelectHost}/>)
  
  return (
    <Card.Group itemsPerRow={6}>{hostsToDisplay}</Card.Group>
  );
}

export default HostList;
