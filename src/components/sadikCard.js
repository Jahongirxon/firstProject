import studio1 from "../media/schoolAlbom/sadik1.jpg"
import studio2 from "../media/schoolAlbom/sadik2.jpg"
import studio3 from "../media/schoolAlbom/sadik3syomka.jpg"
import syomka1 from "../media/schoolAlbom/sadik4.jpg"
import syomka2 from "../media/schoolAlbom/sadik5.jpg"
import syomka3 from "../media/schoolAlbom/sadik6.jpg"


function SadikCard() {
  return (
    <>
      <div className=" w-full grid grid-cols-3 gap-5 p-20 sixCard">
        <div>
          <img src={studio1} />
        </div>
        <div>
          <img src={studio2} />
        </div>
        <div>
          <img src={studio3} />
        </div>

        <div className="  overflow-hidden">
          <img src={syomka1} />
        </div>
        <div className=" overflow-hidden">
          <img src={syomka2}/>
        </div>
        <div className=" overflow-hidden">
          <img src={syomka3}/>
        </div>
      </div>
    </>
  );
}

export default SadikCard;