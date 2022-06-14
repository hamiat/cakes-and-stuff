import { useState } from "react";
import Treat from "./Treat";
import style from "./treats.module.scss";

export default function Treats() {
  const [treatTemps, setTreatTemp] = useState([
    {
      id: 1,
      title: "Pastries",
      bgColor: "#FAF3F3",
      picOne: "/assets/pink-4.svg",
      picTwo: "/assets/pink-2.svg",
      picThree: "/assets/pink-3.svg"
    },
    {
      id: 2,
      title: "Cupcakes",
      bgColor: "#F6F8F9",
      picOne: "/assets/pink-1.svg"
    },
    { id: 3, title: "Donuts", bgColor: "#F7F7F2", picOne: "/assets/pink-1.svg" }
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
