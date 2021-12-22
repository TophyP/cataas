import Header from "./Components/Header";
import CatContainer from "./Components/CatContainer";
import Button from "./Components/Button";
import { useState } from "react";
import Checkbox from "./Components/Checkbox";

function App() {
  const [imageSource, setImageSource] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [isChecked, setIsChecked] = useState(false);
  const [parameters, setParameters] = useState("");

  const generateRandomCat = async () => {
    setImageSource("");
    setIsLoading(true);
    handleUpdateParameters();
    const response = await fetch(
      `https://cataas.com/cat${parameters}?json=true`
    );
    const cat = await response.json();
    setImageSource(cat.url);
  };

  const imageDidLoad = () => {
    setIsLoading(false);
  };

  const handleCheckboxOnChange = () => {
    setIsChecked(!isChecked);
  };

  const handleUpdateParameters = () => {
    if (isChecked) {
      setParameters("/gif");
      return;
    }
    setParameters(parameters.replace("/gif", ""));
  };

  return (
    <div className="App">
      <Header text={"Generate a random cat"} />
      <Button generateRandomCat={generateRandomCat} />
      <Checkbox
        label={"Show me a gif"}
        id={"gif-checkbox"}
        checked={isChecked}
        handleCheckboxOnChange={handleCheckboxOnChange}
      />
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
