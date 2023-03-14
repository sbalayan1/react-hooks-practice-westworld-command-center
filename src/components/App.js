import React, {useState, useEffect} from "react";
import { Segment } from "semantic-ui-react";
import "../stylesheets/App.css";
import WestworldMap from './WestworldMap'
import Headquarters from './Headquarters'

function App() {
  const [areas, setAreas] = useState([])

  useEffect(() => {
    fetch('http://localhost:3000/areas')
    .then(res => res.json())
    .then(data => setAreas((areas) => {

    }))
  }, [])

  return (
    <Segment id="app">
      <WestworldMap areas={areas}/>
      <Headquarters areas={areas}/>
    </Segment>
  );
}

export default App;
