import { Col } from "antd";
import Image from "next/image";
import Link from "next/link";

import styles from "./shoeItem.module.scss";

const ShoeItem = ({ item }: any) => {
  return (
    <Col span={6} className={styles.shoes_item}>
      <div>
        <Link href={"/shoes/[id]"} as={`/shoes/${item.id}`}>
          <a>
            <Image
              src={item.image}
              alt='gin'
              width={300}
              height={300}
              layout='responsive'
            />
          </a>
        </Link>
      </div>
      <h1 className={styles.title}>{item.name}</h1>
      <p className={styles.price}>$4.99</p>
      <div className={styles.des}>{item.description}</div>
    </Col>
  );
};

export default ShoeItem;
