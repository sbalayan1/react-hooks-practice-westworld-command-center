import React, { useState } from "react";
import {
  Radio,
  Icon,
  Card,
  Grid,
  Image,
  Dropdown,
  Divider,
} from "semantic-ui-react";
import "../stylesheets/HostInfo.css";

function HostInfo({host, areas, setSelectedHost, setHosts}) {
  const {firstName, lastName, active, imageUrl, gender, area, authorized} = host
  // This state is just to show how the dropdown component works.
  // Options have to be formatted in this way (array of objects with keys of: key, text, value)
  // Value has to match the value in the object to render the right text.

  // IMPORTANT: But whether it should be stateful or not is entirely up to you. Change this component however you like.
  const [selectedArea, setSelectedArea] = useState(area);

  function handleOptionChange(e, { value }) {
    // setSelectedArea(value)

    // the 'value' attribute is given via Semantic's Dropdown component.
    // Put a debugger or console.log in here and see what the "value" variable is when you pass in different options.
    // See the Semantic docs for more info: https://react.semantic-ui.com/modules/dropdown/#usage-controlled
  }

  async function updateStatus(host) {
    try {
      const configObj = {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          "active": !host.active
        })
      }

      const promise = await fetch(`http://localhost:3000/hosts/${host.id}`, configObj)
      const response = await promise.json()
      return response

    } catch(error) {
      console.error(error)
    }
    
  }

  function handleRadioChange() {
    //updates backend
    updateStatus(host)

    //updates state
    .then(res => {
      setSelectedHost(res)
      setHosts((hosts) => {
        const copy = [...hosts]
        const tgt = copy[host.id - 1]
        tgt["active"] = res["active"]
        return copy
      })

    })
  }

  return (
    <Grid>
      <Grid.Column width={6}>
        <Image
          src={imageUrl}
          alt="broken link"
          floated="left"
          size="small"
          className="hostImg"
        />
      </Grid.Column>
      <Grid.Column width={10}>
        <Card>
          <Card.Content>
            <Card.Header>
              {firstName} | {gender === "Male" ? <Icon name="man" /> : <Icon name="woman" />}
              {/* Think about how the above should work to conditionally render the right First Name and the right gender Icon */}
            </Card.Header>
            <Card.Meta>
              {/* Sometimes the label should take "Decommissioned". How are we going to conditionally render that? */}
              {/* Checked takes a boolean and determines what position the switch is in. Should it always be true? */}
              <Radio
                onChange={handleRadioChange}
                label={active ? "Active" : "Inactive"}
                checked={active}
                slider
              />
            </Card.Meta>
            <Divider />
            Current Area: {selectedArea}
            <Dropdown
              onChange={handleOptionChange}
              value={selectedArea}
              options={areas}
              selection
            />
          </Card.Content>
        </Card>
      </Grid.Column>
    </Grid>
  );
}

export default HostInfo;
