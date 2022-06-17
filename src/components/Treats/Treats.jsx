import { useState } from "react";
import Treat from "./Treat";
import style from "./treats.module.scss";

export default function Treats() {
  const [treatTemps, setTreatTemp] = useState([
    {
      id: 1,
      title: "Pastries",
      bgColor: "#FAF3F3",
      picOne: {url : "/assets/pi-1.svg", description: "Cake shortbread sugar plum marshmallow tootsie roll chupa chups croissant jelly beans. Muffin biscuit sweet toffee halvah fruitcake cake jelly."},
      picTwo: {url : "/assets/pi-2.svg", description: "Jujubes marshmallow oat cake sweet roll sugar plum cake muffin. Tootsie roll gummi bears tart candy canes muffin gummies."},
      picThree: {url : "/assets/pi-3.svg", description: "Candy cheesecake cake shortbread cake muffin pastry muffin gummies. Pastry jelly powder pudding sweet donut marzipan."},
    },
    {
      id: 2,
      title: "Donuts",
      bgColor: "#F6F8F9",
      picOne: {url : "/assets/bu-1.svg", description: "Fruitcake donut sugar plum cookie sugar plum apple pie marzipan bear claw tiramisu icing."},
      picTwo: {url :  "/assets/bu-2.svg", description: "Dessert candy canes cotton candy biscuit cheesecake cheesecake tiramisu chocolate donut. "},
      picThree: {url :  "/assets/bu-3.svg", description: "Marshmallow jelly-o chocolate cake sesame snaps muffin lemon drops bonbon. Pudding gingerbread donut cake sweet roll jelly tart candy chocolate. "},
     
    },
    {
      id: 3,
      title: "Cupcakes",
      bgColor: "#F7F7F2",
      picOne: {url : "/assets/gr-1.svg", description:  "Candy canes tart apple pie bonbon cotton candy cotton candy toffee muffin. " },
      picTwo: {url :  "/assets/gr-2.svg", description: "Pie tart halvah dessert croissant muffin. Bonbon cookie jelly beans brownie sugar plum. "},
      picThree: {url :  "/assets/gr-3.svg", description: " Chocolate cake tiramisu pastry topping dessert cheesecake cookie chocolate cake chocolate cake bears muffin.  "},
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
