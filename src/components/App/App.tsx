import { Routes, Route, Navigate } from "react-router-dom";
import HomeCtn from "../../components/Home/HomeCtn";
import Error from "../Error/Error";
import Recipe from "../../components/Recipe/RecipeCtn";
import FormsCtn from "../../components/Forms/FormsCtn";
import BasketCtn from "../../components/Basket/BasketCtn";
import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { actionFetchRecipesList } from "../actions/recipes";
import { actionFetchUnitsList } from "../actions/units";
import { actionFetchTypesList } from "../actions/types";
import { actionFetchIngredientsList } from "../actions/ingredients";
import { actionFetchBasketList, actionSetBasketList } from "../actions/basket";

import "./App.scss";

const App: React.FC<any> = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(actionSetBasketList());
    dispatch(actionFetchRecipesList());
    dispatch(actionFetchUnitsList());
    dispatch(actionFetchTypesList());
    dispatch(actionFetchIngredientsList());
    dispatch(actionFetchBasketList());
  }, []);

  return (
    <Routes>
      <Route path="/" element={<HomeCtn />} />
      <Route path="/recipesAppFront" element={<Navigate to="/" replace />} />
      <Route path="/recipe/:id" element={<Recipe />} />
      <Route path="/create" element={<FormsCtn />} />
      <Route path="/basket" element={<BasketCtn />} />
      <Route path="*" element={<Error />} />
    </Routes>
  );
};

export default React.memo(App);
