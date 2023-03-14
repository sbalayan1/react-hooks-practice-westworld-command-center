import React from "react";
import { Segment } from "semantic-ui-react";
import "../stylesheets/App.css";
import WestworldMap from './WestworldMap'
import Headquarters from './Headquarters'

function App() {
  return (
    <Segment id="app">
      <WestworldMap />
      <Headquarters />
    </Segment>
  );
}

export default App;
