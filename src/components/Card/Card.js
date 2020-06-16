import React from "react";
import "./Card.css";
import CardText from "./CardText";
import CardImage from "./CardImage";

export default function Card() {
  return (
    <article className="card">
      <CardText />
      <CardImage />
    </article>
  );
}
