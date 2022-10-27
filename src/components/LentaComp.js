import lenta1 from "../media/lenta/lenta1.webp"
import lenta2 from "../media/lenta/lenta2.webp"
import lenta3 from "../media/lenta/lenta3.webp"
import lenta4 from "../media/lenta/lenta4.webp"
import lenta5 from "../media/lenta/lenta5.webp"
import lenta6 from "../media/lenta/lenta6.png"
import lenta7 from "../media/lenta/lenta7.webp"
import lenta8 from "../media/lenta/lenta8.webp"
import lenta9 from "../media/lenta/lenta9.webp"
import lenta10 from "../media/lenta/lenta10.webp"
import lenta11 from "../media/lenta/lenta11.webp"
import lenta12 from "../media/lenta/lenta12.webp"
import lenta13 from "../media/lenta/lenta13.webp"
import lenta14 from "../media/lenta/lenta14.webp"
import lenta15 from "../media/lenta/lenta15.webp"
import lenta16 from "../media/lenta/lenta16.webp"
import lenta17 from "../media/lenta/lenta17.webp"
import lenta18 from "../media/lenta/lenta18.webp"
import lenta19 from "../media/lenta/lenta19.webp"
import lenta20 from "../media/lenta/lenta20.webp"
import lenta21 from "../media/lenta/lenta21.webp"
import lenta22 from "../media/lenta/lenta22.webp"
import lenta23 from "../media/lenta/lenta23.webp"
import lenta24 from "../media/lenta/lenta24.webp"
import folga1 from "../media/lenta/folga1.webp"
import folga2 from "../media/lenta/folga2.webp"
import folga3 from "../media/lenta/folga3.webp"




function LentaComp() {
  const lentaData = [
    {
      id: 1,
      photo: lenta1,
      text: "1. Белый"
    },
    {
      id: 2,
      photo: lenta2,
      text: "2. Cеребряный"
    },
    {
      id: 3,
      photo: lenta3,
      text: "3. Бежевый"
    },
    {
      id: 4,
      photo: lenta4,
      text: "4. Кремовый"
    },
    {
      id: 5,
      photo: lenta5,
      text: "5. Золото"
    },
    {
      id: 6,
      photo: lenta6,
      text: "6. Темное золото"
    },
    {
      id: 7,
      photo: lenta7,
      text: "7. Пудра"
    },
    {
      id: 8,
      photo: lenta8,
      text: "8. Бледно-розовый"
    },
    {
      id: 9,
      photo: lenta9,
      text: "9. Ярко-розовый"
    },
    {
      id: 10,
      photo: lenta10,
      text: "10. Фуксия"
    },
    {
      id: 11,
      photo: lenta11,
      text: "11. Алый"
    },
    {
      id: 12,
      photo: lenta12,
      text: "12. Темно-красный"
    },
    {
      id: 13,
      photo: lenta13,
      text: "13. Бордо"
    },
    {
      id: 14,
      photo: lenta14,
      text: "14. Лаванда"
    },
    {
      id: 15,
      photo: lenta15,
      text: "15. Фиолетовый"
    },
    {
      id: 16,
      photo: lenta16,
      text: "16. Баклажан"
    },
    {
      id: 17,
      photo: lenta17,
      text: "17. Голубой"
    },
    {
      id: 18,
      photo: lenta18,
      text: "18. Синий"
    },
    {
      id: 19,
      photo: lenta19,
      text: "19. Темно-синий"
    },
    {
      id: 20,
      photo: lenta20,
      text: "20. Черный"
    },
    {
      id: 21,
      photo: lenta21,
      text: "21. Мята"
    },
    {
      id: 22,
      photo: lenta22,
      text: "22. Бирюза"
    },
    {
      id: 23,
      photo: lenta23,
      text: "23. Зеленый"
    },
    {
      id: 24,
      photo: lenta24,
      text: "24. Изумруд"
    }
  ]

  return (
    <>
      <div className=" w-full flex justify-center items-center">
        <div className="  max-w-7xl grid grid-cols-1 justify-items-center space-y-10 lenta-container">
          <div className=" lentaTitle text-3xl font-semibold">
            Палитра цветов сатина
          </div>
          <div className=" lenta grid grid-cols-4 gap-5">
            {lentaData.map(i => {
              return (
                <div className=" p-10 space-y-3">
                  <section className=" overflow-hidden">
                    <img src={i.photo} className=" w-[200px] h-[200px]" />
                  </section>
                  <section className=" text-center text-lg font-semibold">
                    {i.text}
                  </section>
                </div>
              )
            })}
          </div>
          <div className=" space-y-20">
            <section className="folgaTitle text-3xl font-semibold text-center">
              Варианты нанесения изображения
            </section>
            <section className=" falga grid grid-cols-3 gap-20">
              <div className=" space-y-5 grid grid-cols-1 justify-items-center">
                <div className="imgSection rounded-full overflow-hidden">
                  <img src={folga1} className=" w-[280px] h-[280px]" />
                </div>
                <div className=" text-center text-lg font-semibold">Золотая фольга</div>
              </div>

              <div className=" space-y-5 grid grid-cols-1 justify-items-center">
                <div className="imgSection rounded-full overflow-hidden">
                  <img src={folga2} className=" w-[280px] h-[280px]" />
                </div>
                <div className=" text-center text-lg font-semibold">Синяя фольга</div>
              </div>

              <div className=" space-y-5 grid grid-cols-1 justify-items-center">
                <div className="imgSection rounded-full overflow-hidden">
                  <img src={folga3} className=" w-[280px] h-[280px]" />
                </div>
                <div className=" text-center text-lg font-semibold">Черный матовый</div>
              </div>
            </section>
          </div>
        </div>
      </div>
    </>
  );
}

export default LentaComp;