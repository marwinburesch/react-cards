import React from "react";
import "./App.css";
import SiteHeader from "./components/SiteHeader";
import SiteContent from "./components/SiteContent";
import SiteFooter from "./components/SiteFooter";

function App() {
  return (
    <div className="app">
      <SiteHeader />
      <SiteContent />
      <SiteFooter />
    </div>
  );
}

export default App;
