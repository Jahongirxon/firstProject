import studio1 from "../media/univerAlbom/studio1.jpg"
import studio2 from "../media/univerAlbom/studio2.jpg"
import studio3 from "../media/univerAlbom/studio3.jpg"
import syomka1 from "../media/univerAlbom/syomka10.jpg"
import syomka2 from "../media/univerAlbom/syomka2.jpg"
import syomka3 from "../media/univerAlbom/syomka3.jpg"


function UniverCard() {
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

        <div className=" overflow-hidden">
          <img src={syomka1} className=" scale-110"/>
        </div>
        <div>
          <img src={syomka2} />
        </div>
        <div>
          <img src={syomka3} />
        </div>
      </div>
    </>
  );
}

export default UniverCard;