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
import Выпускные from "./pages/Проекты"
import НовинкиСезона from "./pages/НовинкиСезона"





function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/rabotiy" element={<Work />} ></Route>
          <Route path="/ONas" element={<About />} ></Route>
          <Route path="/universitet" element={<Университет />} ></Route>
          <Route path="/starshayaShkola" element={<CтаршаяШкола />} ></Route>
          <Route path="/mladshayaShkola" element={<МладшаяШкола />} ></Route>
          <Route path="/sadik" element={<Садик />} ></Route>
          <Route path="/artechnology" element={<ARTECHNOLOGY />} ></Route>
          <Route path="/izarStudio" element={<IZARSTUDIO />} ></Route>
          <Route path="/lenta" element={<Lenta />} ></Route>
          <Route path="/mantiya" element={<Mantiya />} ></Route>
          <Route path="/vipuskniy" element={<Выпускные />} ></Route>
          <Route path="/otzivi" element={<Отзывы />} ></Route>
          <Route path="/novinkiSezona" element={<НовинкиСезона />} ></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
