import RecipeList from "./components/RecipeList";
import AddRecipeForm from "./components/AddRecipeForm";
import RecipeDetails from "./components/RecipeDetails";
import DeleteRecipeButton from "./components/DeleteRecipeButton";
import EditRecipeForm from "./components/EditRecipeForm";
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return(
    <>

<BrowserRouter>
      <Routes>
        <Route path="/" element= {<RecipeList />} />
        <Route path="/recipes/:recipeId" element = {<RecipeDetails />} />
        <Route path = "AddRecipeForm" element = {<AddRecipeForm />} />
        <Route path = "RecipeDetails" element = {<RecipeDetails />} />
        <Route path = "DeleteRecipeButton" element = {<DeleteRecipeButton />} />
        <Route path = "EditRecipeForm" element = {<EditRecipeForm />} />
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App
