import Layout from "../../components/Layout";
import LentaComp from "../../components/LentaComp";
import MaketComp from "../../components/MaketComp";

function Lenta() {
  return (
    <>
      <Layout>
        <div className=" bgLogo">
          <LentaComp />
          <MaketComp />
        </div>
      </Layout>
    </>
  );
}

export default Lenta;