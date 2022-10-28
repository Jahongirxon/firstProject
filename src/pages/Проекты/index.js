import Layout from "../../components/Layout";


function Проекты() {
  return (
    <>
      <div className=" bgLogo">
        <Layout>
          <div className="">

            <div className=" videoNewSeason flex justify-center items-center p-20 rounded-md overflow-hidden text-center text-3xl font-semibold">
              <div className=" space-y-3">
                <section>
                  <iframe width="560" className=" videoSection rounded-lg" height="315" src="https://www.youtube.com/embed/nWzzXEfyYLg" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                </section>
                <section className=" videoText">
                  <span>
                    Грандиозный выпуск INTERNATIONAL HOUSE OF TASHKENT 2022!!!
                  </span>
                </section>
              </div>
            </div>
          </div>
        </Layout>
      </div>
    </>
  );
}

export default Проекты;