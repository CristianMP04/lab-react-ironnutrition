// Style Guide:9
// In this file you can find a reference example of the structure
// and content that the component should render.
// Remember to import Ant Design components before using them.
import React from 'react';
import { Card, Col, Button } from 'antd';
import foods from './foods.json';

// Iteration 2
function FoodBox(props) {
  return (
    <Col>
      <Card
        title={'FOOD_NAME_HERE'}
        style={{ width: 230, height: 300, margin: 10 }}
      >
        <img src={'FOOD_IMAGE_HERE'} height={60} alt="food" />
        <p>Calories: FOOD_CALORIES_HERE</p>
        <p>Servings: FOOD_SERVINGS_HERE</p>
        <p>
          <b>Total Calories: FOOD_CALORIES * FOOD_SERVINGS </b> kcal
        </p>
        <Button type="primary"> Delete </Button>
      </Card>
    </Col>
  );
}

export default FoodBox;


            // <div>
            //     <p> {comida.name} </p>
            //     <img src={comida.image} width={150} alt={comida.name} />
            // </div>

          //   <Col>
          //   <Card
          //     title={comida.name}
          //     style={{ width: 230, height: 300, margin: 10 }}
          //   >
          //     <img src={comida.image} height={60} alt="food" />
          //     <p>Calories: {comida.calories}</p>
          //     <p>Servings: {comida.servings}</p>
          //     <p>
          //       <b>Total Calories: FOOD_CALORIES * FOOD_SERVINGS </b> kcal
          //     </p>
          //     <Button type="primary"> Delete </Button>
          //   </Card>
          // </Col>
