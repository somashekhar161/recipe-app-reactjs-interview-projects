import React from "react";
import useRecipe from "../context/Recipe/useRecipe";

import RecipeItem from "../components/RecipeItem";
const Home = () => {
  const { loading, recipeList } = useRecipe();
  if (loading) {
    return (
      <div className=" flex items-center justify-center p-20">
        <div className=" animate-bounce text-2xl font-semibold">Loading...</div>
      </div>
    );
  }
  return (
    <div className=" p-4">
      {recipeList && recipeList.length == 0 && (
        <div className=" text-center text-2xl font-medium">
          {" "}
          Search for a recipe
        </div>
      )}
      <div
        className="mx-auto 
      grid  max-w-7xl
      grid-cols-2 gap-4 md:grid-cols-3   lg:grid-cols-4"
      >
        {recipeList &&
          recipeList.length > 0 &&
          recipeList.map((recipe, index) => (
            <RecipeItem recipe={recipe} key={recipe.id} />
          ))}
      </div>
    </div>
  );
};

export default Home;
