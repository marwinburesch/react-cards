import React from "react";
import SiteHeader from "./components/SiteHeader";
import SiteContent from "./components/SiteContent";
import SiteFooter from "./components/SiteFooter";

function App() {
  return (
    <div className="App">
      <SiteHeader />
      <SiteContent />
      <SiteFooter />
    </div>
  );
}

export default App;
