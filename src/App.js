import React, {useEffect, useState, Component } from 'react';
import Recipe from './Recipe.js';
import './App.css';
import {HashRouter as Router,Switch,Route,Link} from 'react-router-dom';


const App = () => {

  const APP_ID = '708d4f45';
  const APP_KEY = 'dd19d4443bd1d569d26d4ee59883d66c';
  // const [counter,setCounter] = useState(0);
  const [recipes, setRecipes] = useState([]);
  const [search, setSearch] = useState('');
  const [query, setQuery] = useState('chicken');

  
  useEffect(  () => {
    getRecipes();
  }, [query]);

  const getRecipes = async () =>{
    const response = await fetch(`https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`);
    const data = await response.json();
    console.log(data.hits);
    setRecipes(data.hits);
  }

  const updateSearch = e => {
    setSearch(e.target.value);
    // console.log(search);
  }

  const getSearch = e =>{
    e.preventDefault();
    setQuery(search);
    setSearch('');
  }

  return (
    <div className="App">
      <h1 className='webTitle'>Recipes Finder</h1>
      <form onSubmit={getSearch} className='search-form'>
        <input className='search-bar' type='text' value={search} onChange={updateSearch} placeholder='What would you like to eat today?'/>
        <button className='search-button' type='submit'>
         SEARCH
          </button>
      </form>
      <div className='recipes'>
      {recipes.map(recipe =>(
        <Recipe key={recipe.recipe.label}
                title={recipe.recipe.label} 
                calories={recipe.recipe.calories} 
                image={recipe.recipe.image}
                ingredients={recipe.recipe.ingredients}
                />
      ))}
      </div>

      {/* <h1 onClick={()=> setCounter(counter+1)}>{counter}</h1> */}
      
    </div>
  );

};

export default App;
