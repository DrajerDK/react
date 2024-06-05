import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Title from '../Title/Title';
import './Cocktails.css';

interface Cocktail {
  idDrink: string;
  strDrink: string;
  strDrinkThumb: string;
}

function Cocktails() {
  const [cocktails, setCocktails] = useState<Cocktail[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchCocktails = async () => {
      try {
        const response = await fetch('https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=Cocktail');
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        setCocktails(data.drinks);
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

    fetchCocktails();
  }, []);

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <>
      <Title textOfTitle='Cocktails'></Title>
      <div className="cocktails-container">
        {cocktails.map(cocktail => (
          <div key={cocktail.idDrink} className="cocktail-item" onClick={() => navigate(`/cocktail/${cocktail.idDrink}`)}>
            <img className='cocktail-item__image' src={cocktail.strDrinkThumb} alt={cocktail.strDrink} />
            <p className='cocktail-item__name'>{cocktail.strDrink}</p>
          </div>
        ))}
      </div>
    </>
  );
}

export default Cocktails;