import React, { useEffect, useState } from 'react';
import { ICocktail } from '../../types/interfaces';
import { useParams } from 'react-router-dom';
import './CocktailDetails.css';

function CocktailDetails() {
  const { id } = useParams<{ id: string }>();
  const [cocktail, setCocktail] = useState<ICocktail | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchCocktail = async () => {
      try {
        const response = await fetch(`https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`);
        if (!response.ok) {
          throw new Error('Not found');
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

    fetchCocktail();
  }, [id]);

  if (loading || error) {
    return <div>Loading...</div>;
  }

  if (!cocktail) {
    return null;
  }

  const ingredients = [];
  for (let i = 1; i <= 15; i++) {
    const ingredient = cocktail[`strIngredient${i}`];
    const measure = cocktail[`strMeasure${i}`];
    if (ingredient) {
      ingredients.push({ ingredient, measure });
    }
  }

  return (
    <div className="cocktail-details-container">
      <h1 className='cocktail-details-container__title'>{cocktail.strDrink}</h1>
      <div className='cocktail-details-block'>
        <div className='cocktail-details-image-block'>
          <img className='cocktail-details-image-block__image' src={cocktail.strDrinkThumb} alt={cocktail.strDrink} />
        </div>
        <div className='ingredients-container'>
          <h3 className='ingredients-container__title'>Ingredients</h3>
          <ul className='ingredients-list'>
            {ingredients.map((item, index) => (
              <li className='ingredients-list__item' key={index}>
                {item.measure} {item.ingredient}
              </li>
            ))}
          </ul>
          <h3 className='ingredients-container__title'>Instruction</h3>
          <p className='ingredients-container__instruction'>{cocktail.strInstructions}</p>
        </div>
      </div>
    </div>
  );
}

export default CocktailDetails;