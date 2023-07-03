/* eslint-disable react/prop-types */
/* eslint-disable react/no-unescaped-entities */
function NoOpenMsg() {
  return (
    <p>We're currently not open :c</p>
  )
}

function OpenMsg({closeHour}) {
  return (
    <footer className="footer">
      <div className="order">
        <p>We're open until {closeHour}:00. Come visit us or order online.</p>
        <button className="btn">Order Now</button>
      </div>
    </footer>
  )
}

export const Footer = () => {
  const hour = new Date().getHours();
  const openHour = 8;
  const closeHour = 22;
  const isOpen = hour >= openHour && hour <= closeHour;

  return (
    isOpen
      ? <OpenMsg closeHour={closeHour} />
      : <NoOpenMsg />
  );
};
