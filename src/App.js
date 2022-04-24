import "./styles.css";
import Navbar from "./Component/Navbar";
import Hero from "./Component/Hero";
import Card from "./Component/Card";
import data from "./Data";
export default function App() {
  const cards = data.map((card) => {
    return <Card key={card.id} {...card} />;
  });
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <section className="card--list">{cards}</section>
    </div>
  );
}
