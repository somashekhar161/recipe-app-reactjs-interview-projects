import React from "react";
import { NavLink } from "react-router-dom";
import useRecipe from "../context/Recipe/useRecipe";

const Navbar = () => {
  const { loading, searchParam, handleSubmit, handleSearchParamChange } =
    useRecipe();
  return (
    <header className="  fixed w-full">
      <nav className=" flex flex-col  items-center justify-between gap-4 bg-gray-50 p-4 shadow md:flex-row">
        <NavLink
          to={"/"}
          className=" ml-2 text-2xl font-semibold text-gray-600"
        >
          Food Recipe
        </NavLink>
        <div>
          <form
            onSubmit={handleSubmit}
            className=" flex  flex-col items-center justify-center gap-2 md:flex-row"
          >
            <input
              placeholder="Enter Items"
              value={searchParam}
              required
              onChange={handleSearchParamChange}
              className="  w-96 rounded-3xl border-2 border-gray-500   p-2 px-4 text-xl"
            ></input>
            <button
              id="submit"
              type="submit"
              className=" w-fit  rounded-3xl bg-purple-800  p-2  px-4 font-medium uppercase text-white shadow shadow-black transition-all active:shadow-inner"
            >
              submit
            </button>
          </form>
        </div>
        <ul className=" flex items-center gap-4 text-xl ">
          <li>
            <NavLink
              to={"/"}
              className={({ isActive, isPending, isTransitioning }) =>
                [
                  isPending ? "pending" : "",
                  isActive ? "text-purple-500" : "",
                  isTransitioning ? "transitioning" : "",
                  "hover:underline",
                ].join(" ")
              }
            >
              Home
            </NavLink>
          </li>

          <li>
            <NavLink
              to={"/Favorites"}
              className={({ isActive, isPending, isTransitioning }) =>
                [
                  isPending ? "pending" : "",
                  isActive ? "text-purple-500" : "",
                  isTransitioning ? "transitioning" : "",
                  "hover:underline",
                ].join(" ")
              }
            >
              Favorites
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
