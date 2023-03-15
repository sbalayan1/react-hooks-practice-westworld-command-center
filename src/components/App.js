import React, {useState, useEffect} from "react";
import { Segment, Image } from "semantic-ui-react";
import "../stylesheets/App.css";
import WestworldMap from './WestworldMap'
import Headquarters from './Headquarters'
import Area from './Area'
import HostList from "./HostList";
import HostInfo from './HostInfo'
import * as Images from "../services/Images";

function App() {
  const [areas, setAreas] = useState([])
  const [hosts, setHosts] = useState([])
  const [selectedHost, setSelectedHost] = useState(null)

  
  const handleSelectHost = (host) => {
    setSelectedHost((selectedHost) => selectedHost && selectedHost.id === host.id ? null : host)
  }

  useEffect(() => {
    fetch('http://localhost:3000/areas')
    .then(res => res.json())
    .then(data => setAreas((areas) => {
        const arr = []
        data.forEach(area => {
          const obj = {}
          obj["id"] = area.id
          obj["key"] = area.name
          obj["text"] = area.name
          obj["value"] = area.name
          obj["name"] = area.name
          arr.push(obj)
        })

        return arr
    }))


    fetch('http://localhost:3000/hosts')
    .then(res => res.json())
    .then(data => setHosts([...data]))
  }, [])

  return (
    <Segment id="app">
      <WestworldMap>
        {
           areas.map((area) => {
            const hostsToDisplay = hosts.filter(host => host.area === area.name && host.active)
            return (
              <Area key={area.id} area={area} >
                <HostList hosts={hostsToDisplay} handleSelectHost={handleSelectHost} selectedHost={selectedHost}/>
              </Area>
            )
          })
        }
      </WestworldMap>
      <Headquarters>
        <HostList hosts={hosts} handleSelectHost={handleSelectHost} selectedHost={selectedHost}/>
        {selectedHost ? 
            <HostInfo host={selectedHost} areas={areas} setSelectedHost={setSelectedHost} setHosts={setHosts}/> 
          : 
            <Image size="medium" src={Images.westworldLogo} alt="westworld logo" />
        }
      </Headquarters>
    </Segment>
  );
}

export default App;
