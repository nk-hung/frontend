import {
  TwitterOutlined,
  InstagramOutlined,
  FacebookOutlined,
} from "@ant-design/icons";
import Link from "next/link";

import styles from "./header.module.scss";

const Header = () => {
  return (
    <div className={styles.header_container}>
      <div className={styles.wrapper}>
        <div className={styles.wrapper_left}>[+84]-012-345-678</div>
        <div>admin@gmail.com</div>
      </div>
      <div className={styles.wrapper_right}>
        <Link href={"http://twitter.com"}>
          <a target='_blank'>
            <TwitterOutlined style={{ color: "#fff " }} />
          </a>
        </Link>
        <Link href={"http://instagram.com"}>
          <a target='_blank'>
            <InstagramOutlined style={{ color: "#fff " }} />
          </a>
        </Link>
        <Link href={"http://facebook.com"}>
          <a target='_blank'>
            <FacebookOutlined style={{ color: "#fff " }} />
          </a>
        </Link>
      </div>
    </div>
  );
};

export default Header;
