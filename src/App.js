import React from "react";
import { useState } from "react/cjs/react.development";
import Home from "./Components/Home/Home";
import Loading from "./Components/Loading/Loading";

export default function App() {
  const [isLoading, setIsLoading] = useState(true);

  const handleLoading = () => {
    setTimeout(() => setIsLoading(false), 2000);
  };
  handleLoading();

  return (
    <div>
      {isLoading && <Loading />}
      {!isLoading && <Home />}
    </div>
  );
}
