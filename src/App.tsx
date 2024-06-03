import './App.css';
import Button from './components/Button/Button';
import Tabs from './components/Tabs/Tabs';
import Title from './components/Title/Title';
import Input from './components/Input/Input';
import SingUpForm from './components/SingUpForm/SingUpForm';
import Header from './components/Header/Header';
import Blog from './components/Blog/Blog';
import CardMain from './components/CardMain/CardMain';
import Footer from './components/Footer/Footer';
import SingInForm from './components/SingInForm/SingInForm';
import MainPage from './pages/MainPage';
// import { BrowserRouter, Route, Routes } from 'react-router-dom';
import AddPost from './components/AddPost/AddPost';
import Context from './Context/Context';
import { ThemeContext } from './providers/ThemeContext';
import Cocktails from './components/Cocktails/Cocktails';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import Cocktails from './Cocktails';
import CocktailDetails from './components/CocktailDetails/CocktailDetails';

function App() {
  function buttonClickOne(): void {
    alert("AAAAA");
}

function buttonClickTwo(): void {
    alert("OOOO");
}
  return (
  <>
    <ThemeContext>
    {/* <Context></Context> */}
    {/* <Title textOfTitle="Sign Up"></Title>
    <Tabs tabNameOne="All" tabNameTwoo='My favorites' tabNameThree='Popular'></Tabs>
    <Input inputName='Title' inputType='text' inputPlaceholder='Your email'></Input>
    <Input inputName='Title' inputType='text' inputPlaceholder='Your email'></Input>
    <Input inputName='Title' inputType='password' inputPlaceholder="Your password"></Input> */}
    <Header></Header>
    {/* <Blog></Blog>
    <SingUpForm></SingUpForm> 
    <SingInForm></SingInForm> */}
    <Router>
      <Routes>
        <Route path="/" element={<Blog />} />
        <Route path="/cocktail/:id" element={<CocktailDetails />} />
      </Routes>
    </Router>
    {/* <BrowserRouter> */}
      {/* <Routes> */}
        {/* <Route path='/' element={<MainPage></MainPage>}></Route> */}
        {/* <Route path='/posts' element={<PostsPage></PostsPage>}></Route>
        <Route path='/posts/:id' element={<Post></Post>}></Route> */}
        {/* <Route path='/add-post' element={<AddPost></AddPost>}> */}
          {/* <Route path='/contact/address' element={<Address></Address>}></Route>
        </Route> */}
        {/* <Route path='*' element={<ErrorPage></ErrorPage>}> */}

        {/* </Route>
      </Routes> */}
    {/* </BrowserRouter> */}
    {/* <AddPost></AddPost> */}
    <Footer></Footer>

    </ThemeContext>

  </>
  );
}

export default App;
