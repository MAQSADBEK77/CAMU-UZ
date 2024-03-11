// rrd
import { Outlet } from "react-router-dom";
// components
import Header from "../components/Header";
import Footer from "../components/Footer";
// Loading

function HomeLayout() {
  return (
    <>
        <Header />
      <main className="container-css">
        <Outlet />
      </main>
      <Footer />
    </>
  );
}

export default HomeLayout;
