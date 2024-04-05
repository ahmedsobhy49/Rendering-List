import React from "react";
import Person from "./Person";

const List = ({ data }) => {
  return (
    <>
      {data.map((person) => {
        const { id } = person;
        return <Person person={person} key={id} />;
      })}
    </>
  );
};

export default List;
