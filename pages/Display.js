import React, { useEffect, useState } from "react";
import axios from "axios";
import Image from "next/image";
import { useRouter } from "next/router";
import Link from "next/link";

const Display = () => {
  /* const [data, setData] = useState(customerData); */
  /* const router = useRouter(); */
  const [product, SetProducts] = useState([]);
  console.log("product--->", product);
  let MEDUSA_BACKEND_URL =
    /* "http://localhost:9000" */ "https://nutsarabia-backend-staging-tiz3i.ondigitalocean.app";

  /* const getData=async ()=>{
    const result =await axios.get(`${MEDUSA_BACKEND_URL}/store/products`)
  const productData = await result.data.products;
  console.log("productData--------->",productData)
  return productData;
  }
 */

  useEffect(() => {
    const getProduct = async () => {
      const result = await axios.get(`http://localhost:9000/store/products`);
      console.log("productData--------->", result);
      const productDetails = await result.data.products;
      console.log("productDetails--->", productDetails);
      /*  return productDetails; */
      SetProducts(productDetails);
      /* console.log("insidesideuseeffect-->",product); */
    };
    getProduct();
  }, []);
  console.log("outsideuseeffect-->", product);

  return (
    <>
      {/* <div>
        {product.map((pro) => (
          <li key={i + 1}>
            <div>
              <Image src={pro.images} alt={pro.title} width={35} height={35} />
            </div>
            <div>{pro.title}</div>

            {console.log("proo---", pro)}
          </li>
        ))}
        <h1>hey</h1>
      </div> */}
      <h1>heyy</h1>
      <div>
        { product?.map((product, i) => (
          <div>
            <Link href={`products/${product.id}`}>
              <a>{pro?.title}</a>
            </Link>
          </div>
        ))}
      </div>
    </>
  );
};

export default Display;
