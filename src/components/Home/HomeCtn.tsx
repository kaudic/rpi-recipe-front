import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { actionSetSearchList } from "../../actions/recipes";
import Home from "./Home";

const HomeCtn: React.FC<any> = () => {
  const dispatch = useDispatch();

  // Get datas from the redux store
  const recipes = useSelector((state) => (state as any).recipes.list);
  const recipesSearchList = useSelector((state) => (state as any).recipes.searchList);

  // Function to update the searchList
  const handleSetSearchList = (filteredRecipesFromCheckbox: any) => {
    dispatch(actionSetSearchList(filteredRecipesFromCheckbox));
  };

  return (
    <Home
      recipes={recipes}
      recipesSearchList={recipesSearchList}
      handleSetSearchList={handleSetSearchList}
    />
  );
};

export default React.memo(HomeCtn);
