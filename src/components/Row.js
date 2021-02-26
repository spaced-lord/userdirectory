import React from "react";

const Row = (props) => {
  return (
    <tr>
      <td>{props.name}</td>
      <td>{props.phone}</td>
      <td>{props.email}</td>
      <td>
        <img src={props.image} alt="headshot"></img>
      </td>
    </tr>
  );
};

export default Row;
