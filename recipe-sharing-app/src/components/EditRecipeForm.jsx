// EditRecipeForm.js
import { useRecipeStore } from './recipeStore';

const EditRecipeForm = ({ recipe }) => {
  const [title, setTitle] = React.useState(recipe.title);
  const [description, setDescription] = React.useState(recipe.description);
  const updateRecipe = useRecipeStore((state) => state.updateRecipe);

  const handleSubmit = (e) => {
    event.preventDefault();
    updateRecipe(recipe.id, { title, description });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <textarea
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <button type="submit">Update Recipe</button>
    </form>
  );
};

export default EditRecipeForm;
