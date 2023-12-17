
import { useState } from 'react';
import './App.css';
import Home from './components/Pages/Home';
import Footer from './layout/Footer';
import Navbar from './layout/Navbar';
import { Route, Routes } from 'react-router-dom';
import SelectedRecipe from './components/Pages/SelectedRecipe';
import MealPlan from './components/Pages/MealPlan';
import Groceries from './components/Pages/Groceries';
import Backendless from 'backendless';
import Login from './components/Pages/Login';
import Register from './components/Pages/Register';
import ProtectedRoutes from './components/ProtectedRoutes';
import MealHistory from './components/Pages/MealHistory';
import Intro from './components/Pages/Intro';


function App() {
  const [recipes, setRecipes] = useState()
  const [recipeId, setRecipeId] = useState()
  const [selectedRecipe, setSelectedRecipe] = useState()
  const [mealPlan, setMealPlan] = useState([])
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [loggedin, setLoggedin]=useState(false)
  const [ingredient, setIngredient] = useState([])
  const [category, setCategory] = useState()
  
 
  const API_KEY=process.env.REACT_APP_API_KEY
  const API_ID=process.env.REACT_APP_API_ID
  
Backendless.serverURL = "https://eu-api.backendless.com"
Backendless.initApp(API_ID , API_KEY );
  return (
    <div data-theme="cupcake" className="App flex flex-col w-screen h-screen ">

      <Navbar loggedin={loggedin} setLoggedin={setLoggedin}  />
      <div className="main flex flex-col grow ">
        <Routes>
          <Route path='/' element={<Intro/>}/>
        <Route path='/home' element={<Home setRecipes={setRecipes} recipes={recipes} recipeId={recipeId} setRecipeId={setRecipeId} mealPlan={mealPlan} category={category} setCategory={setCategory} />} />
        <Route path='/selectedrecipe' element={<SelectedRecipe recipeId={recipeId} selectedRecipe={selectedRecipe} setSelectedRecipe={setSelectedRecipe} mealPlan={mealPlan} setMealPlan={setMealPlan} ingredient={ingredient} setIngredient={setIngredient}  />} />
        <Route path='/mealPlan' element={ <ProtectedRoutes loggedin={loggedin}><MealPlan mealPlan={mealPlan} setMealPlan={setMealPlan}  /></ProtectedRoutes>}/>
        <Route path='/groceries' element={ <ProtectedRoutes loggedin={loggedin}><Groceries mealPlan={mealPlan}loggedin={loggedin}  /></ProtectedRoutes> } />
        <Route path='/mealHistory' element={ <ProtectedRoutes loggedin={loggedin}><MealHistory  /></ProtectedRoutes> } />
        <Route path='/login' element={<Login email={email} setEmail={setEmail} password={password} setPassword={setPassword} setLoggedin={setLoggedin}/>}/>
        <Route path='/register' element={<Register email={email} setEmail={setEmail} password={password} setPassword={setPassword}/>}/>

        </Routes>
      </div>

      <Footer/>

      
    
      
    </div>
  );
}

export default App;
