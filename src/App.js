import Hero from "./components/Hero/Hero";
import Navbar from "./components/Navbar/Navbar";
import "./styles/main.module.scss";

import style from "./styles/main.module.scss";

export default function App() {
  return (
    <div className={style.App} id="home">
      <Navbar />
      <Hero />
    </div>
  );
}
