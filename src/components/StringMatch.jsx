import React, { useState } from "react";

const ContainsAllCharacters = () => {
  const [s1, setS1] = useState("");
  const [s2, setS2] = useState("");
  const [result, setResult] = useState(null);

  const containsAllCharacters = (s1, s2) => {
    // Convert strings to lowercase
    const s1Lower = s1.toLowerCase();
    const s2Lower = s2.toLowerCase();

    // Convert strings to arrays
    const s1Arr = s1Lower.split("");
    const s2Arr = s2Lower.split("");

    // Check if every character in s2 is present in s1
    return s2Arr.every((char) => s1Arr.includes(char));
  };

  const handleCheckContainsAllCharacters = () => {
    const result = containsAllCharacters(s1, s2);
    setResult(result);
  };

  return (
    <div>
      <div>
        <label>
          s1:
          <input
            type="text"
            value={s1}
            onChange={(e) => setS1(e.target.value)}
          />
        </label>
      </div>
      <div style={{ marginTop: "10px" }}>
        <label>
          s2:
          <input
            type="text"
            value={s2}
            onChange={(e) => setS2(e.target.value)}
          />
        </label>
      </div>
      <button
        style={{ marginTop: "10px" }}
        onClick={handleCheckContainsAllCharacters}
      >
        Check
      </button>
      {result !== null && <div>{result ? "true" : "false"}</div>}
    </div>
  );
};

export default ContainsAllCharacters;