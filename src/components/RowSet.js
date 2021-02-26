import React, { useContext } from "react";
import UserContext from "../utils/UserContext";
import Row from "./Row";

const RowSet = () => {
  const { users } = useContext(UserContext);

  return users.map((item) => (
    <Row
      key={item.id}
      name={item.name}
      phone={item.phone}
      email={item.email}
      image={item.image}
    />
  ));
};

export default RowSet;
