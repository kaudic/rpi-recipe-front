import React, { useEffect, useState } from "react";
import Cards from "../Cards/Cards";
import MenuCtn from "../Menu/MenuCtn";
import Page from "../Page/Page";

const Home: React.FC<any> = ({
  recipes,
  recipesSearchList,
  handleSetSearchList,
}) => {
  // internal state for controlling the input search field
  const [searchString, setSearchString] = useState("");

  // internal state for controlling the checkBox for filtering cards (poisson, viande, vegan)
  const [typeFilter, setTypeFilter] = useState([1, 2, 3]);

  // function to update the state typeFilter
  const updateTypeFilter = (typeId: any) => {
    const oldTypeFilterState = typeFilter;

    if (oldTypeFilterState.includes(parseInt(typeId))) {
      const indexOfTypeId = oldTypeFilterState.indexOf(parseInt(typeId));
      oldTypeFilterState.splice(indexOfTypeId, 1);
    } else {
      oldTypeFilterState.push(parseInt(typeId));
    }
    const newTypeFilterState = [...oldTypeFilterState];
    setTypeFilter(newTypeFilterState);
  };

  // update the searchList at each change of recipes and searchString
  useEffect(() => {
    // in case there is no search string then we decide to start from all recipes in the search list and then apply the checkBox filter
    if (searchString === "") {
      const filteredRecipesFromCheckbox = recipes.filter((recipe: any) => {
        return typeFilter.includes(parseInt(recipe.type_id));
      });
      handleSetSearchList(filteredRecipesFromCheckbox);
      return;
    }

    // in case we have a search string then we update the searchList from the store
    const searchRecipes = recipes.filter((recipe: any) => {
      return (
        (recipe.title.toLowerCase().includes(searchString.toLowerCase()) ||
          recipe.reference.toLowerCase().includes(searchString.toLowerCase()) ||
          recipe.text.toLowerCase().includes(searchString.toLowerCase()) ||
          // look for the searchString in the ingredients
          (() => {
            let isRecipe = false;
            recipe.ingredients.forEach((ingredient: any) => {
              if (ingredient.name) {
                if (
                  ingredient.name
                    .toLowerCase()
                    .includes(searchString.toLowerCase())
                ) {
                  isRecipe = true;
                }
              }
            });
            return isRecipe;
          })()) &&
        // Check that type of recipe matches with checked inputBox
        typeFilter.includes(parseInt(recipe.type_id))
      );
    });
    handleSetSearchList(searchRecipes);
    return;
  }, [searchString, recipes, typeFilter]);

  // function to filter the recipes by looking for a searchString
  const handleSearchOnChange = (event: any) => {
    setSearchString(event.target.value);
  };

  return (
    <Page>
      <MenuCtn
        handleSearchOnChange={handleSearchOnChange}
        updateTypeFilter={updateTypeFilter}
      />
      <Cards recipes={recipesSearchList} />
    </Page>
  );
};


export default React.memo(Home);
