import './Card.css';

const Card = ({ image, title, description }) => (
  <div className="card">
    <img src={image} alt={title} />
    <div className="card-content">
      <h3 className="card-title">{title}</h3>
      <p className="card-description">{description}</p>
      <button className="card-button">Learn More</button>
    </div>
  </div>
);

export default Card