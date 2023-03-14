import React, {useState, useEffect} from "react";
import { Segment } from "semantic-ui-react";
import Area from './Area'

function WestworldMap() {
  const [areas, setAreas] = useState([])
  const areasToDisplay = areas.map((area) => <Area key={area.id} area={area} />)

  useEffect(() => {
    fetch('http://localhost:3000/areas')
    .then(res => res.json())
    .then(data => setAreas([...data]))
  }, [])
  return (
    <Segment id="map">
      {areasToDisplay}
    </Segment>
  )
}

export default WestworldMap;
