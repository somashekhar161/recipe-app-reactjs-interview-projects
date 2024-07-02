import React from "react";
import { useNavigate } from "react-router-dom";

const RecipeItem = ({ recipe }) => {
  const navigate = useNavigate();
  return (
    <div className="space-y-2 rounded bg-purple-200 p-2 px-4  shadow">
      <div className="flex justify-center">
        <img
          className="h-52 w-full object-cover"
          height={200}
          width={200}
          src={recipe.image_url}
        ></img>
      </div>
      <h3 className="text-sm font-medium text-purple-800">
        {recipe.publisher}
      </h3>
      <h1 className=" w-full truncate text-xl font-semibold ">
        {recipe.title}
      </h1>
      <button
        className="rounded bg-purple-950 p-2 px-5  font-medium  text-white shadow transition-all hover:scale-105 active:scale-95 "
        onClick={() => {
          navigate(`/details/${recipe.id}`);
        }}
      >
        Recipe Details
      </button>
    </div>
  );
};

export default RecipeItem;
