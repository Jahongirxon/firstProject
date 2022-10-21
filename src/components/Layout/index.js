import Footer from "./footer";
import Header from "./header";

function Layout(props) {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <div className="flex-1">
        <div className="max-w-8xl mx-auto mb-5 flex justify-center items-center layout">{props.children}</div>
      </div>
      <Footer />
    </div>
  );
}

export default Layout;
