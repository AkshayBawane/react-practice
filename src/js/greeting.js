import React from "react";

function formatName(user) {
  return user.firstName + " " + user.lastName;
}

const user = {
  firstName: "Detelin",
  lastName: "Dobrinov"
};

function getGreeting(user) {
  if (user) {
    <h1>
        Hello, {formatName(user)}!
      </h1>
  }
  else {
    <h1>
        Hello, stranger}!
      </h1>
  }
}

export default class Element extends React.Component {
  render() {
    return (
      <getGreeting firstName="grrrR" lastName="gfgfgfgFg" />
    );
  }
}
