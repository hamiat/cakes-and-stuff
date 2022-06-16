import { useState } from "react";
import Treat from "./Treat";
import style from "./treats.module.scss";

export default function Treats() {
  const [treatTemps, setTreatTemp] = useState([
    {
      id: 1,
      title: "Pastries",
      bgColor: "#FAF3F3",
      picOne: "/assets/pi-1.svg",
      picTwo: "/assets/pi-2.svg",
      picThree: "/assets/pi-3.svg"
    },
    {
      id: 2,
      title: "Donuts",
      bgColor: "#F6F8F9",
      picOne: "/assets/bu-1.svg",
      picTwo: "/assets/bu-2.svg",
      picThree: "/assets/bu-3.svg"
    },
    {
      id: 3,
      title: "Cupcakes",
      bgColor: "#F7F7F2",
      picOne: "/assets/gr-1.svg",
      picTwo: "/assets/gr-2.svg",
      picThree: "/assets/gr-3.svg"
    }
  ]);

  return (
    <>
      {treatTemps.map((treatTemp) => (
        <section
          style={{ background: treatTemp.bgColor }}
          className={style.treats}
        >
          <Treat {...treatTemp} key={treatTemp.id} />
        </section>
      ))}
    </>
  );
}
