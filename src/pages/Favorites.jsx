import React from "react";
import useRecipe from "../context/Recipe/useRecipe";
import RecipeItem from "../components/RecipeItem";

const Favorites = () => {
  const { favoritesList } = useRecipe();

  return (
    <div className=" p-4">
      {favoritesList && favoritesList.length == 0 && (
        <div className=" text-center text-2xl font-medium">
          {" "}
          Add your favorites from Details
        </div>
      )}
      <div
        className="mx-auto 
  grid  max-w-7xl
  grid-cols-2 gap-4 md:grid-cols-3   lg:grid-cols-4"
      >
        {favoritesList &&
          favoritesList.length > 0 &&
          favoritesList.map((recipe, index) => (
            <RecipeItem recipe={recipe} key={recipe.id} />
          ))}
      </div>
    </div>
  );
};

export default Favorites;
