import axios from "axios";

export default async function handler(req, res){
    const result =await axios.get(`https://b8fc-2405-201-e026-60d7-a5d1-d1b3-8836-3d1e.in.ngrok.io/api/login-details`)
    const customerData = await result.data;
    const custData = customerData.data.map((i) =>{
      return {id: i.id, ...i.attributes};
    }); 
    /* res.json(result); */
    console.log("result---->", custData);
  }
