import './App.css';
import foods from './foods.json'; // JSON DATA Video Min 2.56
import {useState} from "react";
import FoodBox from './components/FoodBox';
import AddFoodForm from './components/AddFoodForm';

function App() {
  let [comidas, setComidas] = useState(foods)
  const [searchTerm, setsearchTerm] = useState('');
  

  const addNewFood = (newFood) => {
    const updatedFood = [...comidas, newFood];
    setComidas(updatedFood);
  };

  return <div className="App">
       <div className='AppDos'>
       <div>
            <input type="text" placeholder='Search...' onChange={event=>{setsearchTerm(event.target.value)}}/>
       </div>
  
  {comidas.filter((val)=>{
    if(setsearchTerm == ""){
      return val
    }else if(val.name.toLowerCase().includes(searchTerm.toLowerCase())){
      return val
    }
  }).map((val,key)=>{
    return <div className='comida' key={key}>
    <FoodBox name = {val.name}  image = {val.image} calories = {val.calories} servings = {val.servings}/>
    </div>
  })}
</div>

     
      <AddFoodForm AddFoodForm= {addNewFood} />
  </div>;
}
export default App;