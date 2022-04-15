import React from "react";
import "./BreakFast.css";
import UseFoods from "../../Hooks/UseFoods";
import Food from "../Food/Food";

const BreakFast = () => {
  const [foods] = UseFoods();
  return (
    <div className="foods">
      {foods.slice(0, 6).map((food) => (
        <Food key={food.id} food={food}></Food>
      ))}
    </div>

    // https://ibb.co/M8c7T5y
    // https://ibb.co/mRR7swP
    // https://ibb.co/jzXDkST
    // https://ibb.co/wgwZBqG
    // https://ibb.co/dBGhHV7
    // https://ibb.co/jvPHtks
  );
};

export default BreakFast;
