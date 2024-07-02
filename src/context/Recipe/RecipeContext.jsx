import React, { createContext, useContext, useState } from "react";
import { useNavigate } from "react-router-dom";

export const RecipeContext = createContext(undefined);

export const RecipeProvider = ({ children }) => {
  const [searchParam, setSearchParam] = useState("pizza");
  const [loading, setLoading] = useState(false);
  const [recipeList, setRecipeList] = useState([]);
  const [recipeDetailsData, setRecipeDetailsData] = useState(null);
  const [favoritesList, setFavoritesList] = useState([]);

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    setLoading(true);
    try {
      e.preventDefault();
      const URL = `https://forkify-api.herokuapp.com/api/v2/recipes?search=${searchParam}`;
      const res = await fetch(URL);
      const data = await res.json();
      if (data?.data?.recipes) {
        setRecipeList(data.data.recipes);
        navigate("/");
      }
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
      setSearchParam("");
    }
  };

  const handleGetDetails = async (id) => {
    try {
      setLoading(true);
      const URL = `https://forkify-api.herokuapp.com/api/v2/recipes/${id}`;
      const res = await fetch(URL);
      const data = await res.json();

      if (data?.data?.recipe) {
        setRecipeDetailsData(data.data.recipe);
      }
    } catch (error) {
      console.log(error);
      navigate("/");
    } finally {
      setLoading(false);
    }
  };

  const handleAddToFavorite = (CurrentItem) => {
    setFavoritesList((prevList) => {
      let cpyList = [...prevList];
      const index = cpyList.findIndex((i) => i.id === CurrentItem.id);

      if (index != -1) {
        cpyList.splice(index, 1);
      } else {
        cpyList.push(CurrentItem);
      }
      return cpyList;
    });
  };
  const handleSearchParamChange = (e) => {
    setSearchParam(e.target.value);
  };

  return (
    <RecipeContext.Provider
      value={{
        searchParam,
        loading,
        recipeList,
        recipeDetailsData,
        favoritesList,
        handleSubmit,
        handleGetDetails,
        handleAddToFavorite,
        handleSearchParamChange,
      }}
    >
      {children}
    </RecipeContext.Provider>
  );
};
