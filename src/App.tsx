import React, { useCallback } from "react";
import "./App.css";
import { CTA } from "./CTA";

function App() {
  const handleButtonOnClick = useCallback(() => {
    alert("jee")
  }, [])

  return (
    <div className="App">
      <CTA
        header="Lorem ipsum dolor sit"
        text="Lorem impsum dolor sit amet, consectetuer adipiscing elit. Donec odio."
        buttonLabel="Call to action"
        buttonOnClick={handleButtonOnClick}
      />
    </div>
  );
}

export default App;
