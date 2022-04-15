import { useEffect, useState } from "react";

const UseFoods = () => {
  const [foods, setFoods] = useState([]);
  useEffect(() => {
    fetch("foods.json")
      .then((res) => res.json())
      .then((data) => setFoods(data));
  }, []);
  return [foods, setFoods];
};

export default UseFoods;
