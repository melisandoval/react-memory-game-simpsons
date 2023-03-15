import React, { useState } from "react";
import Home from "./Components/Home/Home";
import Loading from "./Components/Loading/Loading";
import "./index.css";

export default function App() {
  const [isLoading, setIsLoading] = useState(true);

  const handleLoading = () => {
    setTimeout(() => setIsLoading(false), 2000);
  };
  handleLoading();

  return (
    <div className="app">
      {isLoading && <Loading />}
      {!isLoading && <Home />}
    </div>
  );
}
