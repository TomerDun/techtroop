import { useState } from "react";

const Ex1 = () => {
  const [person, setPerson] = useState({ name: "", age: "" });

  const handleChange = (event, property) => {
    setPerson({ ...person, [property]: event.target.value });
  };

  function output() {
    alert(`Come on ${person.name}, youre ${person.age}`)
  }
  return (
    <div>
      <input
        id="name-input"
        onChange={(e) => handleChange(e, "name")}
        value={person.name}
      />
      <input
        id="age-input"
        onChange={(e) => handleChange(e, "age")}
        value={person.age}
      />
      <button onClick={output}>Go to Bar</button>
    </div>
  );
};
export default Ex1;
