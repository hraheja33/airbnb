export default function Card(props) {
  let badgeText;
  if (props.openSpots === 0) {
    badgeText = "SOLD OUT";
  } else if (props.location === "Online") {
    badgeText = "Online";
  }
  return (
    <div className="Card">
      {badgeText && <div className="Card--badge">{badgeText}</div>}
      <img className="Card--img" alt="img" src={props.coverImg} />
      <div className="Card--div">
        <i className="fa-solid fa-star"></i>
        <span className="span">
          {props.stats.rating}
          <span className="gray">
            ({props.stats.reviewCount}) {props.location}
          </span>
        </span>
      </div>
      <p className="Card--Des">{props.title}</p>
      <p className="Card--Des">
        <strong>From ${props.price}</strong>
      </p>
    </div>
  );
}
