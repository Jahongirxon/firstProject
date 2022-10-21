import Layout from "../../components/Layout";
import photo1 from "../../media/izarStudio/1.jpg"
import photo2 from "../../media/izarStudio/2.jpg"
import photo3 from "../../media/izarStudio/3.jpg"
import photo4 from "../../media/izarStudio/4.jpg"
import photo5 from "../../media/izarStudio/5.jpg"
import photo6 from "../../media/izarStudio/6.jpg"


function IZARSTUDIO() {
  return (
    <Layout>
      <div>
        <div className="studioTitle max-w-8xl grid grid-cols-1 justify-items-center space-y-10 text-white p-20 bg-black">
          <span className=" text-4xl">
            Скоро открытие...
          </span>
          <span className=" text-7xl">
            IZAR STUDIO
          </span>
        </div>
        <div className=" max-w-8xl flex justify-center items-center bg-black  mx-auto mb-5">
          <div className=" space-y-10 p-10 izarContainer">
            <div className=" w-full mx-auto my-0 border-2 border-gray-400">
              <img src={photo1} />
            </div>
            <div className=" w-full mx-auto my-0 border-2 border-gray-400">
              <img src={photo2} />
            </div>
            <div className=" w-full mx-auto my-0 border-2 border-gray-400">
              <img src={photo3} />
            </div>
            <div className=" w-full mx-auto my-0 border-2 border-gray-400">
              <img src={photo4} />
            </div>
            <div className=" w-full mx-auto my-0 border-2 border-gray-400">
              <img src={photo5} />
            </div>
            <div className=" w-full mx-auto my-0 border-2 border-gray-400">
              <img src={photo6} />
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default IZARSTUDIO;