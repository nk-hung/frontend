import { SearchOutlined } from "@ant-design/icons";
import { useState } from "react";

import { Row } from "antd";
import ShoeItem from "../ShoeItem";
import styles from "./shoeList.module.scss";

const ShoeList = ({ data }: any) => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleChangeInput = (e: any) => {
    e.preventDefault();

    const { name, value } = e.target;
    console.log(name, value);
    setSearchTerm(value);
  };
  return (
    <div className={styles.shoes}>
      <div className={styles.shoes_container}>
        <div className={styles.shoes_search}>
          <input
            type='text'
            className={styles.input}
            placeholder='Search ...'
            onChange={handleChangeInput}
            name={"searchTerm"}
            value={searchTerm}
          />
          <SearchOutlined style={{ fontSize: 20 }} />
        </div>
        <Row className={styles.shoes_wrapper}>
          {data.map((item: any, index: number) => (
            <ShoeItem item={item} key={index} />
          ))}
        </Row>
      </div>
    </div>
  );
};

export default ShoeList;
