import React from "react";
import { Link } from "react-router-dom";
import CardIndicators from "../CardIndicators/CardIndicators";
import "./card.scss";

const Card: React.FC<any> = ({
  id,
  title,
  reference,
  type_name,
  img_name,
  meal_qty,
  cooking_time,
  preparation_time,
  basket,
  handleAddToCartClick,
}) => {
  const baseUrl =
    process.env.NODE_ENV === "production"
      ? process.env.REACT_APP_BASE_URL_PROD
      : process.env.REACT_APP_BASE_URL_DEV;

  return (
    <article className="card">
      <div className="card-img-container">
        <img
          className="card-img"
          src={`${baseUrl}/images/${img_name}`}
          alt={img_name}
        />
      </div>
      <div className="card-content">
        <h2 className="card-title">{title}</h2>
        <p className="card-desc">Référence : {reference}</p>
        <span
          className={`card-type 
        ${
          type_name === "VIANDE"
            ? "card-type-viande"
            : type_name === "POISSON"
              ? "card-type-poisson"
              : "card-type-vegan"
        }`}
        >
          {type_name}
        </span>
        <CardIndicators
          qtyMeal={meal_qty}
          preparationTime={preparation_time}
          cookingTime={cooking_time}
        />
        <div className="card-btn-ctn">
          <Link to={`/recipe/${id}`} className="card-link">
            Voir la recette
          </Link>
          <button
            disabled={basket}
            onClick={handleAddToCartClick}
            className={`card-btn ${basket ? "card-btn-disabled" : ""}`}
          >
            Ajouter au Panier
          </button>
        </div>
      </div>
    </article>
  );
};

export default React.memo(Card);
