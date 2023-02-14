import React, { useState } from "react";
import axios, { AxiosError, AxiosInstance, AxiosRequestConfig } from "axios";
import Head from "next/head";

export async function getStaticPaths() {
  const result = await axios.get(`http://localhost:9000/store/products`);
  console.log("productData--------->", result);
  const productDetails = await result.data.products;
  console.log("productDetails--->", productDetails);
  const productData = productDetails.map((i) => {
    return { params: { id: i.id.toString() } };
  });

  console.log("result productData---->", productData);
  return {
    paths: productData,
    fallback: false, // can also be true or 'blocking'
  };
}

export async function getStaticProps({ params }) {
  const getproductId = await fetch(
    `http://localhost:9000/store/products/${params.id}`
  );

  console.log("id-getstaticprops product---->", getproductId);

  return {
    props: {
      result: await getproductId.json(),
    }, // will be passed to the page component as props
  };
}

export default function DisplayProduct(props) {
  /* console.log("proppppsss", props); */
  const [data, setData] = useState(props.result.product);
  /* console.log("dataaassss in product", data); */

  return (
    <>
      <Head>
        <meta name="description" content="Generated by create next app" />
        <link
          href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css"
          rel="stylesheet"
          integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC"
          crossorigin="anonymous"
        ></link>
        <script
          src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.9.2/dist/umd/popper.min.js"
          integrity="sha384-IQsoLXl5PILFhosVNubq5LC7Qb9DXgDA9i+tQ8Zj3iwWAwPtgFTxbJ8NT4GN1R8p"
          crossorigin="anonymous"
        ></script>
        <script
          src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.min.js"
          integrity="sha384-cVKIPhGWiC2Al4u+LWgxfKTRIcfu0JTxR+EQDz/bgldoEyl4H0zUF0QKbrJ0EcQF"
          crossorigin="anonymous"
        ></script>
        <link rel="preconnect" href="https://fonts.googleapis.com"></link>
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossorigin
        ></link>
        <link
          href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;400;500;600;700;800&family=Oswald&display=swap"
          rel="stylesheet"
        ></link>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
        ></link>
      </Head>
      <div>
        <h1>hey</h1>
        <span>{data.description}</span>
      </div>
    </>
  );
}
