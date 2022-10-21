import studio1 from "../media/schoolAlbom/studio1.jpg"
import studio2 from "../media/schoolAlbom/studio3.jpg"
import studio3 from "../media/schoolAlbom/studio2.jpg"
import syomka1 from "../media/schoolAlbom/syomka1.JPG"
import syomka2 from "../media/schoolAlbom/syomka2.JPG"
import syomka3 from "../media/schoolAlbom/syomka3.JPG"


function StarshiyCard() {
  return (
    <>
      <div className="sixCard w-full grid grid-cols-3 gap-5 p-20">
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
          <img src={syomka1} className=" scale-110 "/>
        </div>
        <div className=" overflow-hidden">
          <img src={syomka2} className=" "/>
        </div>
        <div className=" overflow-hidden">
          <img src={syomka3} className=" scale-110"/>
        </div>
      </div>
    </>
  );
}

export default StarshiyCard;