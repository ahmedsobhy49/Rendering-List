import React, { useState } from "react";
import data from "./data";
import List from "./List";
function App() {
  const [people, setPeople] = useState(data);
  function handleClearList() {
    setPeople([]);
  }
  return (
    <main>
      <div className="container">
        <h3>{people.length} Birthdays Today</h3>
        <List data={people} />
        <button className="btn" onClick={handleClearList}>
          Clear List
        </button>
      </div>
    </main>
  );
}

export default App;
