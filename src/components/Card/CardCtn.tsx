import React from "react";
import Card from "./Card";
import { useDispatch } from "react-redux";
import { actionFetchAddOneBasket } from "../../actions/basket";

const CardCtn: React.FC<any> = ({
  id,
  title,
  reference,
  type_name,
  img_name,
  meal_qty,
  cooking_time,
  preparation_time,
  basket,
}) => {
  const dispatch = useDispatch();

  const handleAddToCartClick = () => {
    dispatch(actionFetchAddOneBasket(id));
  };

  return (
    <Card
      id={id}
      title={title}
      reference={reference}
      type_name={type_name}
      img_name={img_name}
      meal_qty={meal_qty}
      cooking_time={cooking_time}
      preparation_time={preparation_time}
      basket={basket}
      handleAddToCartClick={handleAddToCartClick}
    />
  );
};

export default React.memo(CardCtn);
