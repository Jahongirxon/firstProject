import IHT from "../media/logotip/IHT.png"
import Oxbridge from "../media/logotip/OXBRIDGE.png"
import vosiq from "../media/logotip/vosiq.png"
import DIPLOMAT from "../media/logotip/DIPLOMAT.png"
import Humo from "../media/logotip/humo.png"
import sehriyo from "../media/logotip/sehriyo.png"
import TUIS from "../media/logotip/TUIS.png"
import Fortuna from "../media/logotip/Fortuna.png"
import genesisEducation from "../media/logotip/genesiseducation.png"
import littleHarvard from "../media/logotip/littleharvard.png"
import UNIKUM from "../media/logotip/UNIKUM.png"
import WISE from "../media/logotip/WISE.png"
import WUNDERKIND from "../media/logotip/WUNDERKIND.png"
import школьнаяАакадемия from "../media/logotip/школьнаяАкадемия.png"
import YTIT from "../media/logotip/YTIT.png"
import WIST from "../media/logotip/WIST.png"
import BEK from "../media/logotip/BEK.png"
import BestSchool from "../media/logotip/BESTSCHOOL.png"
import Leader from "../media/logotip/Leader.png"
import PROFI from "../media/logotip/PROFI.png"
import sehriyoKids from "../media/logotip/Sehriyokids.png"
import ERUDIT from "../media/logotip/ERUDIT.png"
import littleTots from "../media/logotip/littleTots.png"



function Carousel() {

  const logo = [
    {
      id: 1,
      logoImg: littleTots
    },
    {
      id: 2,
      logoImg: IHT
    },
    {
      id: 3,
      logoImg: Oxbridge
    },
    {
      id: 4,
      logoImg: vosiq
    },
    {
      id: 5,
      logoImg: DIPLOMAT
    },
    {
      id: 6,
      logoImg: Humo
    },
    {
      id: 7,
      logoImg: sehriyo
    },
    {
      id: 8,
      logoImg: TUIS
    },
    {
      id: 9,
      logoImg: littleHarvard
    },
    {
      id: 10,
      logoImg: UNIKUM
    },
    {
      id: 11,
      logoImg: школьнаяАакадемия
    },
    {
      id: 12,
      logoImg: YTIT
    },
    {
      id: 13,
      logoImg: WIST
    },
    {
      id: 14,
      logoImg: BEK
    },
    {
      id: 15,
      logoImg: BestSchool
    },
    {
      id: 16,
      logoImg: Leader
    },
    {
      id: 17,
      logoImg: PROFI
    },
    {
      id: 18,
      logoImg: sehriyoKids
    },
    {
      id: 19,
      logoImg: ERUDIT
    },
    {
      id: 20,
      logoImg: Fortuna
    },
    {
      id: 21,
      logoImg: genesisEducation
    },
    {
      id: 22,
      logoImg: WISE
    },
    {
      id: 23,
      logoImg: WUNDERKIND
    },
    {
      id: 24,
      logoImg: littleTots
    },
    {
      id: 25,
      logoImg: IHT
    },
    {
      id: 26,
      logoImg: Oxbridge
    },
    {
      id: 27,
      logoImg: vosiq
    },
    {
      id: 28,
      logoImg: DIPLOMAT
    },
    {
      id: 29,
      logoImg: Humo
    },
    {
      id: 30,
      logoImg: sehriyo
    },
    {
      id: 31,
      logoImg: TUIS
    },
    {
      id: 32,
      logoImg: littleHarvard
    },
    {
      id: 33,
      logoImg: UNIKUM
    },
    {
      id: 34,
      logoImg: школьнаяАакадемия
    },
    {
      id: 35,
      logoImg: YTIT
    },
    {
      id: 36,
      logoImg: WIST
    },
    {
      id: 37,
      logoImg: BEK
    },
    {
      id: 38,
      logoImg: BestSchool
    },
    {
      id: 39,
      logoImg: Leader
    },
    {
      id: 40,
      logoImg: PROFI
    },
    {
      id: 41,
      logoImg: sehriyoKids
    },
    {
      id: 42,
      logoImg: ERUDIT
    },
    {
      id: 43,
      logoImg: Fortuna
    },
    {
      id: 44,
      logoImg: genesisEducation
    },
    {
      id: 45,
      logoImg: WISE
    },
    {
      id: 46,
      logoImg: WUNDERKIND
    }
  ]

  return (
    <>
      <div className="slider w-4/5 px-10">
        <div className="slider-track w-full">
          {
            logo.map(i => {
              return (
                <div className="slide">
                  <img src={i.logoImg} />
                </div>
              )
            })
          }
        </div>
      </div>
    </>
  );
}

export default Carousel;