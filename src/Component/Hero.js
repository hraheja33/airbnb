import "../styles.css";
export default function Hero() {
  return (
    <div className="hero">
      <img
        alt="img"
        className="Hero--img"
        src="https://imgproxy.epicpxls.com/mmoK4TQ4xme9D9dayyb1dGvxSGu6AhWaI0ExSmkISlk/rs:fill:800:600:0/g:no/aHR0cHM6Ly9pdGVt/cy5lcGljcHhscy5j/b20vdXBsb2Fkcy9w/aG90by81NDU4Yjk2/OTRkZTBiMTc0YTQ5/NzAwMDYwYjc1MDgw/NA.jpg"
      />
      <h2 className="Hero--title">Online Experiances</h2>
      <p className="Hero--text">
        Join unique interactive activities led by one-of-a-kind hosts-all
        wihtout leaving home.
      </p>
    </div>
  );
}
