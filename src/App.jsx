import Navbar from "./components/Navbar";
// import { Outlet } from "react-router-dom";
import useRecipe from "./context/Recipe/useRecipe";
function App() {
  return (
    <div className="   min-h-svh bg-indigo-50">
      <Navbar />
      <div className=" pt-20">{/* <Outlet /> */}</div>
    </div>
  );
}

export default App;
