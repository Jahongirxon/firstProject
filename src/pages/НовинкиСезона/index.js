import Layout from "../../components/Layout";


function НовинкиСезона() {
  return (

    <Layout>
      <div className=" bgLogo w-full">

        <div className=" videoNewSeason w-full flex justify-center items-center p-20 rounded-md overflow-hidden text-center text-3xl font-semibold">
          <div className=" space-y-3">
            <section>
              <iframe width="560" className=" videoSection rounded-lg" height="315" src="https://www.youtube.com/embed/khqLpeP9kV0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </section>
            <section className=" videoText">
              <span>Royal 2022</span>
            </section>
          </div>
        </div>

        <div className=" videoNewSeason w-full flex justify-center items-center p-20 rounded-md overflow-hidden text-center text-3xl font-semibold">
          <div className=" space-y-3">
            <section>
              <iframe width="560" className=" videoSection rounded-lg" height="315" src="https://www.youtube.com/embed/XXE89qqCsgo" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </section>
            <section className=" videoText">
              <span>Топ 2 тренда сезона в 2022 году</span>
            </section>
          </div>
        </div>

        <div className=" videoNewSeason w-full flex justify-center items-center p-20 rounded-md overflow-hidden text-center text-3xl font-semibold">
          <div className=" space-y-3">
            <section>
              <iframe width="560" className=" videoSection rounded-lg" height="315" src="https://www.youtube.com/embed/m4KI8atjiJU" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </section>
            <section className=" videoText">
              <span>New Элегант А4</span>
            </section>
          </div>
        </div>

        <div className=" videoNewSeason flex justify-center items-center p-20 rounded-md overflow-hidden text-center text-3xl font-semibold">
          <div className=" space-y-3">
            <section>
              <iframe width="560" className=" videoSection rounded-lg" height="315" src="https://www.youtube.com/embed/Lr8XsbOQVck" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </section>
            <section className=" videoText">
              <span>Виньетки с 3D печатью!</span>
            </section>
          </div>
        </div>

        <div className=" videoNewSeason flex justify-center items-center p-20 rounded-md overflow-hidden text-center text-3xl font-semibold">
          <div className=" space-y-3">
            <section>
              <iframe width="560" className=" videoSection rounded-lg" height="315" src="https://www.youtube.com/embed/Epn8p-QvJUo" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </section>
            <section className=" videoText">
              <span>Gold Line</span>
            </section>
          </div>
        </div>

      </div>
    </Layout>
  );
}

export default НовинкиСезона;