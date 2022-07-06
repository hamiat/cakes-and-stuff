import Catering from "./components/Catering/Catering";
import Footer from "./components/Footer/Footer";
import Hero from "./components/Hero/Hero";
import Navbar from "./components/Navbar/Navbar";
import Treat from "./components/Treats/Treats";
import "./styles/main.module.scss";
import style from "./styles/main.module.scss";

export default function App() {
  return (
    <div className={style.App} id="home">
      <Navbar />
      <Hero />
      <Treat />
      <Catering />
      <Footer />
    </div>
  );
}
