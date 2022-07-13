import './App.css';
import foods from './foods.json';
// import { Card, Row, Col, Divider, Input, Button } from 'antd';
import {useState} from "react";
import FoodBox from './components/FoodBox';

function App() {
  let [comidas, setComidas] = useState(foods)
  return <div className="App">
      {comidas.map((comida) => {
          return <FoodBox name = {comida.name} calories  = {comida.calories} image = {comida.image} servings = {comida.servings} />
        })
      }
  </div>;
}
export default App;