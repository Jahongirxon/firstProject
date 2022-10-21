import Layout from "../../components/Layout";
import firstMlImg from "../../media/schoolAlbom/mladshiy6.jpg"
import secondMlImg from "../../media/schoolAlbom/mladshiy2.jpg"
import thirdMlImg from "../../media/schoolAlbom/mladshiy8.jpg"
import fourthMlImg from "../../media/schoolAlbom/mladshiy9.jpg"
import fivethMlImg from "../../media/schoolAlbom/mladshiy7.jpg"
import Mladshiycard from "../../components/mladshiyCard";

function МладшаяШкола() {
  return (
    <Layout>
      <div className=" max-w-full bgLogo">
        <div className=" w-full">
          <div className="firstMlImg">
            <div className="bgColor">
              <div className="text -translate-y-40 text-center p-20 mt-20" >
                <span className="text-center text-zinc-300">
                  Прощание с начальной школой и переход в старшие классы достаточно важный этап в жизни каждого ученика. Мы предлагаем сохранить память об одноклассниках в одном альбоме. Фотоальбомы  выпускника для 1-4 класса представлены в различном ценовом диапазоне и множестве дизайнов. Каждый сможет найти то, что подходит именно ему. Наши фотографы сделают яркие, живые и эмоциональные фотографии и мы поместим их в альбом, который будет радовать вас всю жизнь. Ниже представлены выпускные альбомы 1-4 класс, которые Вы можете пролистать и заказать у нас.
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className=" py-20 space-y-5 desktop-univer">

          <div className=" relative secondSection w-full px-20 flex justify-center items-center -translate-x-30">
            <div className=" secondBgImg overflow-hidden w-[700px] h-[675px] rounded-l-md">
              <img src={firstMlImg} className="firstMlImg1 object-center object-cover scale-110 translate-y-3" />
            </div>
            <div className="text p-10  bg-black opacity-40 text-white w-[700px] h-[675px] rounded-r-md">
              <div className=" grid grid-cols-1">
                <div className=" text-left grid grid-cols-1 w-full justify-items-start text-2xl space-y-5">
                  <span>Описание: Хард Ковер Кидс А4</span>
                  <span>Страницы: 6</span>
                  <span>Обложка: Софт-тач твёрдый пр.</span>
                  <span>С индивидуальным портретом</span>
                  <span>Блок: Лабораторная печать из пластиков</span>
                  <span>Фотосессия: 2 часа в школе</span>
                  <span>Срок: От 30 до 60 рабочих дней</span>
                </div>
              </div>
            </div>
            <div className=" w-full absolute bottom-5 flex justify-center items-center">
              <a href="https://t.me/Vinetkiuz1">
                <button className="BtnL -translate-x-80 bg-white flex justify-center items-center text-black font-serif font-semibold px-6 py-2 rounded-lg shadow-lg hover:scale-105 my-3">Заказать альбом</button>
              </a>
            </div>
          </div>

          <div className=" relative secondSection w-full px-20 flex justify-center items-center -translate-x-30">
            <div className="text p-10  bg-black opacity-40 text-white w-[700px] h-[675px] rounded-l-md">
              <div className=" grid grid-cols-1">
                <div className=" text-left grid grid-cols-1 w-full justify-items-start text-2xl space-y-5">
                  <span>Описание: Хард Ковер Классик А4</span>
                  <span>Страницы: 6</span>
                  <span>Обложка: Софт-тач твёрдый пр.</span>
                  <span>Блок: Лабораторная печать из пластиков</span>
                  <span>Фотосессия: 2 часа в школе</span>
                  <span>Срок: От 30 до 60 рабочих дней</span>
                </div>
              </div>
            </div>
            <div className=" secondBgImg overflow-hidden w-[700px] h-[675px] rounded-r-md ">
              <img src={secondMlImg} className="secondMlImg object-center object-cover scale-125 translate-y-5" />
            </div>
            <div className=" w-full absolute bottom-5 flex justify-center items-center">
              <a href="https://t.me/Vinetkiuz1">
                <button className="BtnR translate-x-80 bg-white flex justify-center items-center text-black font-serif font-semibold px-6 py-2 rounded-lg shadow-lg hover:scale-105 my-3">Заказать альбом</button>
              </a>
            </div>
          </div>

          <div className=" relative secondSection w-full px-20 flex justify-center items-center -translate-x-30">
            <div className=" secondBgImg overflow-hidden w-[700px] rounded-l-md h-[675px] ">
              <img src={thirdMlImg} className="thirdMlImg object3 object-cover translate-y-0" />
            </div>
            <div className="text p-10  bg-black opacity-40 text-white rounded-r-md w-[700px] h-[675px]">
              <div className=" grid grid-cols-1">
                <div className=" text-left grid grid-cols-1 w-full justify-items-start text-2xl space-y-5">
                  <span>Описание: Хард Ковер Классик А4</span>
                  <span>Страницы: 6</span>
                  <span>Обложка: Софт-тач твёрдый пр.</span>
                  <span>Блок: Лабораторная печать из пластиков</span>
                  <span>Фотосессия: 2 часа в школе</span>
                  <span>Срок: От 30 до 60 рабочих дней</span>
                </div>
              </div>
            </div>
            <div className=" w-full absolute bottom-5 flex justify-center items-center">
              <a href="https://t.me/Vinetkiuz1">
                <button className="BtnL -translate-x-80 bg-white flex justify-center items-center text-black font-serif font-semibold px-6 py-2 rounded-lg shadow-lg hover:scale-105 my-3">Заказать альбом</button>
              </a>
            </div>
          </div>

          <div className=" relative secondSection w-full px-20 flex justify-center items-center -translate-x-30">
            <div className="text p-10  bg-black opacity-40 text-white w-[700px] h-[675px] rounded-l-md">
              <div className=" grid grid-cols-1">
                <div className=" text-left grid grid-cols-1 w-full justify-items-start text-2xl space-y-5">
                  <span>Описание: Хард Ковер Классик А4</span>
                  <span>Страницы: 6</span>
                  <span>Обложка: Софт-тач твёрдый пр.</span>
                  <span>Блок: Лабораторная печать из пластиков</span>
                  <span>Фотосессия: 2 часа в школе</span>
                  <span>Срок: От 30 до 60 рабочих дней</span>
                </div>
              </div>
            </div>
            <div className=" secondBgImg overflow-hidden w-[700px] h-[675px] rounded-r-md">
              <img src={fourthMlImg} className="fourthMlImg object-center object-cover scale-125 translate-y-5" />
            </div>
            <div className=" w-full absolute bottom-5 flex justify-center items-center">
              <a href="https://t.me/Vinetkiuz1">
                <button className="BtnR translate-x-80 bg-white flex justify-center items-center text-black font-serif font-semibold px-6 py-2 rounded-lg shadow-lg hover:scale-105 my-3">Заказать альбом</button>
              </a>
            </div>
          </div>

          <div className=" relative secondSection w-full px-20 flex justify-center items-center -translate-x-30">
            <div className=" secondBgImg overflow-hidden w-[700px] h-[675px] rounded-l-md">
              <img src={fivethMlImg} className="fivethMlImg object5 object-cover scale-110 translate-y-5" />
            </div>
            <div className="text p-10  bg-black opacity-40 text-white w-[700px] h-[675px] rounded-r-md">
              <div className=" grid grid-cols-1">
                <div className=" text-left grid grid-cols-1 w-full justify-items-start text-2xl space-y-5">
                  <span>Описание: Лайт А4</span>
                  <span>Страницы: 6</span>
                  <span>Обложка: Фото обложка без Т-пр.</span>
                  <span>Блок: Лабораторная печать из пластиков</span>
                  <span>Фотосессия: 2 часа в школе</span>
                  <span>Срок: От 30 до 60 рабочих дней</span>
                </div>
              </div>
            </div>
            <div className=" w-full absolute bottom-5 flex justify-center items-center">
              <a href="https://t.me/Vinetkiuz1">
                <button className="BtnL -translate-x-80 bg-white flex justify-center items-center text-black font-serif font-semibold px-6 py-2 rounded-lg shadow-lg hover:scale-105 my-3">Заказать альбом</button>
              </a>
            </div>
          </div>
        </div>

        {/* Mobile */}
        <section className=" w-[390px] p-5 m-0 mobile-univer">
          <div className=" w-full space-y-5  grid grid-cols-1 justify-items-center">
            <div className=" albom-univer mx-auto my-0 secondSection w-full  flex justify-center items-center">
              <div className=" secondBgImg overflow-hidden rounded-t-md">
                <img src={firstMlImg} className="firstMlImg1 object-center object-cover scale-110 -translate-y-3" />
              </div>
              <div className="univerFText  text p-10 bg-black opacity-40 text-white w-[700px] h-[675px] rounded-b-md grid grid-cols-1 justify-items-center">
                <div className=" grid grid-cols-1">
                  <div className=" text-left grid grid-cols-1 w-full justify-items-start">
                    <span>Описание: Хард Ковер Кидс А4</span>
                    <span>Страницы: 6</span>
                    <span>Обложка: Софт-тач твёрдый пр.</span>
                    <span>С индивидуальным портретом</span>
                    <span>Блок: Лабораторная печать из пластиков</span>
                    <span>Фотосессия: 2 часа в школе</span>
                    <span>Срок: От 30 до 60 рабочих дней</span>
                  </div>
                </div>
                <div className=" w-full my-7 flex justify-center items-center">
                  <a href="https://t.me/Vinetkiuz1">
                    <button className="  bg-white flex justify-center items-center text-black font-serif px-6 py-2 rounded-lg shadow-lg">Заказать альбом</button>
                  </a>
                </div>
              </div>

            </div>

            <div className="albom-univer secondSection w-full  flex justify-center items-center">
              <div className=" secondBgImg overflow-hidden rounded-t-md">
                <img src={secondMlImg} className="secondMlImg object-center object-cover scale-110 -translate-y-3" />
              </div>
              <div className="univerFText  text p-10 bg-black opacity-40 text-white  rounded-b-md grid grid-cols-1 justify-items-center">
                <div className=" grid grid-cols-1">
                  <div className=" text-left grid grid-cols-1 w-full justify-items-start">
                    <span>Описание: Хард Ковер Классик А4</span>
                    <span>Страницы: 6</span>
                    <span>Обложка: Софт-тач твёрдый пр.</span>
                    <span>Блок: Лабораторная печать из пластиков</span>
                    <span>Фотосессия: 2 часа в школе</span>
                    <span>Срок: От 30 до 60 рабочих дней</span>
                  </div>
                </div>
                <div className=" w-full my-7 flex justify-center items-center">
                  <a href="https://t.me/Vinetkiuz1">
                    <button className="  bg-white flex justify-center items-center text-black font-serif px-6 py-2 rounded-lg shadow-lg">Заказать альбом</button>
                  </a>
                </div>
              </div>
            </div>

            <div className=" albom-univer secondSection w-full  flex justify-center items-center">
              <div className=" secondBgImg overflow-hidden rounded-t-md  ">
                <img src={thirdMlImg} className="thirdMlImg object-center object-cover translate-y-0" />
              </div>
              <div className="univerFText  text p-10 bg-black opacity-40 text-white  rounded-b-md grid grid-cols-1 justify-items-center">
                <div className=" grid grid-cols-1">
                  <div className=" text-left grid grid-cols-1 w-full justify-items-start">
                    <span>Описание: Хард Ковер Классик А4</span>
                    <span>Страницы: 6</span>
                    <span>Обложка: Софт-тач твёрдый пр.</span>
                    <span>Блок: Лабораторная печать из пластиков</span>
                    <span>Фотосессия: 2 часа в школе</span>
                    <span>Срок: От 30 до 60 рабочих дней</span>
                  </div>
                </div>
                <div className=" w-full my-7 flex justify-center items-center">
                  <a href="https://t.me/Vinetkiuz1">
                    <button className="  bg-white flex justify-center items-center text-black font-serif px-6 py-2 rounded-lg shadow-lg">Заказать альбом</button>
                  </a>
                </div>
              </div>
            </div>

            <div className=" albom-univer secondSection w-full  flex justify-center items-center">
              <div className=" secondBgImg overflow-hidden rounded-t-md">
                <img src={fourthMlImg} className="fourthMlImg object-center object-cover scale-110 -translate-y-3" />
              </div>
              <div className="univerFText  text p-10 bg-black opacity-40 text-white  rounded-b-md grid grid-cols-1 justify-items-center">
                <div className=" grid grid-cols-1">
                  <div className=" text-left grid grid-cols-1 w-full justify-items-start">
                    <span>Описание: Хард Ковер Классик А4</span>
                    <span>Страницы: 6</span>
                    <span>Обложка: Софт-тач твёрдый пр.</span>
                    <span>Блок: Лабораторная печать из пластиков</span>
                    <span>Фотосессия: 2 часа в школе</span>
                    <span>Срок: От 30 до 60 рабочих дней</span>
                  </div>
                </div>
                <div className=" w-full my-7 flex justify-center items-center">
                  <a href="https://t.me/Vinetkiuz1">
                    <button className="  bg-white flex justify-center items-center text-black font-serif px-6 py-2 rounded-lg shadow-lg">Заказать альбом</button>
                  </a>
                </div>
              </div>
            </div>

            <div className=" albom-univer secondSection w-full  flex justify-center items-center ">
              <div className=" secondBgImg overflow-hidden rounded-t-md">
                <img src={fivethMlImg} className="fivethMlImg object5 object-cover -translate-y-3" />
              </div>
              <div className="univerFText  text p-10 bg-black opacity-40 text-white rounded-b-md grid grid-cols-1 justify-items-center">
                <div className=" grid grid-cols-1">
                  <div className=" text-left grid grid-cols-1 w-full justify-items-start">
                    <span>Описание: Лайт А4</span>
                    <span>Страницы: 6</span>
                    <span>Обложка: Фото обложка без Т-пр.</span>
                    <span>Блок: Лабораторная печать из пластиков</span>
                    <span>Фотосессия: 2 часа в школе</span>
                    <span>Срок: От 30 до 60 рабочих дней</span>
                  </div>
                </div>
                <div className=" w-full my-7 flex justify-center items-center">
                  <a href="https://t.me/Vinetkiuz1">
                    <button className="  bg-white flex justify-center items-center text-black font-serif px-6 py-2 rounded-lg shadow-lg">Заказать альбом</button>
                  </a>
                </div>
              </div>
            </div>

          </div>
        </section>

        <Mladshiycard />
      </div>
    </Layout>
  );
}

export default МладшаяШкола;