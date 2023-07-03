/* eslint-disable react/prop-types */
function ListOfPizzas({pizzas}) {
  return (
    <div className="pizzas">
      {pizzas.map((pizza, i) => (
        // eslint-disable-next-line react/jsx-key
        <div className={`pizza ${pizza.soldOut ? "sold-out" : ""}`} key={i}>
          <img src={`src/assets/pizzas/${pizza.photoName}`} alt={pizza.name} />
          <div>
            <h3>{pizza.name}</h3>
            <p>{pizza.ingredients}</p>
            <span>{pizza.soldOut ? 'SOLD OUT' : `$${pizza.price}.00`}</span>
          </div>
        </div>
      ))}
    </div>
  )
}

function NoListOfPizzas() {
  return (
    <p>Sorry, we still working in our menu. Please, come back later.</p>
  )
}

export const Pizza = ({pizzas}) => {
  return (
    pizzas.length > 0
      ? <ListOfPizzas pizzas={pizzas} />
      : <NoListOfPizzas />
  )
}
