const pizzaData = [
  {
    name: "Focaccia",
    ingredients: "Bread with italian olive oil and rosemary",
    price: 6,
    photoName: "pizzas/focaccia.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Margherita",
    ingredients: "Tomato and mozarella",
    price: 10,
    photoName: "pizzas/margherita.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Spinaci",
    ingredients: "Tomato, mozarella, spinach, and ricotta cheese",
    price: 12,
    photoName: "pizzas/spinaci.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Funghi",
    ingredients: "Tomato, mozarella, mushrooms, and onion",
    price: 12,
    photoName: "pizzas/funghi.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Salamino",
    ingredients: "Tomato, mozarella, and pepperoni",
    price: 15,
    photoName: "pizzas/salamino.jpg",
    soldOut: true,
  },
  {
    name: "Pizza Prosciutto",
    ingredients: "Tomato, mozarella, ham, aragula, and burrata cheese",
    price: 18,
    photoName: "pizzas/prosciutto.jpg",
    soldOut: false,
  },
];

export default function App() {
  return (
    <div className="container">
      <Header />
      <Main />
      <Footer />
    </div>
  );
}
function Header() {
  return (
    <header className="header">
      <h1>Fast React Pizza Co.</h1>
    </header>
  );
}

function Main() {
  return (
    <main className="menu">
      <h2>OUR MENU</h2>
      <PizzaList></PizzaList>
    </main>
  );
}

function PizzaList() {
  const pizzas = pizzaData;
  return pizzas.length !== 0 ? (
    <>
      <p>
        Authentic Italian cuisine. 6 creative dishes to choose from. All from our stone oven, all organic, all
        delicious.
      </p>
      <ul className="pizzas">
        {pizzaData.map((pizza) => (
          <Pizza
            pizzaName={pizza.name}
            pizzaSrc={pizza.photoName}
            pizzaIngredients={pizza.ingredients}
            pizzaPrice={pizza.price}
            soldOut={pizza.soldOut}
            key={pizza.name}
          />
        ))}
      </ul>
    </>
  ) : (
    <p>OUR MENU CURRENTLY UNDER PREPARATIONS PLEASE REACH OUT LATER</p>
  );
}

function Pizza({ pizzaName, pizzaSrc, pizzaIngredients, pizzaPrice, soldOut }) {
  return (
    <li className={`pizza ${soldOut ? "sold-out" : ""}`}>
      <img src={pizzaSrc} alt={pizzaName}></img>
      <div>
        <h3>{pizzaName}</h3>
        <p>{pizzaIngredients}</p>
        <span>{soldOut ? "SOLD OUT" : pizzaPrice}</span>
      </div>
    </li>
  );
}

function Footer() {
  const openHour = 12;
  const closeHour = 22;
  const now = new Date().getHours();
  const isOpen = now >= openHour && now <= closeHour;
  return (
    <footer className="footer">
      <div className="order">
        <p>
          {" "}
          {isOpen
            ? "We Are Open Come VISIT us OR ORDER now"
            : "We're happy to welcome you between 12:00 and 22:00."}{" "}
        </p>
        <button className="btn"> Order</button>
      </div>
    </footer>
  );
}
