import React from "react";
import Menu from "./Menu";
import { actionSetRandomRecipe } from "../../actions/recipes";
import { useDispatch, useSelector } from "react-redux";

const MenuCtn: React.FC<any> = ({ updateTypeFilter, handleSearchOnChange }) => {
  const dispatch = useDispatch();

  const recipeCount = useSelector(
    (state) => parseInt((state as any)?.basket?.list?.recipesCount[0]?.count) || 0,
  );
  const user = useSelector((state) => (state as any).login);

  const handleShuffleClick = () => {
    dispatch(actionSetRandomRecipe());
  };

  return (
    <Menu
      recipeCount={recipeCount}
      handleShuffleClick={handleShuffleClick}
      updateTypeFilter={updateTypeFilter}
      handleSearchOnChange={handleSearchOnChange}
      user={user}
    />
  );
};

export default MenuCtn;
