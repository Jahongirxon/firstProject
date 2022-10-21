import studio3 from "../media/univerAlbom/mantiya2.jpg"
import studio2 from "../media/univerAlbom/mantiya3.jpg"
import studio5 from "../media/univerAlbom/mantiya4.jpg"
import studio4 from "../media/univerAlbom/mantiya5.jpg"
import studio6 from "../media/univerAlbom/mantiya6.jpg"
import studio1 from "../media/univerAlbom/mantiya7.jpg"



function MantiyaCard() {
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
          <img src={studio4} className=" scale-110 "/>
        </div>
        <div className=" overflow-hidden">
          <img src={studio5} className=" "/>
        </div>
        <div className=" overflow-hidden">
          <img src={studio6} className=" scale-110"/>
        </div>
      </div>
    </>
  );
}

export default MantiyaCard;