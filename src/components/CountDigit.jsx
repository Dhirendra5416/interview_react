import React, { useState } from "react";

const CountOccurrences = () => {
  const [N, setN] = useState("");
  const [D, setD] = useState("");
  const [result, setResult] = useState(null);

  const countDigitOccurrences = (N, D) => {
    let count = 0;

    for (let i = 1; i <= N; i++) {
      const digits = i.toString().split("");
      count += digits.filter((digit) => digit === D.toString()).length;
    }

    return count;
  };

  const handleCountOccurrences = () => {
    const count = countDigitOccurrences(Number(N), Number(D));
    setResult(count);
  };

  return (
    <div>
      <div>
        <label style={{ padding: "10px", marginRight: "10px" }}>
          N: write range of numbers
          <input
            type="number"
            value={N}
            onChange={(e) => setN(e.target.value)}
          />
        </label>
      </div>
      <div>
        <label style={{ padding: "10px" }}>
          D:write number to count
          <input
            type="number"
            value={D}
            onChange={(e) => setD(e.target.value)}
          />
        </label>
      </div>
      <button
        style={{ marginTop: "10px", cursor: "pointer" }}
        onClick={handleCountOccurrences}
      >
        Count Occurrences
      </button>
      {result !== null && <div>Occurrences: {result}</div>}
    </div>
  );
};

export default CountOccurrences;

