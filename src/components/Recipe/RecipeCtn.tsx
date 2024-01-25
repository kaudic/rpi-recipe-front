import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams, Navigate } from "react-router-dom";
import { findRecipeByPk } from "../../selectors/recipes";
import Recipe from "./Recipe";
import RecipeForm from "../RecipeForm/RecipeForm";
import MenuCtn from "../Menu/MenuCtn";
import {
  actionFetchDeleteRecipe,
  actionFetchRecipesList,
} from "../../actions/recipes";
import Swal from "sweetalert2";
import { actionFetchAddOneBasket } from "../../actions/basket";

const RecipeCtn: React.FC<any> = () => {
  const dispatch = useDispatch();
  const [modify, setModify] = useState(false);

  // Getting the recipe, units and types information to display
  const { id: recipeId } = useParams();
  const recipe = useSelector((state) =>
    findRecipeByPk((state as any).recipes.list, recipeId),
  );
  const units = useSelector((state) => (state as any).units.list);
  const types = useSelector((state) => (state as any).types.list);
  const basketList = useSelector((state) => (state as any).basket.list.recipes);
  const ingredientsList = useSelector((state) => (state as any).ingredients.list);

  // State for disabling the addToCart Btn if necessary
  const [recipeInCart, setRecipeInCart] = useState(false);

  // if id change we check if recipe id is in the basket
  useEffect(() => {
    if (
      basketList.findIndex(
        (recipe: any) => parseInt(recipe.id) === parseInt(recipeId as string),
      ) != -1
    ) {
      setRecipeInCart(true);
    } else {
      setRecipeInCart(false);
    }
  }, [recipeId, basketList]);

  // function to add a recipe to the cart
  const handleAddToCartClick = () => {
    dispatch(actionFetchAddOneBasket(recipeId));
    setRecipeInCart(true);
  };

  // Function to handle the click on delete button
  const handleDeleteClick = (event: any) => {
    event.preventDefault();
    Swal.fire({
      title: "Etes vous sûr de vouloir supprimer la recette ?",
      text: "Vous ne pourrez pas revenir en arrière!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      cancelButtonText: "Annuler",
      confirmButtonText: "Oui, supprimer!",
    }).then((result) => {
      if (result.isConfirmed) {
        dispatch(actionFetchDeleteRecipe(recipeId));
      }
    });
  };

  // Function to handle the click on modify button
  const handleModifyClick = () => {
    setModify((oldState) => !oldState);
  };

  // Function to handle the click on cancel button
  const handleCancelClick = () => {
    setModify((oldState) => !oldState);
    dispatch(actionFetchRecipesList());
  };

  // Returning the JSX component
  if (!recipe) {
    return <Navigate to="/" replace />;
  }

  return (
    <>
      <MenuCtn />

      {modify ? (
        <RecipeForm
          recipe={recipe}
          units={units}
          types={types}
          ingredientsList={ingredientsList}
          handleCancelClick={handleCancelClick}
          setModify={setModify}
        />
      ) : (
        <Recipe
          recipe={recipe}
          recipeInCart={recipeInCart}
          handleDeleteClick={handleDeleteClick}
          handleModifyClick={handleModifyClick}
          handleAddToCartClick={handleAddToCartClick}
        />
      )}
    </>
  );
};

export default React.memo(RecipeCtn);
