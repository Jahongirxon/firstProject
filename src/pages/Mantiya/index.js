import Layout from "../../components/Layout";
import MantiyaCard from "../../components/MantiyaCard";

function Mantiya() {
  return (
    <>
      <Layout>
        <div className=" bgLogo">
          <div className=" w-full">
            <div className="firstManImg">
              <div className="bgColor">
                <div className="text text-center p-20 mt-20" >
                  <span className="text-center text-zinc-300">
                    Идёте на вручение дипломов, защиту диссертаций, вечеринку или на фотосессию?
                    К вашим услугам прокат и продажа выпускных мантий от организации VINETKI.UZ
                  </span>
                </div>
              </div>
            </div>
          </div>
          <MantiyaCard />
        </div>
      </Layout>
    </>
  );
}

export default Mantiya;