import './App.css';
import Header from './components/Header/Header';
// import Blog from './components/Blog/Blog';
import Footer from './components/Footer/Footer';
import MainPage from './components/MainPage/MainPage';
// import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Context from './Context/Context';
import { ThemeContext } from './providers/ThemeContext';
import Cocktails from './components/Cocktails/Cocktails';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import Cocktails from './Cocktails';
import CocktailDetails from './components/CocktailDetails/CocktailDetails';
import RandomCocktail from './components/RandomCocktail/RandomCocktail';

function App() {
  return (
  <>
    <ThemeContext>
      <Router>
        <Header></Header>
          <Routes>
            <Route path="/" element={<MainPage />} />
            <Route path="/cocktail/:id" element={<CocktailDetails />} />
            <Route path="/random" element={<RandomCocktail></RandomCocktail>} />
          </Routes>
      </Router>
      <Footer></Footer>
    </ThemeContext>

  </>
  );
}

export default App;


