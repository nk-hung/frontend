import Link from "next/link";
import {
  UserOutlined,
  ShoppingCartOutlined,
  SearchOutlined,
} from "@ant-design/icons";

import styles from "./navbar.module.scss";

const Navbar = () => {
  return (
    <div className={styles.nav}>
      <div className={styles.logo}>LOGO</div>
      <div className={styles.main_menu}>
        <nav>
          <ul>
            <li>
              <Link href={"/home"}>Home</Link>
            </li>
            <li>
              <Link href={"/shoes"}>Shop</Link>
            </li>
            <li>
              <Link href={"/about"}>About</Link>
            </li>
            <li>
              <Link href={"/latest"}>Latest</Link>
            </li>
            <li>
              <Link href={"/blogs"}>Blogs</Link>
            </li>
            <li>
              <Link href={"/pages"}>Pages</Link>
            </li>
            <li>
              <Link href={"/contact"}>Contact</Link>
            </li>
            <li>
              <Link href={"/add"}>Add</Link>
            </li>
          </ul>
        </nav>
      </div>
      <div className={styles.header_right}>
        <div>
          <UserOutlined style={{ fontSize: 20 }} />
        </div>
        <div>
          <ShoppingCartOutlined style={{ fontSize: 20 }} />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
