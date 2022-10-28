import Layout from "../../components/Layout";
import firstUnImg from "../../media/univerAlbom/3.jpg"
import secondUnImg from "../../media/univerAlbom/4.jpg"
import thirdUnImg from "../../media/univerAlbom/00.jpg"
import fourthUnImg from "../../media/univerAlbom/2023.jpg"
import fivethUnImg from "../../media/univerAlbom/02.jpg"
import sixthUnImg from "../../media/univerAlbom/4837.JPG"
import seventhUnImg from "../../media/univerAlbom/60x20.JPG"
import UniverCard from "../../components/univerCard";



function Университет() {
  return (
    <Layout>
      <div className=" max-w-full bgLogo">
        <div className=" w-full">
          <div className="firstUnImgBg">
            <div className="bgColor">
              <div className="text p-20 text-center" >
                <span className="text-center text-zinc-300">
                  Со студенческим выпускным альбомом можно по желанию в любой момент окунуться в волну теплых воспоминаний о годах, проведенных в любимом университете. Поэтому вопроса заказать фотоальбом для студентов либо нет не должно стоять в принципе.
                </span>
              </div>
            </div>
          </div>
        </div>
        {/* Desktop */}
        <div className=" py-20 space-y-5 desktop-univer">
          <div className=" albom-univer relative secondSection w-full px-20 flex justify-center items-center -translate-x-30">
            <div className=" secondBgImg overflow-hidden w-[700px] h-[675px] rounded-l-md">
              <img src={firstUnImg} className="firstUnImg object-center object-cover scale-150 translate-y-20" />
            </div>
            <div className="text p-10  bg-black opacity-40 text-white w-[700px] h-[675px] rounded-r-md">
              <div className=" grid grid-cols-1">
                <div className=" text-left grid grid-cols-1 w-full justify-items-start text-2xl space-y-5">
                  <span>Тип Виньетки:TWIX Премиум</span>
                  <span>Страницы: 20</span>
                  <span>Обложка: Стекло + деревянная дощечка</span>
                  <span>Блок: Лабораторная печать из пластиков</span>
                  <span>Фотосессия: 1.Фотостудия 2.ВУЗ
                    3. Прогулка по выбору клиента в городе.</span>
                  <span>Бонус: Мантия магистра и подарки</span>
                  <span>Срок: От 60 до 90 рабочих дней от потока заказа</span>
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
            <div className=" relative text p-10  bg-black opacity-40 text-white w-[700px] h-[675px] rounded-l-md">
              <div className=" grid grid-cols-1">
                <div className=" text-left grid grid-cols-1 w-full justify-items-start text-2xl space-y-5">
                  <span>Тип Виньетки: Мрамор А4</span>
                  <span>Размер: 20x30</span>
                  <span>Тип обложки: Мраморный глянц ( с 3D рисунком), матовый.</span>
                  <span>Тип печати: Химичиская лабараторная печать с пластикавами страницами количество страниц (10)</span>
                  <span>Фотосессия: 1.Фотостудия 2.ВУЗ</span>
                  <span>Бонус: Мантия магистра и подарки</span>
                  <span>Срок: От 60 до 90 рабочих дней от потока заказа</span>
                </div>
              </div>
            </div>
            <div className=" secondBgImg overflow-hidden w-[700px] h-[675px] rounded-r-md ">
              <img src={secondUnImg} className="secondUnImg object-center object-cover scale-150 translate-y-20" />
            </div>
            <div className=" w-full absolute bottom-5 flex justify-center items-center">
              <a href="https://t.me/Vinetkiuz1">
                <button className="BtnR translate-x-80 bg-white flex justify-center items-center text-black font-serif font-semibold px-6 py-2 rounded-lg shadow-lg hover:scale-105 my-3">Заказать альбом</button>
              </a>
            </div>
          </div>

          <div className=" relative secondSection w-full px-20 flex justify-center items-center -translate-x-30">
            <div className=" secondBgImg overflow-hidden w-[700px] rounded-l-md h-[675px] ">
              <img src={thirdUnImg} className="thirdUnImg object3 object-cover translate-y-0" />
            </div>
            <div className="text p-10  bg-black opacity-40 text-white rounded-r-md w-[700px] h-[675px]">
              <div className=" grid grid-cols-1">
                <div className=" text-left grid grid-cols-1 w-full justify-items-start text-2xl space-y-5">
                  <span>Тип Виньетки: Хард Ковер Классик А4</span>
                  <span>Размер: 20x30</span>
                  <span>Тип обложки:Софт-тач твёрдый пр.</span>
                  <span>Тип печати: Химичиская лабараторная печать с пластикавами страницами количество страниц (10)</span>
                  <span>Фотосессия: 1.Фотостудия 2.ВУЗ</span>
                  <span>Бонус: Мантия магистра и подарки</span>
                  <span>Срок: От 60 до 90 рабочих дней от потока заказа</span>
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
                  <span>Тип Виньетки: ROYAL Premium</span>
                  <span>Размер: 20x30</span>
                  <span>Тип обложки:Фактурный 3D Печать</span>
                  <span>Тип печати: Журнальный</span>
                  <span>Страницы: 20-30 от кол-во студентов</span>
                  <span>Фотосессия:1.Фотостудия 2.ВУЗ 3. Прогулка по выбору клиента в городе.</span>
                  <span>Бонус: Мантия магистра и подарки</span>
                  <span>Срок: От 60 до 90 рабочих дней от потока заказа</span>
                </div>
              </div>
            </div>
            <div className=" secondBgImg overflow-hidden w-[700px] h-[675px] rounded-r-md">
              <img src={fourthUnImg} className="fourthUnImg object-center object-cover scale-150 translate-y-20 " />
            </div>
            <div className=" w-full absolute bottom-5 flex justify-center items-center">
              <a href="https://t.me/Vinetkiuz1">
                <button className="BtnR translate-x-80 bg-white flex justify-center items-center text-black font-serif font-semibold px-6 py-2 rounded-lg shadow-lg hover:scale-105 my-3">Заказать альбом</button>
              </a>
            </div>
          </div>

          <div className=" relative secondSection w-full px-20 flex justify-center items-center -translate-x-30">
            <div className=" secondBgImg overflow-hidden w-[700px] h-[675px] rounded-l-md">
              <img src={fivethUnImg} className="fivethUnImg object5 object-cover scale-110 translate-y-5" />
            </div>
            <div className="text p-10  bg-black opacity-40 text-white w-[700px] h-[675px] rounded-r-md">
              <div className=" grid grid-cols-1">
                <div className=" text-left grid grid-cols-1 w-full justify-items-start text-2xl space-y-5">
                  <span>Тип Виньетки: Хард Ковер Классик А4</span>
                  <span>Размер: 20x30</span>
                  <span>Тип обложки:Софт-тач твёрдый пр.</span>
                  <span>Тип печати: Химичиская лабараторная печать с пластикавами страницами количество страниц (10)</span>
                  <span>Фотосессия: 1.Фотостудия 2.ВУЗ</span>
                  <span>Бонус: Мантия магистра и подарки</span>
                  <span>Срок: От 60 до 90 рабочих дней от потока заказа</span>
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
                  <span>Тип Виньетки: Стандарт</span>
                  <span>Размер: 20x30</span>
                  <span>Тип обложки:Стеклянная</span>
                  <span>Тип печати: Лабораторная печать из пластиков</span>
                  <span>Страницы: 10</span>
                  <span>Фотосессия: 1.Фотостудия 2.ВУЗ</span>
                  <span>Бонус: Мантия магистра и подарки</span>
                  <span>Срок: От 60 до 90 рабочих дней от потока заказа</span>
                </div>
              </div>
            </div>
            <div className=" secondBgImg overflow-hidden w-[700px] h-[675px] rounded-r-md">
              <img src={sixthUnImg} className="sixthUnImg object-center object-cover scale-150 translate-y-24 translate-x-5" />
            </div>
            <div className=" w-full absolute bottom-5 flex justify-center items-center">
              <a href="https://t.me/Vinetkiuz1">
                <button className="BtnR translate-x-80 bg-white flex justify-center items-center text-black font-serif font-semibold px-6 py-2 rounded-lg shadow-lg hover:scale-105 my-3">Заказать альбом</button>
              </a>
            </div>
          </div>

          <div className=" relative secondSection w-full px-20 flex justify-center items-center -translate-x-30">
            <div className=" secondBgImg overflow-hidden w-[700px] h-[675px] rounded-l-md">
              <img src={seventhUnImg} className="seventhUnImg object-center object-cover scale-150 translate-x-10" />
            </div>
            <div className="text p-10  bg-black opacity-40 text-white w-[700px] h-[675px] rounded-r-md">
              <div className=" grid grid-cols-1">
                <div className=" text-left grid grid-cols-1 w-full justify-items-start text-2xl space-y-5">
                  <span>Тип Виньетки: Элегант</span>
                  <span>Размер: 20x30</span>
                  <span>Тип обложки: Бархат с гравировкой и треугольный стекло</span>
                  <span>Тип печати:  Лабораторная печать из пластиков</span>
                  <span>Страницы: 20-30 от кол-во студентов</span>
                  <span>Фотосессия: 1.Фотостудия 2.ВУЗ</span>
                  <span>Бонус: Мантия магистра и подарки</span>
                  <span>Срок: От 60 до 90 рабочих дней от потока заказа</span>
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
        <section className=" w-[390px] py-5 px-5 mobile-univer">
          <div className=" w-full space-y-5 grid grid-cols-1 justify-items-center">
            <div className=" albom-univer mx-auto my-0 secondSection w-full  flex justify-center items-center">
              <div className=" secondBgImg overflow-hidden rounded-t-md">
                <img src={firstUnImg} className="firstUnImg object-center object-cover scale-150 translate-y-5" />
              </div>
              <div className="univerFText  text p-10 bg-black opacity-40 text-white w-[700px] h-[675px] rounded-b-md grid grid-cols-1 justify-items-center">
                <div className=" grid grid-cols-1">
                  <div className=" text-left grid grid-cols-1 w-full justify-items-start">
                    <span>Тип Виньетки: Хард Ковер Классик А4</span>
                    <span>Размер: 20x30</span>
                    <span>Тип обложки:Софт-тач твёрдый пр.</span>
                    <span>Тип печати: Химичиская лабараторная печать с пластикавами страницами количество страниц (10)</span>
                    <span>Фотосессия: 1.Фотостудия 2.ВУЗ</span>
                    <span>Бонус: Мантия магистра и подарки</span>
                    <span>Срок: От 60 до 90 рабочих дней от потока заказа</span>
                  </div>
                </div>
                <div className="btnContainer w-full my-7 flex justify-center items-center">
                  <a href="https://t.me/Vinetkiuz1">
                    <button className="  bg-white flex justify-center items-center text-black font-serif px-6 py-2 rounded-lg shadow-lg">Заказать альбом</button>
                  </a>
                </div>
              </div>

            </div>

            <div className="albom-univer secondSection w-full  flex justify-center items-center">
              <div className=" secondBgImg overflow-hidden rounded-t-md">
                <img src={secondUnImg} className="secondUnImg object-center object-cover scale-150 translate-y-6" />
              </div>
              <div className="univerFText  text p-10 bg-black opacity-40 text-white  rounded-b-md grid grid-cols-1 justify-items-center">
                <div className=" grid grid-cols-1">
                  <div className=" text-left grid grid-cols-1 w-full justify-items-start">
                    <span>Тип Виньетки: Мрамор А4</span>
                    <span>Размер: 20x30</span>
                    <span>Тип обложки: Мраморный глянц ( с 3D рисунком), матовый.</span>
                    <span>Тип печати: Химичиская лабараторная печать с пластикавами страницами количество страниц (10)</span>
                    <span>Фотосессия: 1.Фотостудия 2.ВУЗ</span>
                    <span>Бонус: Мантия магистра и подарки</span>
                    <span>Срок: От 60 до 90 рабочих дней от потока заказа</span>
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
                <img src={thirdUnImg} className="thirdUnImg object-center object-cover -translate-y-5" />
              </div>
              <div className="univerFText  text p-10 bg-black opacity-40 text-white  rounded-b-md grid grid-cols-1 justify-items-center">
                <div className=" grid grid-cols-1">
                  <div className=" text-left grid grid-cols-1 w-full justify-items-start">
                    <span>Тип Виньетки: Хард Ковер Классик А4</span>
                    <span>Размер: 20x30</span>
                    <span>Тип обложки:Софт-тач твёрдый пр.</span>
                    <span>Тип печати: Химичиская лабараторная печать с пластикавами страницами количество страниц (10)</span>
                    <span>Фотосессия: 1.Фотостудия 2.ВУЗ</span>
                    <span>Бонус: Мантия магистра и подарки</span>
                    <span>Срок: От 60 до 90 рабочих дней от потока заказа</span>
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
                <img src={fourthUnImg} className="fourthUnImg object-center object-cover scale-150 translate-y-5" />
              </div>
              <div className="univerFText  text p-10 bg-black opacity-40 text-white  rounded-b-md grid grid-cols-1 justify-items-center">
                <div className=" grid grid-cols-1">
                  <div className=" text-left grid grid-cols-1 w-full justify-items-start">
                    <span>Тип Виньетки: ROYAL Premium</span>
                    <span>Размер: 20x30</span>
                    <span>Тип обложки:Фактурный 3D Печать</span>
                    <span>Тип печати: Журнальный</span>
                    <span>Страницы: 20-30 от кол-во студентов</span>
                    <span>Фотосессия:1.Фотостудия 2.ВУЗ 3. Прогулка по выбору клиента в городе.</span>
                    <span>Бонус: Мантия магистра и подарки</span>
                    <span>Срок: От 60 до 90 рабочих дней от потока заказа</span>
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
                <img src={fivethUnImg} className="fivethUnImg object5 object-cover -translate-y-3" />
              </div>
              <div className="univerFText  text p-10 bg-black opacity-40 text-white rounded-b-md grid grid-cols-1 justify-items-center">
                <div className=" grid grid-cols-1">
                  <div className=" text-left grid grid-cols-1 w-full justify-items-start">
                    <span>Тип Виньетки: Хард Ковер Классик А4</span>
                    <span>Размер: 20x30</span>
                    <span>Тип обложки:Софт-тач твёрдый пр.</span>
                    <span>Тип печати: Химичиская лабараторная печать с пластикавами страницами количество страниц (10)</span>
                    <span>Фотосессия: 1.Фотостудия 2.ВУЗ</span>
                    <span>Бонус: Мантия магистра и подарки</span>
                    <span>Срок: От 60 до 90 рабочих дней от потока заказа</span>
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
                <img src={sixthUnImg} className="sixthUnImg object-center object-cover scale-125 translate-y-8 translate-x-3" />
              </div>
              <div className="univerFText  text p-10 bg-black opacity-40 text-white rounded-b-md grid grid-cols-1 justify-items-center">
                <div className=" grid grid-cols-1">
                  <div className=" text-left grid grid-cols-1 w-full justify-items-start">
                    <span>Тип Виньетки: Стандарт</span>
                    <span>Размер: 20x30</span>
                    <span>Тип обложки:Стеклянная</span>
                    <span>Тип печати: Лабораторная печать из пластиков</span>
                    <span>Страницы: 10</span>
                    <span>Фотосессия: 1.Фотостудия 2.ВУЗ</span>
                    <span>Бонус: Мантия магистра и подарки</span>
                    <span>Срок: От 60 до 90 рабочих дней от потока заказа</span>
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
                <img src={seventhUnImg} className="seventhUnImg object-center object-cover scale-125 translate-x-5 -translate-y-5" />
              </div>
              <div className="univerFText  text p-10 bg-black opacity-40 text-white rounded-b-md grid grid-cols-1 justify-items-center">
                <div className=" grid grid-cols-1">
                  <div className=" text-left grid grid-cols-1 w-full justify-items-start">
                    <span>Тип Виньетки: Элегант</span>
                    <span>Размер: 20x30</span>
                    <span>Тип обложки: Бархат с гравировкой и треугольный стекло</span>
                    <span>Тип печати:  Лабораторная печать из пластиков</span>
                    <span>Страницы: 20-30 от кол-во студентов</span>
                    <span>Фотосессия: 1.Фотостудия 2.ВУЗ</span>
                    <span>Бонус: Мантия магистра и подарки</span>
                    <span>Срок: От 60 до 90 рабочих дней от потока заказа</span>
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

        <UniverCard />
      </div>
    </Layout>
  );
}

export default Университет;