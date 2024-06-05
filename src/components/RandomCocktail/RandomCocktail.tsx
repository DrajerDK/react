import React, { useEffect, useState } from 'react';
import { ICocktail } from '../../types/interfaces';

import './RandomCocktail.css';
import Button from '../Button/Button';

const getIngredients = (cocktail: ICocktail) => {
  const ingredients = [];
  for (let i = 1; i <= 15; i++) {
    const ingredient = cocktail[`strIngredient${i}`];
    const measure = cocktail[`strMeasure${i}`];
    if (ingredient) {
      ingredients.push({ ingredient, measure });
    }
  }
  return ingredients;
};

const RandomCocktail: React.FC = () => {
  const [cocktail, setCocktail] = useState<ICocktail | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const fetchRandomCocktail = async () => {
    try {
      const response = await fetch('https://www.thecocktaildb.com/api/json/v1/1/random.php');
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const data = await response.json();
      setCocktail(data.drinks[0]);
    } catch (err: unknown) {
      if (err instanceof Error) {
        setError(err.message);
      } else {
        setError('Unknown error');
      }
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchRandomCocktail();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  if (!cocktail) {
    return null;
  }

  const ingredients = getIngredients(cocktail);

  return (
    <div className="random-cocktail-container">
        <h1 className='random-cocktail-container__title'>{cocktail.strDrink}</h1>
        <div className='random-cocktail-block'>
            <div className='random-cocktail-image-block'>
                <img className='random-cocktail-image-block__image' src={cocktail.strDrinkThumb} alt={cocktail.strDrink} />
            </div>
            <div className='ingredients-container'>
                <h2 className='ingredients-container__title'>Ingredients</h2>
                <ul className='ingredients-list'>
                    {ingredients.map((item, index) => (
                        <li className='ingredients-list__item' key={index}>
                            {item.measure} {item.ingredient}
                        </li>
                    ))}
                </ul>
                <h2 className='ingredients-container__title'>Instruction</h2>
                <p className='ingredients-container__instruction'>{cocktail.strInstructions}</p>
            </div>
        </div>
        <Button clickFunction={fetchRandomCocktail} text='Another cocktail'></Button>
        {/* <button className='random-cocktail-container__another-cocktail' onClick={fetchRandomCocktail}>Another cocktail</button> */}
    </div>
  );
};

export default RandomCocktail;
