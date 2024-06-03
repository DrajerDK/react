// import React, { useEffect, useState } from 'react';
// import Title from '../Title/Title';
// import './Cocktails.css';

// // Определяем интерфейс для коктейля
// interface Cocktail {
//   idDrink: string;
//   strDrink: string;
//   strDrinkThumb: string;
// }

// function Cocktails() {
//   const [cocktails, setCocktails] = useState<Cocktail[]>([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState<string | null>(null);

//   useEffect(() => {
//     const fetchCocktails = async () => {
//       try {
//         const response = await fetch('https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=Cocktail');
//         if (!response.ok) {
//           throw new Error('Network response was not ok');
//         }
//         const data = await response.json();
//         setCocktails(data.drinks);
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

//     fetchCocktails();
//   }, []);

//   if (loading) {
//     return <div>Loading...</div>;
//   }

//   if (error) {
//     return <div>Error: {error}</div>;
//   }

//   return (
//     <div>
//       <Title textOfTitle='Cocktails'></Title>
//       <div className="cocktails-container">
//         {cocktails.map(cocktail => (
//           <div key={cocktail.idDrink} className="cocktail-item">
//             <img src={cocktail.strDrinkThumb} alt={cocktail.strDrink} />
//             <p>{cocktail.strDrink}</p>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }

// export default Cocktails;


// import React, { useEffect, useState } from 'react';
// import './Cocktails.css';

// // Определяем интерфейс для коктейля
// interface Cocktail {
//   idDrink: string;
//   strDrink: string;
//   strDrinkThumb: string;
// }

// interface CocktailDetails extends Cocktail {
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

// function Cocktails() {
//   const [cocktails, setCocktails] = useState<Cocktail[]>([]);
//   const [selectedCocktail, setSelectedCocktail] = useState<CocktailDetails | null>(null);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState<string | null>(null);

//   useEffect(() => {
//     const fetchCocktails = async () => {
//       try {
//         const response = await fetch('https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=Cocktail');
//         if (!response.ok) {
//           throw new Error('Network response was not ok');
//         }
//         const data = await response.json();
//         setCocktails(data.drinks);
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

//     fetchCocktails();
//   }, []);

//   const fetchCocktailDetails = async (id: string) => {
//     try {
//       const response = await fetch(`https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`);
//       if (!response.ok) {
//         throw new Error('Network response was not ok');
//       }
//       const data = await response.json();
//       setSelectedCocktail(data.drinks[0]);
//     } catch (err: unknown) {
//       if (err instanceof Error) {
//         setError(err.message);
//       } else {
//         setError('Unknown error');
//       }
//     }
//   };

//   if (loading) {
//     return <div>Loading...</div>;
//   }

//   if (error) {
//     return <div>Error: {error}</div>;
//   }

//   return (
//     <div>
//       <h1>Cocktails</h1>
//       <div className="cocktails-container">
//         {cocktails.map(cocktail => (
//           <div key={cocktail.idDrink} className="cocktail-item" onClick={() => fetchCocktailDetails(cocktail.idDrink)}>
//             <img src={cocktail.strDrinkThumb} alt={cocktail.strDrink} />
//             <p>{cocktail.strDrink}</p>
//           </div>
//         ))}
//       </div>
//       {selectedCocktail && (
//         <div className="cocktail-details">
//           <h2>{selectedCocktail.strDrink}</h2>
//           <img src={selectedCocktail.strDrinkThumb} alt={selectedCocktail.strDrink} />
//           <ul>
//             {Array.from({ length: 15 }, (_, i) => selectedCocktail[`strIngredient${i + 1}` as keyof CocktailDetails])
//               .filter(Boolean)
//               .map((ingredient, index) => (
//                 <li key={index}>{ingredient}</li>
//               ))}
//           </ul>
//         </div>
//       )}
//     </div>
//   );
// }

// export default Cocktails;


import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
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
    <div>
      <h1>Cocktails</h1>
      <div className="cocktails-container">
        {cocktails.map(cocktail => (
          <div key={cocktail.idDrink} className="cocktail-item" onClick={() => navigate(`/cocktail/${cocktail.idDrink}`)}>
            <img src={cocktail.strDrinkThumb} alt={cocktail.strDrink} />
            <p>{cocktail.strDrink}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Cocktails;
