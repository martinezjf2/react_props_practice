import React from "react";
import Card from "./Card";
import contacts from "../contacts";

function App() {
  console.log(contacts);
  return (
    <div>
      <h1 className="heading">My Contacts</h1>
      <Card
        name={contacts[0].name}
        img={contacts[0].imgURL}
        phoneNumber={contacts[0].phone}
        email={contacts[0].email}
      />
    </div>
  );
}

export default App;
