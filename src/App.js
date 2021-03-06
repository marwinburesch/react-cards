import React from "react";
import "./App.css";
import SiteHeader from "./components/SiteHeader";
import SiteContent from "./components/SiteContent";
import SiteFooter from "./components/SiteFooter";

const animalArray = [
  {
    title: "Bisons",
    text:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laudantium veniam accusantium alias dolorum ipsam voluptatum harum ab tempora natus officia!",
    imageSource:
      "https://images.unsplash.com/photo-1490260400179-d656f04de422?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80",
  },
  {
    title: "Wolves",
    text:
      "Laudantium Lorem ipsum dolor sit amet consectetur, adipisicing elit. Lorem veniam accusantium alias dolorum ipsam voluptatum harum ab tempora natus officia!",
    imageSource:
      "https://images.unsplash.com/photo-1590420485404-f86d22b8abf8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80",
  },
];

function App() {
  const [content, setContent] = React.useState(animalArray[0]);

  function setBisonsAsContent() {
    setContent(animalArray[0]);
  }

  function setWolvesAsContent() {
    setContent(animalArray[1]);
  }

  return (
    <div className="app">
      <button onClick={setBisonsAsContent}>Bisons</button>
      <button onClick={setWolvesAsContent}>Wolves</button>
      <SiteHeader title={content.title} />
      <SiteContent cardContent={content} />
      <SiteFooter />
    </div>
  );
}

export default App;
