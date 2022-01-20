import React from "react";
import Card from "./Card";
import contacts from "../contacts";

function createCard(singleobj){
  return( <div>
    <Card 
        id={singleobj.id}
        key={singleobj.id}
        name={singleobj.name}
        img={singleobj.imgURL}
        email={singleobj.email}
        tel={singleobj.phone}
      />
  </div>);
}


function App() {
  return (
    <div>
      <h1 className="heading">My Contacts</h1>
      {/* <Card
        name={contacts[0].name}
        img={contacts[0].imgURL}
        tel={contacts[0].phone}
        email={contacts[0].email}
      />
      <Card
        name={contacts[1].name}
        img={contacts[1].imgURL}
        tel={contacts[1].phone}
        email={contacts[1].email}
      />
      <Card
        name={contacts[2].name}
        img={contacts[2].imgURL}
        tel={contacts[2].phone}
        email={contacts[2].email}
      /> */}
      {contacts.map(createCard)}
      {/* since contacts is an object of array we use map function */}
      {/* and interpolate as a object */}
    </div>
  );
}

export default App;
