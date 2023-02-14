import React, { useEffect, useState } from "react";
import axios from "axios";
import Image from "next/image";
import { useRouter } from "next/router";
import Link from "next/link";

const ProductType = () => {
  const [productType, SetProductsType] = useState([]);
  useEffect(() => {
    const getProduct = async () => {
      const result = await axios.get(`http://localhost:9000/store/products`);
      console.log("productData--------->", result);
      const productType = await result.data.products;
      console.log("productDetails--->", productType);
      /*  return productDetails; */
      const filterProductType = productType.filter(
        (product) => product.type_id
      );
      console.log("filterProductType========", filterProductType);
      SetProductsType(filterProductType);
    };
    getProduct();
  }, []);

  return (
    <div>
      <h1>products</h1>
      {productType?.map((producttype) => (
        <Link href={`type/${producttype.type_id}`}>
          <li>
            <a>
              {producttype.title}
              {/*  {console.log("ptype====>", ptype)} */}
            </a>
          </li>
        </Link>
      ))}
    </div>
  );
};

export default ProductType;
