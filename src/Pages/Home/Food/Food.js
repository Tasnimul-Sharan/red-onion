import React from "react";

const Food = ({ food }) => {
  const { name, picture, price } = food;

  return (
    <div>
      <img src={picture} alt="" />
      <p>
        <small>{name}</small>
      </p>
      <h5>{price}</h5>
    </div>
  );
};

export default Food;
