import React, {useState, useEffect} from "react";
import { Segment, Image } from "semantic-ui-react";
import "../stylesheets/App.css";
import WestworldMap from './WestworldMap'
import Headquarters from './Headquarters'
import Area from './Area'
import HostList from "./HostList";
import HostInfo from './HostInfo'
import * as Images from "../services/Images";
import LogPanel from "./LogPanel";

function App() {
  const [areas, setAreas] = useState([])
  const [hosts, setHosts] = useState([])
  const [selectedHost, setSelectedHost] = useState(null)

  
  const handleSelectHost = (host) => {
    setSelectedHost((selectedHost) => selectedHost && selectedHost.id === host.id ? null : host)
  }

  const updateHosts = (res, key, host) => {
    setHosts((hosts) => {
      const copy = [...hosts]
      const tgt = copy[host.id - 1]
      tgt[key] = res[key]
      return copy
    })
  }

  async function updateDatabase(key, value, host) {
    try {
      const configObj = {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          [key]: value
        })
      }

      const promise = await fetch(`http://localhost:3000/hosts/${host.id}`, configObj)
      const response = await promise.json()
      return response

    } catch(error) {
      console.error(error)
    }
    
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
          obj["limit"] = area.limit
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
            const hostsToDisplay = []
            for (let host of hosts) {
              if (hostsToDisplay.length >= area.limit) break
              if (host.area === area.name && host.active) hostsToDisplay.push(host)
            }

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
            <HostInfo host={selectedHost} areas={areas} setSelectedHost={setSelectedHost} updateHosts={updateHosts} updateDatabase={updateDatabase}/> 
          : 
            <Image size="medium" src={Images.westworldLogo} alt="westworld logo" />
        }
        <LogPanel updateHosts={updateHosts} updateDatabase={updateDatabase}/>
      </Headquarters>
    </Segment>
  );
}

export default App;
