import { createContext } from "react";

const UserContext = createContext({
  loggedInUser: "John Doe"
});

export default UserContext;