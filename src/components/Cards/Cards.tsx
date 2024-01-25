import PropTypes from "prop-types";
import React from "react";
import CardCtn from "../Card/CardCtn";
import "./cards.scss";

const Cards: React.FC<any> = ({ recipes }) => {
  return (
    <section className="cards">
      {recipes && (
        <div className="cards-list">
          {recipes.map((recipe: any) => {
            return <CardCtn key={recipe.id} {...recipe} />;
          })}
        </div>
      )}
    </section>
  );
};


export default React.memo(Cards);
