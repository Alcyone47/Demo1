import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from "./pages/Home";
import SignUp from './pages/SignUp';
import SignIn from './pages/SignIn';
import Events from './pages/Events';
import Organisers from './pages/Organisers';
import Categories from './pages/Categories';

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signup" element={<SignUp/>}/>
          <Route path="/signin" element={<SignIn/>}/>
          <Route path="/events" element={<Events/>}></Route>
          <Route path="/organisers" element={<Organisers/>}></Route>
          <Route path="/categories" element={<Categories/>}></Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
