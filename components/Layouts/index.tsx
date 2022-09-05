import React from "react";
import Header from "../Header";
import Navbar from "../Navbar";
import styles from "./styles.module.scss";

const Layout = ({ children }: any) => {
  return (
    <div className={styles.container}>
      <Header />
      <Navbar />
      <main className={styles.main}>{children}</main>
    </div>
  );
};

export default Layout;
