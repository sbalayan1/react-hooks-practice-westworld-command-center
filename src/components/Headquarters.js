import React, {useState, useEffect} from "react";
import { Grid, Image } from "semantic-ui-react";
import * as Images from "../services/Images";
import Details from "./Details";
import HostList from './HostList'
import HostInfo from './HostInfo'
import ColdStorage from './ColdStorage'
import LogPanel from './LogPanel'
import "../stylesheets/Headquarters.css";

function Headquarters({areas}) {
  const [hosts, setHosts] = useState([])
  const [selectedHost, setSelectedHost] = useState(null)

  const handleSelectHost = (host) => {
    setSelectedHost((selectedHost) => selectedHost && selectedHost.id === host.id ? null : host)
  }


  useEffect(() => {
    fetch('http://localhost:3000/hosts')
    .then(res => res.json())
    .then(data => setHosts([...data]))
  }, [])

  return (
    <Grid celled="internally">
      <Grid.Column width={8}>
        <ColdStorage>
          <HostList hosts={hosts} handleSelectHost={handleSelectHost}/>
        </ColdStorage>
      </Grid.Column>
      <Grid.Column width={5}>
        <Details>
          {selectedHost ? 
            <HostInfo host={selectedHost} areas={areas}/> 
          : 
            <Image size="medium" src={Images.westworldLogo} alt="westworld logo" />
          }
        </Details>
      </Grid.Column>
      <Grid.Column width={3}>
        <LogPanel />
      </Grid.Column>
    </Grid>
  );
}

export default Headquarters;
