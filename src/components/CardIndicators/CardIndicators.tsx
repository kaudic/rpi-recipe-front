import React from "react";
import RestaurantIcon from "@mui/icons-material/Restaurant";
import MicrowaveIcon from "@mui/icons-material/Microwave";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import IconButton from "@mui/material/IconButton";
import "./cardIndicators.scss";

const CardIndicators: React.FC<any> = ({
  qtyMeal,
  preparationTime,
  cookingTime,
  className,
}) => {
  return (
    <div className={`cardIndicator ${className}`}>
     <IconButton aria-label="Nb Repas" color="primary">
        <RestaurantIcon />
        {qtyMeal}
      </IconButton>
      <IconButton aria-label="Prépa" color="secondary">
        <AccessTimeIcon />
        {preparationTime.hours ? `${preparationTime.hours}h` : ""}
        {preparationTime.minutes ? `${preparationTime.minutes}mn` : "00"}
      </IconButton>
      <IconButton aria-label="Cuisson" color="success">
        <MicrowaveIcon />
        {cookingTime.hours ? `${cookingTime.hours}h` : ""}
        {cookingTime.minutes ? `${cookingTime.minutes}mn` : "00"}
      </IconButton>
    </div>
  );
};

export default React.memo(CardIndicators);
