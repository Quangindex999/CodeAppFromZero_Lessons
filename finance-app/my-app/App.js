import React from "react";
import Navigation from "./src/navigation/Navigation";
import { BillContextProvider } from "./src/components/BillContext";

function App() {
  return (
    <BillContextProvider>
      <Navigation />
    </BillContextProvider>
  );
}

export default App;
