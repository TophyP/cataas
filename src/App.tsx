import Header from "./Components/Header";
import CatContainer from "./Components/CatContainer";
import Button from "./Components/Button";
import { useState } from "react";

function App() {
  const [imageSource, setImageSource] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const generateRandomCat = async () => {
    setImageSource("");
    setIsLoading(true);
    const response = await fetch("https://cataas.com/cat?json=true");
    const cat = await response.json();
    setImageSource(cat.url);
  };

  const imageDidLoad = () => {
    setIsLoading(false);
  };

  return (
    <div className="App">
      <Header text={"Generate a random cat"} />
      <Button generateRandomCat={generateRandomCat} />
      {isLoading && <p>Loading...</p>}
      {imageSource && (
        <CatContainer
          imageSource={imageSource}
          alternateText="Random Cat"
          imageDidLoad={imageDidLoad}
        />
      )}
    </div>
  );
}

export default App;
