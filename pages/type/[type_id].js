import React, { useState } from "react";
import axios, { AxiosError, AxiosInstance, AxiosRequestConfig } from "axios";
import Head from "next/head";

export async function getStaticPaths() {
  const result = await axios.get(`http://localhost:9000/store/products`);
  console.log("productData--------->", result);
  const productTypeData = await result.data.products;
  console.log("productDetails--->", productTypeData);
  /*  return productDetails; */
  const filterProductType = productTypeData.filter(
    (product) => product.type_id
  );
  console.log("filterProductType========", filterProductType);

  const productType = filterProductType.map((i) => {
    return { params: { type_id: i.type_id.toString() } };
  });

  console.log("result productData---->", productType);
  return {
    paths: productType,
    fallback: false, // can also be true or 'blocking'
  };
}

export async function getStaticProps({ params }) {
  const allProducts = await fetch(`http://localhost:9000/store/products`);
  const allProductDatajsn = await allProducts.json();
  console.log("allProducts compo", allProductDatajsn);

  let filterProduct = allProductDatajsn?.products?.filter(
    (product) => product.type_id === params.type_id
  );

  return {
    props: {
      result: filterProduct,
    }, // will be passed to the page component as props
  };
}
export default function ProductTypeIdData(props) {
  const [productType, SetProductsType] = useState(props.result);
  console.log("props---->", props);
  console.log("productType---->", productType);

  return (
    <div>
      <h1>products</h1>
      {productType?.map((products) => (
        <li>{products.title}</li>
      ))}
    </div>
  );
}
