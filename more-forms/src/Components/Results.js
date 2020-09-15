import React from "./node_modules/react";

const Results = ({ state }) => {
  return (
    <div>
      <h1>Results</h1>
      {Object.values(state).map((field) => (
        <p>{field}</p>
      ))}
    </div>
  );
};

export default Results;