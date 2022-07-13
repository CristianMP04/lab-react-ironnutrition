import './App.css';
import foods from './foods.json';
// import { Card, Row, Col, Divider, Input, Button } from 'antd';
import {useState} from "react";

function App() {
  const [comidas, setComidas] = useState(foods)
  return <div className="App">
      {comidas.map((comida) => {
          return (
            
            <div>
                <p> {comida.name} </p>
                <img src={comida.image} width={150} />
            </div>
          );
        })
      }
  </div>;
}
export default App;