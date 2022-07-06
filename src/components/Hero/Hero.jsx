import style from "./hero.module.scss";
import { motion} from 'framer-motion/dist/framer-motion'
import { opacityVariants, heroTitleVariants } from "../../utils/Animations";

export default function Hero() {
  return (
    <motion.section variants={opacityVariants}
    initial="initial"
    animate="animate" 
    className={style.hero}>
      <motion.h1   
      variants={heroTitleVariants}
      initial="initial"
      animate="animate"
      whileHover="hover"
    className={style.heroTitle}>Cakes and Stuff</motion.h1>
      <div className={style.heroText}>
        <p>In the mood for something sweet?</p>
        <p>You've come to the right place!</p>
      </div>
    </motion.section>
  );
}
