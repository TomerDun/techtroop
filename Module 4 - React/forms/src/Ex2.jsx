import { useState } from "react";

const Ex2 = () => {
  const [name, setName] = useState("");
  const [fruit, setFruit] = useState("");

  return (
    <div>
      <input
        id="name-input"
        onChange={(e) => setName(e.target.value)}
        value={name}
      />
      <select
        id="select-input"
        onChange={(e) => setFruit(e.target.value)}
        value={fruit}
      >
        <option value="Apple">Apple</option>
        <option value="Orange">Orange</option>
        <option value="Lemon">Lemon</option>
      </select>
    </div>
  );
};
export default Ex2;
