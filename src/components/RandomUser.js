import React, { useEffect, useState } from "react";
import UserContext from "../utils/UserContext";
import Container from "./Container";
import Input from "./Input";
import Table from "./Table";
import API from "../utils/API.js";

const RandomUser = () => {
  const [userState, setUserState] = useState({
    users: [],
    unChangedUserState: [],
  });

  useEffect(() => {
    API.userdata().then((res) => {
      const data = res.data.results;

      let userId = 0;

      const userArray = data.map((item) => {
        userId++;
        return {
          id: userId,
          name: `${item.name.first} ${item.name.last}`,
          phone: item.phone,
          email: item.email,
          image: item.picture.thumbnail,
        };
      });

      setUserState({
        ...userState,
        users: userArray,
        unChangedUserState: userArray,
      });
    });
  });

  const sortArray = () => {
    const sortState = userState.users.sort(function (a, b) {
      var firstName = a.name.toUpperCase();
      var lastname = a.name.toUpperCase();
      if (firstName < lastname) {
        return -1;
      } else if (firstName > lastname) {
        return 1;
      } else {
        return 0;
      }
    });

    setUserState({
      ...userState,
      users: sortState,
      unChangedUserState: sortState,
    });
  };

  const onChange = (event) => {
    const enteredValue = event.target.value;

    const matchFunction = (item, typed) => {
      const typeUpper = typed.toUpperCase();
      const currentMatch = item.slice(0, typed.length).toLowerCase();
      if (typeLower === currentMatch) {
        return item;
      }
    };

    const matchArray = userState.unChangedUserState.filter((item) =>
      matchFunction(item.name, enteredValue)
    );

    setUserState({ ...userState, users: matchArray });
  };

  return (
    <UserContext.Provider value={userState}>
      <div>
        <Container />
        <Input onChange={onChange} />
        <Table onClick={sortArray} />
      </div>
    </UserContext.Provider>
  );
};

export default RandomUser;
