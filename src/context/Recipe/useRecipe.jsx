import { useContext } from "react";
import { RecipeContext } from "./RecipeContext";

const useRecipe = () => {
  const context = useContext(RecipeContext);
  if (!context) {
    throw new Error("useUser must be used within an RecipeProvider");
  }
  return context;
};

export default useRecipe;
