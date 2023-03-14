import React, {useState, useEffect} from "react";
import { Segment } from "semantic-ui-react";
import Area from './Area'

function WestworldMap({areas}) {
  const areasToDisplay = areas.map((area) => <Area key={area.id} area={area} />)

  return (
    <Segment id="map">
      {areasToDisplay}
    </Segment>
  )
}

export default WestworldMap;
