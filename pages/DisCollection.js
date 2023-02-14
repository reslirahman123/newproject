import React, { useEffect, useState } from "react";
import axios from "axios";
import Link from "next/link";

const DisCollection = () => {
  const [coll, setcoll] = useState([]);
  useEffect(() => {
    const getCollection = async () => {
      const result = await axios.get(`http://localhost:9000/store/products`);
      console.log("resultcol---->", result);
      const productTypId = result.data.products;
      const typeIdProducts = productTypId?.filter((product) => {
        return product.type_id === "ptyp_01GARH97RYR7P6150DWYS344Q0";
      });

      const typeIdProduct = [typeIdProducts[0]].map((product) => {
        return { typeId: product.type.id, title: product.type.value };
      });
      console.log("typeIds--col", typeIdProduct);
      let filterProduct = [];
      if (productTypId && productTypId.length > 0) {
        filterProduct = productTypId.filter((data) => data.collection_id);
      }
      console.log("collection--filterProduct", filterProduct);

      let collData = [];
      if (filterProduct && filterProduct.length > 0) {
        console.log("caterody--->context--filterProduct", filterProduct);
        collData = filterProduct.reduce((acc, curr, index, array) => {
          console.log("curr", curr);
          const x = acc.find((item) => item.parent === curr.collection.title);
          if (!x) {
            return acc.concat({
              icon: curr.thumbnail,
              collection_id: curr.collection_id,
              parent: curr.collection.title,
              children: array.reduce((accumulator, e) => {
                const y = accumulator.find(
                  (item) => item.title === e.type.value
                );
                if (!y && curr.collection.title === e.collection.title) {
                  console.log("accumulator", accumulator);
                  return accumulator.concat({
                    title: e.type.value,
                    type_id: e.type.id,
                  });
                } else {
                  return accumulator;
                }
              }, []),
            });
          } else {
            return acc;
          }
        }, []);
      }
      if (collData && collData.length > 0) setcoll(collData);

      // const edit = categoryData.map((data: any) => data.title, data)

      console.log("caterody--->context--getDatas", result);
      console.log("collection--after--filter", filterProduct);
    };

    getCollection();
  }, []);

  console.log("collection_id", coll);
  console.log("colllll--->", coll);
  return (
    <div>
      <h1>collection</h1>
      {coll &&
        coll.length > 0 &&
        coll.map((collect, i) => (
          <Link href={`collections/${collect.collection_id}`}>
            <a>
              <li>{collect.parent}</li>
            </a>
          </Link>
        ))}
    </div>
  );
};

export default DisCollection;
