import React, { useState } from "react";

const SortableList = ({ chars }) => {
  return (
    <ul>
      {chars.map((char, index) => (
        <li key={index}>{char}</li>
      ))}
    </ul>
  );
};

const RGBComponent = () => {
const input = ["G", "R", "R", "B", "R", "G"]; // Initial input
  //const input = ["R", "B", "R", "G"];
  const [chars, setChars] = useState(input); // Initialize with input
  const [sortingEnabled, setSortingEnabled] = useState(false);

  const handleToggleSorting = () => {
    setSortingEnabled(!sortingEnabled);
    if (!sortingEnabled) {
      const order = { R: 0, G: 1, B: 2 };
      const sortedChars = input.slice().sort((a, b) => order[a] - order[b]);
      setChars(sortedChars);
    } else {
      setChars(input);
    }
  };

  return (
    <div>
      <button style={{ cursor: "pointer" }} onClick={handleToggleSorting}>
        {sortingEnabled ? "Show Array" : "Sort RGB"}
      </button>
      <SortableList chars={chars} />
    </div>
  );
};

export default RGBComponent;