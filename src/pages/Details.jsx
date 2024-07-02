import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import useRecipe from "../context/Recipe/useRecipe";
const Details = () => {
  const { recipeId } = useParams();
  const {
    loading,
    recipeDetailsData,
    favoritesList,
    handleAddToFavorite,
    handleGetDetails,
  } = useRecipe();

  useEffect(() => {
    handleGetDetails(recipeId);
  }, []);

  if (loading) {
    return (
      <div className=" flex items-center justify-center p-20">
        <div className=" animate-bounce text-2xl font-semibold">Loading...</div>
      </div>
    );
  }

  return (
    <div>
      <div className="mx-auto grid max-w-7xl grid-cols-1  gap-4 p-2 py-4 md:grid-cols-2">
        {recipeDetailsData && (
          <>
            <div className="flex justify-center">
              <img
                src={recipeDetailsData?.image_url}
                className=" rounded  object-contain "
              ></img>
            </div>
            <div className=" space-y-4 p-2">
              <h3 className=" font-medium text-purple-600">
                {recipeDetailsData.publisher}
              </h3>
              <h1 className=" text-2xl font-bold">{recipeDetailsData.title}</h1>
              <button
                onClick={() => handleAddToFavorite(recipeDetailsData)}
                className=" rounded-lg bg-purple-900 p-2 px-4 text-xl font-medium uppercase text-white shadow transition-all hover:scale-105 active:scale-95 "
              >
                {favoritesList.findIndex(
                  (item) => item.id === recipeDetailsData.id,
                ) === -1
                  ? "save as favorites"
                  : "remove from favorites"}
              </button>
              <div className="space-y-2 font-medium">
                <h1 className="text-2xl "> ingredients:</h1>
                <ul className="space-y-1  pl-2 text-xl">
                  {recipeDetailsData.ingredients.map((ingredient, index) => {
                    return (
                      <li key={index}>
                        {Object.values(ingredient)
                          .join(" - ")
                          .replace("-  -", "-")
                          .replace("- -", " - ")}
                      </li>
                    );
                  })}
                </ul>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Details;
