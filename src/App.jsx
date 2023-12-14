
import { useState } from 'react';
import './App.css';
import Home from './components/Pages/Home';
import Footer from './layout/Footer';
import Navbar from './layout/Navbar';
import { Route, Routes } from 'react-router-dom';
import SelectedRecipe from './components/Pages/SelectedRecipe';
import MealPlan from './components/Pages/MealPlan';
import Groceries from './components/Pages/Groceries';


function App() {
  const [recipes, setRecipes] = useState()
  const [recipeId, setRecipeId] = useState()
  const [selectedRecipe, setSelectedRecipe] = useState()
  const [mealPlan, setMealPlan] = useState([])
  const [ingredient, setIngredient] = useState([])

  return (
    <div data-theme="cupcake" className="App flex flex-col w-screen h-screen ">

      <Navbar/>
      <div className="main flex flex-col grow ">
        <Routes>
        <Route path='/' element={<Home setRecipes={setRecipes} recipes={recipes} recipeId={recipeId} setRecipeId={setRecipeId} mealPlan={mealPlan} />} />
        <Route path='/selectedrecipe' element={<SelectedRecipe recipeId={recipeId} selectedRecipe={selectedRecipe} setSelectedRecipe={setSelectedRecipe} mealPlan={mealPlan} setMealPlan={setMealPlan} />} />
        <Route path='/mealPlan' element={<MealPlan mealPlan={mealPlan} setMealPlan={setMealPlan} setIngredient={setIngredient}/>}/>
        <Route path='/groceries' element={<Groceries mealPlan={mealPlan} ingredient={ingredient} setIngredient={setIngredient} />} />
        
        </Routes>
      </div>

      <Footer/>

      
    
      
    </div>
  );
}

export default App;
