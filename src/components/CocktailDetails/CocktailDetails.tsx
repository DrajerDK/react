// import React, { useEffect, useState } from 'react';
// import { useParams } from 'react-router-dom';
// import './CocktailDetails.css';

// interface CocktailDetails {
//   idDrink: string;
//   strDrink: string;
//   strDrinkThumb: string;
//   strIngredient1: string | null;
//   strIngredient2: string | null;
//   strIngredient3: string | null;
//   strIngredient4: string | null;
//   strIngredient5: string | null;
//   strIngredient6: string | null;
//   strIngredient7: string | null;
//   strIngredient8: string | null;
//   strIngredient9: string | null;
//   strIngredient10: string | null;
//   strIngredient11: string | null;
//   strIngredient12: string | null;
//   strIngredient13: string | null;
//   strIngredient14: string | null;
//   strIngredient15: string | null;
// }

// function CocktailDetails() {
//   const { id } = useParams<{ id: string }>();
//   const [cocktail, setCocktail] = useState<CocktailDetails | null>(null);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState<string | null>(null);

//   useEffect(() => {
//     const fetchCocktailDetails = async () => {
//       try {
//         const response = await fetch(`https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`);
//         if (!response.ok) {
//           throw new Error('Network response was not ok');
//         }
//         const data = await response.json();
//         setCocktail(data.drinks[0]);
//       } catch (err: unknown) {
//         if (err instanceof Error) {
//           setError(err.message);
//         } else {
//           setError('Unknown error');
//         }
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchCocktailDetails();
//   }, [id]);

//   if (loading) {
//     return <div>Loading...</div>;
//   }

//   if (error) {
//     return <div>Error: {error}</div>;
//   }

//   if (!cocktail) {
//     return <div>No cocktail found</div>;
//   }

//   return (
//     <div className="cocktail-details">
//       <h2>{cocktail.strDrink}</h2>
//       <img src={cocktail.strDrinkThumb} alt={cocktail.strDrink} />
//       <ul>
//         {Array.from({ length: 15 }, (_, i) => cocktail[`strIngredient${i + 1}` as keyof CocktailDetails])
//           .filter(Boolean)
//           .map((ingredient, index) => (
//             <li key={index}>{ingredient}</li>
//           ))}
//       </ul>
//     </div>
//   );
// }

// export default CocktailDetails;
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import './CocktailDetails.css';

interface CocktailDetails {
  idDrink: string;
  strDrink: string;
  strDrinkThumb: string;
  strInstructions: string;
  [key: string]: any;
}

function CocktailDetails() {
  const { id } = useParams<{ id: string }>();
  const [cocktail, setCocktail] = useState<CocktailDetails | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchCocktail = async () => {
      try {
        const response = await fetch(`https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`);
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

    fetchCocktail();
  }, [id]);

  // Если данные еще загружаются или произошла ошибка, ничего не отображаем
  if (loading || error) {
    return null;
  }

  if (!cocktail) {
    return null; // Ничего не отображаем, если коктейль не найден
  }

  const ingredients = Object.keys(cocktail)
    .filter(key => key.startsWith('strIngredient') && cocktail[key])
    .map(key => cocktail[key]);

  return (
    <div className="cocktail-details">
      <h1>{cocktail.strDrink}</h1>
      <img src={cocktail.strDrinkThumb} alt={cocktail.strDrink} />
      <p>{cocktail.strInstructions}</p>
      <h3>Ingredients</h3>
      <ul>
        {ingredients.map((ingredient, index) => (
          <li key={index}>{ingredient}</li>
        ))}
      </ul>
    </div>
  );
}

export default CocktailDetails;


