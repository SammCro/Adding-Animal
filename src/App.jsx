import { useState } from "react";
import AddAnimal from "./AddAnimal";

import './Styles/App.css'


function randomAnimal () {
  const animals = ['bird','cat','cow','dog','gator','horse'];
  const randomIndex = Math.floor(Math.random() * animals.length);
  return animals[randomIndex];
}

function App() {
  const [animals,setAnimals] = useState([]);

  const handleClick = () =>{
    setAnimals([...animals,randomAnimal()]);
  }

  const renderedAnimal=animals.map((animal,index)=>{
    return <AddAnimal type={animal} key={index}></AddAnimal>
  })

  return (
    <div className="app">
      <button onClick={handleClick}> Click me! </button>
      <h1 className="animal-list">{renderedAnimal}</h1>
    </div>
  );
}

export default App;
