import React from "react";
import "./App.css";
import SiteHeader from "./components/SiteHeader";
import SiteContent from "./components/SiteContent";
import SiteFooter from "./components/SiteFooter";

const cardContent = {
  title: "Bisons",
  text:
    "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laudantium veniam accusantium alias dolorum ipsam voluptatum harum ab tempora natus officia!",
  imageSource:
    "https://images.unsplash.com/photo-1490260400179-d656f04de422?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80",
};

function App() {
  return (
    <div className="app">
      <SiteHeader title={cardContent.title} />
      <SiteContent cardContent={cardContent} />
      <SiteFooter />
    </div>
  );
}

export default App;
