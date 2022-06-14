import React from "react";
import "./Header.css";
import homerThinking from "../../assets/homer-thinking.png";

export default function Header() {
  return (
    <header>
      <h1>The Simpsons Memory Game!</h1>
      <img src={homerThinking} alt="Homer thinking" loading="eager" />
    </header>
  );
}
