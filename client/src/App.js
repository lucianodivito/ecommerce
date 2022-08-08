import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Container } from "@mui/material";
import NavBar from './components/NavBar';
import MainPage from './pages/mainPage';
import Cart from './pages/Cart';

export default function App() {
  return (
    <BrowserRouter>
    <NavBar/>
    <br/><br/><br/><br/>
      <Container>
        <Routes>
          <Route path="/" element={<MainPage/>} />
          <Route path="/cart" element={<Cart/>} />
        </Routes>
      </Container>
    </BrowserRouter>
  );
}

