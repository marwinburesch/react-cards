import React from "react";
import "./App.css";
import SiteHeader from "./components/SiteHeader";
import SiteContent from "./components/SiteContent";
import SiteFooter from "./components/SiteFooter";

const animalArray = [
  {
    title: "Bisons",
    text: "Loading...",
    imageSource: "",
  },
  {
    title: "Wolves",
    text: "Loading...",
    imageSource: "",
  },
];

async function fetchAnimals() {
  return fetch("https://api.jsonbin.io/b/5ee9c253ccc9877ac37d56e1")
    .then((response) => response.json())
    .then((data) => data.animals);
}

function App() {
  const [content, setContent] = React.useState(animalArray[0]);

  function setBisonsAsContent() {
    fetchAnimals().then((response) => setContent(response[0]));
  }

  function setWolvesAsContent() {
    fetchAnimals().then((response) => setContent(response[1]));
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
