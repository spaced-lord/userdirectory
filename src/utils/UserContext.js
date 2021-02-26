import React from "react";

const UserContext = React.createContext({
  user: [],
  unchangedUserState: [],
});

export default UserContext;
