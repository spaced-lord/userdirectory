import React from "react";
import RowSet from "../components/RowSet";

const Table = (props) => {
  return (
    <table class="table">
      <thead>
        <tr>
          <th scope="col" onClick={props.onClick}>
            Name
          </th>
          <th scope="col">Phone</th>
          <th scope="col">Email</th>
          <th scope="col">Image</th>
        </tr>
      </thead>
      <tbody>
        <RowSet />
      </tbody>
    </table>
  );
};

export default Table;
