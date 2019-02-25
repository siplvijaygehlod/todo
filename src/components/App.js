import React from "react";
import CreateList from "./CreateList";
import ShowList from "./ShowList";

const App = () => {
  return (
    <div className="ui container">
      <CreateList />
      <ShowList />
    </div>
  );
};

export default App;
