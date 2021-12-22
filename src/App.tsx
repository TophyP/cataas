import Header from "./Components/Header";
import CatContainer from "./Components/CatContainer";
import Button from "./Components/Button";
import { useState } from "react";

function App() {
  const [imageSource, setImageSource] = useState("");

  const generateRandomCat = async () => {
    const response = await fetch("https://cataas.com/cat?json=true");
    const cat = await response.json();
    setImageSource(cat.url);
  };

  return (
    <div className="App">
      <Header text={"Generate a random cat"} />
      <Button generateRandomCat={generateRandomCat} />
      <CatContainer imageSource={imageSource} alternateText="Random Cat" />
      <hr />
    </div>
  );
}

export default App;
