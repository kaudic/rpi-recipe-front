import React, { useState } from "react";
import Menu from "../Menu/Menu";
import FormsTabs from "../FormsTabs/FormsTabs";
import RecipeForm from "../RecipeForm/RecipeForm";
import "./forms.scss";
import FormsIngredients from "../FormsIngredients/FormsIngredients";
import FormsUnits from "../FormsUnits/FormsUnits";

const Forms: React.FC<any> = ({ units, types, ingredients }) => {
  // State for the value - it represents the selected entry of the side menu
  const [tabsValue, setTabsValue] = useState(0);

  // On click on a tab the value will be updated
  const handleTabsChange = (event: any, value: any) => {
    setTabsValue(value);
  };

  return (
    <>
      <Menu />
      <div className="forms">
        <FormsTabs handleTabsChange={handleTabsChange} tabsValue={tabsValue} />
        {tabsValue === 0 && (
          <RecipeForm
            units={units}
            types={types}
            ingredientsList={ingredients}
            creationMode={true}
          />
        )}
        {tabsValue === 1 && (
          <FormsIngredients units={units} ingredients={ingredients} />
        )}
        {tabsValue === 2 && <FormsUnits units={units} />}
      </div>
    </>
  );
};

export default React.memo(Forms);
