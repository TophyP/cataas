import Header from "./Components/Header";
import Button from "./Components/Button";

const generateRandomCat = async () => {
  const response = await fetch("https://cataas.com/cat?json=true");
  const cat = await response.json();
  console.log(cat);
};

function App() {
  return (
    <div className="App">
      <Header text={"Generate a random cat"} />
      <Button generateRandomCat={generateRandomCat} />
      <hr />
    </div>
  );
}

export default App;
