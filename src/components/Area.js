import React from "react";
import "../stylesheets/Area.css";
import HostList from './HostList'

function Area({area, children}) {
  // const {name, limit, auth_req} = area

  return (
    <div
      className="area"
      id={area.name}
    >
      <h3 className="labels">
        {area.name.replace('_', ' ')}
      </h3>
      {children}
    </div>
  );
}

// Area.propTypes = {
//   hosts: function (props) {
//     if (limit) {
//       throw Error(
//         `HEY!! You got too many hosts in ${name}. The limit for that area is ${limit}. You gotta fix that!`
//       );
//     }
//   },
// };

export default Area;
