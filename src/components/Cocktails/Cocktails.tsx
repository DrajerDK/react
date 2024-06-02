import React, { useEffect, useState } from 'react';
import Title from '../Title/Title';
import './Cocktails.css';

// Определяем интерфейс для коктейля
interface Cocktail {
  idDrink: string;
  strDrink: string;
  strDrinkThumb: string;
}

function Cocktails() {
  const [cocktails, setCocktails] = useState<Cocktail[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

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

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div>
      <Title textOfTitle='Cocktails'></Title>
      <div className="cocktails-container">
        {cocktails.map(cocktail => (
          <div key={cocktail.idDrink} className="cocktail-item">
            <img src={cocktail.strDrinkThumb} alt={cocktail.strDrink} />
            <p>{cocktail.strDrink}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Cocktails;
