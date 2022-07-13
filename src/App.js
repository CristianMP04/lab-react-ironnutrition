import './App.css';
import foods from './foods.json';
import {useState} from "react";
import FoodBox from './components/FoodBox';
import AddFoodForm from './components/AddFoodForm';

function App() {
  let [comidas, setComidas] = useState(foods)

  const addNewFood = (newFood) => {
    const updatedFood = [...comidas, newFood];
    setComidas(updatedFood);
  };

  return <div className="App">
      {comidas.map((comida) => {
          return (<FoodBox name = {comida.name} calories  = {comida.calories} image = {comida.image} servings = {comida.servings}/>)
           
        })
        
      }
      <AddFoodForm AddFoodForm= {addNewFood} />
  </div>;
}
export default App;