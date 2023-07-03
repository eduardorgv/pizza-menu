// import { usePizzas } from "../hooks/usePizzas"
import { Pizza } from "./Pizza"
import { pizzaData } from "../../public/data";

export const Menu = () => {
  // const { pizzas } = usePizzas();

  return (
    <main className="menu">
        <h2>Our menu</h2>
        <Pizza pizzas={pizzaData}/>
    </main>
  )
}
