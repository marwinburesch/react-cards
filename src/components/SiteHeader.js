import React from "react";

export default function SiteHeader(props) {
  return (
    <header>
      <h1>A website about {props.title}</h1>
    </header>
  );
}
