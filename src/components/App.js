import React from "react";

const App = ({ users }) => {
  const usersElement = users.map(user => {
    return <li>{user.name}</li>;
  });
  return <ul>{usersElement}</ul>;
};

export default App;
