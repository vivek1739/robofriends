import React from "react";
import Card from "./Card";

const CardList = ({ robots }) => {
  if (false) {
    throw new Error("Nooo");
  }
  return (
    <div>
      {robots.map((user, i) => {
        return (
          <Card key={i} id={user.id} name={user.name} email={user.email} />
        );
      })}
    </div>
  );
};

export default CardList;
