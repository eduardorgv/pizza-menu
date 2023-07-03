import { useEffect, useState } from "react";
import { pizzaData } from "../../public/data";

export function usePizzas() {
  const [pizzas, setPizzas] = useState({});

  useEffect(() => {
    if (pizzaData.length === 0) return;

    const filteredPizzas = pizzaData.filter((pizza) => pizza.soldOut !== true);
    setPizzas(filteredPizzas);
  }, []);

  return { pizzas };
}
