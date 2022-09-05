import Image from "next/image";
import Link from "next/link";

import styles from "./slider.module.scss";

const Slider = () => {
  return (
    <div className={styles.slider_container}>
      <div className={styles.slider_wrapper}>
        <div className={styles.left}>
          <p className={styles.title}>Select your new perfect style</p>
          <div className={styles.description}>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tempora,
            labore? Corrupti deserunt modi quo sequi consequatur suscipit
          </div>
          <button
            className={styles.btn}
            onClick={() => console.log("click btn")}
          >
            Shop
          </button>
        </div>
        <div>
          <Image
            src={
              "https://luxshopping.vn/Uploads/News/fossil-machine-brown-watch-42mm.jpg"
            }
            alt='Fossil'
            width={500}
            height={800}
          />
        </div>
      </div>
    </div>
  );
};

export default Slider;
