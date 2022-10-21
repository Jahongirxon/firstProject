import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Home from "./pages/Главная";
import Work from "./pages/Как мы работаем";
import About from "./pages/О нас";
import './App.css'
import Университет from "./pages/Университет";
import CтаршаяШкола from "./pages/CтаршаяШкола";
import МладшаяШкола from "./pages/МладшаяШкола";
import Садик from "./pages/Садик";
import ARTECHNOLOGY from "./pages/ARTECHNOLOGY";
import IZARSTUDIO from "./pages/IZARSTUDIO";
import Отзывы from "./pages/Отзывы";
import Lenta from "./pages/Lenta";
import Mantiya from "./pages/Mantiya";
import Выпускные from "./pages/Выпускные"
import НовинкиСезона from "./pages/НовинкиСезона"





function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/work" element={<Work />} ></Route>
          <Route path="/about" element={<About />} ></Route>
          <Route path="/albom/1" element={<Университет />} ></Route>
          <Route path="/albom/2" element={<CтаршаяШкола />} ></Route>
          <Route path="/albom/3" element={<МладшаяШкола />} ></Route>
          <Route path="/albom/4" element={<Садик />} ></Route>
          <Route path="/albom/5" element={<ARTECHNOLOGY />} ></Route>
          <Route path="/albom/6" element={<IZARSTUDIO />} ></Route>
          <Route path="/albom/7" element={<Lenta />} ></Route>
          <Route path="/albom/8" element={<Mantiya />} ></Route>
          <Route path="/albom/9" element={<Выпускные />} ></Route>
          <Route path="/rewiews" element={<Отзывы />} ></Route>
          <Route path="/new" element={<НовинкиСезона />} ></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
