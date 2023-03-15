import React from "react";
import { Segment } from "semantic-ui-react";

function WestworldMap({children}) {

  // const areasToDisplay = areas.map((area) => {
  //   const hostsToDisplay = hosts.filter(host => host.area === area.name && host.active)
  //   return <Area key={area.id} area={area} hosts={hostsToDisplay} handleSelectHost={handleSelectHost} selectedHost={selectedHost}/>
  // })

  return (
    <Segment id="map">
      {children}
    </Segment>
  )
}

export default WestworldMap;
