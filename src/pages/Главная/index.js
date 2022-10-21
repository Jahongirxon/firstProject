import { Link } from "react-router-dom";
import Layout from "../../components/Layout";
import Университет from "../../media/Университет.jpg"
import старшаяШкола from "../../media/старшаяШкола.jpg"
import младшаяШкола from "../../media/младшаяШкола.jpg"
import садик from "../../media/садик.jpg"
import ARTECHNOLOGY from "../../media/AR-TECHNOLOGY.jpg"
import IZARSTUDIO from "../../media/IZAR-STUDIO.jpg"
import Carousel from "../../components/Carousel";
import lenta from "../../media/lenta/lenta.jpg"
import mantiya from "../../media/mantiya.jpg"
import проекты from "../../media/проекты.jpg"


function Home() {

  const data = [
    {
      id: 1,
      name: "Университет",
      photo: Университет,
      description: "Создайте незабываемый выпуск с нами!"
    },
    {
      id: 2,
      name: "Cтаршая школа",
      photo: старшаяШкола,
      description: "Создадим яркие воспоминания о выпускном вместе!"
    },
    {
      id: 3,
      name: "Младшая школа",
      photo: младшаяШкола,
      description: "Поздравляем с окончанием четвёртого класса!"
    },
    {
      id: 4,
      name: "Детский сад",
      photo: садик,
      description: "Прощай садик, привет школа. С утра пора в школу!"
    },
    {
      id: 5,
      name: "AR-TECHNOLOGY",
      photo: ARTECHNOLOGY,
      description: "Создавайте оживающие воспоминание вместе с нами!"
    },
    {
      id: 6,
      name: "IZAR-STUDIO",
      photo: IZARSTUDIO,
      description: "Уютно.Комфортно.Профессионально!"
    },
    {
      id: 7,
      name: "Ленты для выпускников",
      photo: lenta,
      description: "Мы не просто печатаем ленты, мы дарим эмоции!"
    },
    {
      id: 8,
      name: "Мантии для выпускников",
      photo: mantiya,
      description: "Прокат выпускных мантий!"
    },
    {
      id: 9,
      name: "Проекты с партнёрами",
      photo: проекты,
      description: "Прокат выпускных мантий!"
    }
  ]

  return (
    <div className="bgLogo relative">
      <Layout>
        <div className=" w-full">
          <div
            className=" w-full grid grid-cols-3 gap-4 px-20 card-container my-16 z-10"
          >
            {data.map(i => {
              return (
                <div className=" relative w-full p-4 my-5 border-2 shadow-md rounded-md card">
                  <div
                    className="section-photo w-full h-auto overflow-hidden rounded-lg -mt-9 mb-2 shadow-lg flex justify-center items-center"
                  >
                    <a href={`/albom/${i.id}`}>
                      <img src={i.photo} className="photo hover:scale-125 object-cover" />
                    </a>
                  </div>
                  <div
                    className=" space-y-3 card-content"
                  >
                    <span
                      className=" cardName text-2xl font-semibold"
                    >{i.name}</span>
                    <p className="description line-clamp-1">{i.description}</p>
                    <Link
                      to={`/albom/${i.id}`}
                    >
                      <button
                        className=" cardBtn flex justify-center items-center text-white font-serif font-semibold px-6 py-2 rounded-lg shadow-lg hover:scale-105 my-3 btn"
                      >Подробно
                      </button>
                    </Link>
                  </div>
                </div>
              )
            })}
          </div>

          <Carousel />
        </div>
      </Layout>

    </div>
  );
}

export default Home;