import React from "react";
import IngredientForm from "../IngredientForm/IngredientForm";
import Tooltip from "@mui/material/Tooltip";
import { IconButton } from "@mui/material";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import "./ingredientList.scss";

const IngredientList: React.FC<any> = ({
  handleIngredientDialBoxClickOpen,
  ingredients,
  units,
  updateIngredientsQtyChange,
  updateIngredientsUnitChange,
  deleteIngredient,
  showQty,
  enableIngredientName,
  ingredientListClassName,
  ingredientFormClassName,
}) => {
  return (
    <>
      <h1 className="recipeForm-title">
        Liste des ingrédients
        <Tooltip title="Ajouter Ingrédient">
          <IconButton onClick={handleIngredientDialBoxClickOpen}>
            <AddCircleIcon color="success" />
          </IconButton>
        </Tooltip>
      </h1>
      <ul className={ingredientListClassName}>
        {ingredients.map((ingredient: any) => (
          <IngredientForm
            key={ingredient.id}
            ingredient={ingredient}
            units={units}
            updateIngredientsQtyChange={updateIngredientsQtyChange}
            updateIngredientsUnitChange={updateIngredientsUnitChange}
            deleteIngredient={deleteIngredient}
            ingredientFormClassName={ingredientFormClassName}
            showQty={showQty}
            enableIngredientName={enableIngredientName}
          />
        ))}
      </ul>
    </>
  );
};


export default React.memo(IngredientList);
