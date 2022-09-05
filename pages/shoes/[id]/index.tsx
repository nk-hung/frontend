import { Col } from "antd";
import { GetStaticPropsContext } from "next";
import Link from "next/link";
import Image from "next/image";
import React from "react";

import styles from "./styles.module.scss";

type Props = {};

const Item = ({ data }: any) => {
  console.log("item:", data);
  return (
    <div className={styles.shoes}>
      <Col span={6} className={styles.shoes_item}>
        <div>
          <a>
            <Image
              src={data.image}
              alt='gin'
              width={300}
              height={300}
              layout='responsive'
            />
          </a>
        </div>
        <h1 className={styles.title}>{data.name}</h1>
        <p className={styles.price}>${data.price}</p>
        <div className={styles.des}>{data.description}</div>
      </Col>
    </div>
  );
};

export default Item;

export const getStaticProps = async (context: GetStaticPropsContext) => {
  console.log("context in getStaticProps:", context?.params?.id);
  const res = await fetch(`http:localhost:5000/shop/${context?.params?.id}`);
  const data = await res.json();
  return {
    props: {
      data,
    },
  };
};

export const getStaticPaths = async () => {
  const res = await fetch("http:localhost:5000/shop/all");
  const data = await res.json();
  const paths = data.map((item: any) => {
    console.log("item:", item);
    return {
      params: {
        id: item.id.toString(),
      },
    };
  });

  console.log("paths in getStaticPaths:", paths);
  return {
    paths,
    fallback: false,
  };
};
