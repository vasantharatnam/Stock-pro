import React, {  useEffect, useState } from 'react'
import StockNewsitem from './StockNewsitem'
import Layout from './Layout';
import axios from 'axios';

// {isLooged})

export default function StockNews({ onLogout,isLoged,articleData}) {

  const [loginStatus, isLoggedIn] = useState(false);
  const [articles , setArticles] = useState([]);
  const options = {
    method: 'POST',
    url: 'https://apidojo-yahoo-finance-v1.p.rapidapi.com/news/v2/list',
    params: {
      region: 'US',
      snippetCount: '28'
    },
    headers: {
      'content-type': 'text/plain',
      'X-RapidAPI-Key': '706e8c7b8amsh44bfa36be5004fdp17a575jsn37fa017a74cf',
      'X-RapidAPI-Host': 'apidojo-yahoo-finance-v1.p.rapidapi.com'
    },
    data: 'Pass in the value of uuids field returned right in this endpoint to load the next page, or leave empty to load first page'
  }; 

    useEffect(() => {   
    const artles = async() => {
        try {
          
          const response = await axios.request(options);
          let dr = await response.data;
          console.log("In Home1",response);
          console.log("In Home",dr);
          if (dr.status!='OK') {
            throw new Error(`API request failed with status: ${response.status}`);
          }
  
          // Parse the JSON response
          // let data = await response.json();
          let data = dr.data.main.stream;
          // data = data.feed;
          // console.log("Just got",data.feed);
          console.log("Got data",data);
          setArticles(data)
        }
        catch (err) {
          console.log(err)
        }
      };
      isLoggedIn(isLoged)
      setArticles(articleData);
      console.log("In stockNews",loginStatus);
      console.log("In stockNews",articles);
      // artles();
  },[isLoged]);

  return (
    <Layout onLogout = {onLogout} isLoged = {loginStatus}>
    <div className='container my-3 pb-5'>
       <div className="pb-3" style = {{display: 'flex', justifyContent: 'space-between'}}>
        <h2 style={{color: 'white'}}>Stock News</h2>
       </div>
      <div className  ="row" style={{justifyContent: 'space-between'}} >

        {articles.map((article,index) =>{
          return(
            <div className="col-md-3">
            <StockNewsitem key={index} title={article.content.title} description={article.content.provider.displayName} imageurl={article.content.thumbnail.resolutions[0].url} newsurl={article.content.previewUrl} isLoged = {loginStatus}/>
            </div>
          )
        })}
      </div>
    </div>
   </Layout>
  )
}
