import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from "./pages/Home";
import SignUp from './pages/SignUp';
import SignIn from './pages/SignIn';
import Events from './pages/Events';

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signup" element={<SignUp/>}/>
          <Route path="/signin" element={<SignIn/>}/>
          <Route path="/events" element={<Events/>}></Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
