import { YMaps, Map, Placemark } from "react-yandex-maps";
import phoneLogo from "../../media/phone.svg"
import tiktok from "../../media/tiktok.png"
import est2015 from "../../media/est2015.png"
import ScrollToTop from "react-scroll-to-top";


function Footer() {
  return (<>
    <div className=" footer flex justify-between p-2 items-center border-solid bg-navbar mt-5 font-semibold">


      <div className="mb-15 h-auto ml-4">
        <div>
          <ul className=" space-y-3 relative text-left mb-4 ml-4">
            <li className="flex justify-start items-center">
              <a className="w-[20px] h-[22px]">
                <img src={phoneLogo} />
              </a>
              <span>+998 (95) 199-7-199</span>
            </li>
            <li className="flex justify-start items-center">
              <a className="w-[20px] h-[22px]">
                <img src={phoneLogo} />
              </a>
              <span>+998 (93) 518-76-65</span>
            </li>
            <li className="flex justify-start items-center">
              <a className="w-[20px] h-[22px]">
                <img src={phoneLogo} />
              </a>
              <span>+998 (99) 515-87-66
              </span>
            </li>
            <li className="flex justify-start items-center space-x-1">
              <a className="w-[25px] h-[25px]">
                <img src="https://img.icons8.com/ios/50/000000/domain.png" />
              </a>
              <span>
                www.myvinetki.uz
              </span>
            </li>
            <li className="flex justify-start items-center space-x-2">
              <a href="https://yandex.uz/maps/10335/tashkent/?from=api-maps&ll=69.305946%2C41.376413&mode=routes&origin=jsapi_2_1_79&rtext=~41.376413%2C69.305946&rtt=auto&ruri=~&z=6" className="w-[25px] h-[25px]">
                <img src="https://img.icons8.com/ios-filled/50/000000/address--v1.png" />
              </a>
              <span>г.Ташкент, р-н: Юнусабад, <br /> ул.Н.Ибрагимова 54</span>
            </li>
          </ul>
        </div>
        <div>
          <ul className=" flex justify-start items-center gap-2 ml-3">
            <li className="">
              <a href="https://t.me/Vinetkiuz1" target="_blank">
                <img src="https://img.icons8.com/ios-filled/50/000000/telegram.png" className="w-[40px] h-[40px]" />
              </a>
            </li>
            <li>
              <a href="https://www.instagram.com/vinetkiuz/" target="_blank">
                <img src="https://img.icons8.com/ios-glyphs/30/000000/instagram-new.png" className="w-[40px] h-[40px]" />
              </a>
            </li>
            <li>
              <a href="https://www.facebook.com/vinetkiuz" target="_blank">
                <img src="https://img.icons8.com/ios-glyphs/30/000000/facebook-new.png" className="w-[40px] h-[40px]" />
              </a>
            </li>
            <li>
              <a href="http://www.tiktok.com/@vinetkiuz" target="_blank">
                <img src={tiktok} className="w-[40px] h-[40px]" />
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="est2015logo">
        <a href="/">
          <img src={est2015} className="w-[270px] h-[270px]"/>
        </a>
      </div>

      {/* yandex karta */}
      <div className="yandexMap mr-8 ">
        <YMaps>
          <div className="map">
            <Map
              defaultState={{
                center: [41.376413, 69.305946],
                zoom: 15
              }}
            >
              <Placemark geometry={[41.376413, 69.305946]} />
            </Map>
          </div>
        </YMaps>
      </div>
      <ScrollToTop smooth className=" flex justify-center items-center"/>
    </div>
  </>);
}

export default Footer;