import Head from "next/head";
import Styles from "../styles/Crud.module.css";
import { Space, Table, Tag } from "antd";
import "antd/dist/antd.css";
import axios, { AxiosError, AxiosInstance, AxiosRequestConfig } from "axios";
import { useRouter } from "next/router";

import React, { useState, useEffect } from "react";

/* export async function getServerSideProps(req, res){
  const result =await axios.get(`https://b8fc-2405-201-e026-60d7-a5d1-d1b3-8836-3d1e.in.ngrok.io/api/login-details`)
  const customerData = await result.data;
  const custData = customerData.data.map((i) =>{
    return {id: i.id, ...i.attributes};
  }); 
  /* res.json(result); */
/*  console.log("result---->", custData); */
//}

export async function getStaticProps(context) {
  const result = await axios.get(
    `https://611a-2405-201-e026-60d7-40ef-22c0-dd46-d5a7.in.ngrok.io/api/login-details`
  );
  const customerData = await result.data;
  const custData = customerData.data.map((i) => {
    return { id: i.id, ...i.attributes };
    /*  setData( custData.data.data.map(row =>({FirstName:row.FirstName,LastName:row.LastName })) ); */
  });

  console.log("result---->", custData);

  return {
    props: {
      customerData: custData,
    }, // will be passed to the page component as props
  };
}

/* export async function getStaticProps(context) {
  return {
    // Passed to the page component as props
    props: { post: {} },
  }
} */

const Tabless = ({ customerData }) => {
  const [data, setData] = useState(customerData);
  const router = useRouter();

  const getData = async () => {
    const result = await axios.get(`http://localhost:9000/store/products`);
    const customerData = await result.data;
    return customerData;
  };
  console.log("getData----->", getData);

  const deleteDetail = async (details) => {
    const del = await axios
      .delete(
        `https://611a-2405-201-e026-60d7-40ef-22c0-dd46-d5a7.in.ngrok.io/api/login-details/${details}`
      )
      .then(() => {
        return getData;
      });
  };

  const columns = [
    /*  {
       title:"Id",
       dataIndex: "id",
       key: "id",
     }, */
    {
      title: "First Name",
      dataIndex: "FirstName",
      /* key: "FirstName", */
      /* render: (text) => <a>{text}</a>, */
    },
    {
      title: "Second Name",
      dataIndex: "LastName",
      /*  key: "LastName", */
    },
    {
      title: "Status",
      dataIndex: "status",
      /* key: "status", */
    },
    {
      title: "Created At",
      dataIndex: "createdAt",
      /*  key: "createdAt", */
    },
    {
      title: "Updated At",
      dataIndex: "updatedAt",
      /* key: "updatedAt", */
    },
    {
      title: "Published At",
      dataIndex: "publishedAt",
      /* key: "publishedAt", */
    },
    {
      title: "Action",
      dataIndex: "id",
      render: (details) => (
        <Space size="middle">
          {/* <a>Invite {record.name}</a> */}
          <button onClick={() => router.push(`/${details}`)}>Edit</button>
          <button
            onClick={() => {
              deleteDetail(details);
              router.push("/Tabless");
            }}
          >
            Delete
          </button>
        </Space>
      ),
    },
  ];

  /*  const url = `https://47d0-2405-201-e026-60d7-a011-17c9-1310-5f1.in.ngrok.io/api/login-details`;

  useEffect(() => {
    
    fetch(`47d0-2405-201-e026-60d7-a011-17c9-1310-5f1.in.ngrok.io/api/login-details`)
    .then(response => {
      const posts = response.data;
      setData(posts);
      console.log("postss---->",posts);
    })

  }, []) */

  /* useEffect(() => {
    
      fetch(`47d0-2405-201-e026-60d7-a011-17c9-1310-5f1.in.ngrok.io/api/login-details`)
        .then((res) => res.json())
        .then((data) => {
          setData(data)
         console.log("data---->", data)
        })
    }, [])
 */
  /* const getData =(custData)=>{
      
      setData( custData.data.data.map(row =>({FirstName:row.FirstName,LastName:row.LastName })) );
              
  }
     */
  /* const datas =(custData) => [
      {
        id: id ,
        FirstName: FirstName,
        LastName: LastName,
        status: status,
        createdAt: createdAt,
        updatedAt: updatedAt,
        publishedAt: publishedAt,
        tags: ["nice", "developer"],
      },
    ];
   */

  return (
    <>
      <Head>
        <script src="https://unpkg.com/axios/dist/axios.min.js"></script>
      </Head>
      <Table columns={columns} dataSource={data} />;
    </>
  );
};

/* export async function getServerSideProps(context) {
  return {
    props: {}, // will be passed to the page component as props
  }
} */

export default Tabless;
