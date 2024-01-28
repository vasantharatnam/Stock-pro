import {React,useState,useEffect} from 'react'
import Header from './Header'
import StockNews from './StockNews'
import Layout from './Layout';
import StockNewsitem from './StockNewsitem';
import axios from 'axios';
const Home = ({isLoged,changeArti,articleData}) => {


  const options = {
    method: 'POST',
    url: 'https://apidojo-yahoo-finance-v1.p.rapidapi.com/news/v2/list',
    params: {
      region: 'US',
      snippetCount: '28'
    },
    headers: {
      'content-type': 'text/plain',
      'X-RapidAPI-Key': '39a6df8df7mshd6a294058ad683ap10351ejsn7809988b2971',
      'X-RapidAPI-Host': 'apidojo-yahoo-finance-v1.p.rapidapi.com'
    },
    data: 'Pass in the value of uuids field returned right in this endpoint to load the next page, or leave empty to load first page'
  };
  



  const [articles , setArticles] = useState([]);
  const [logStatus, setLogStatus] = useState(false);
  
  useEffect(() => {   
    const arcles = async() => {
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
          setArticles(data);
          changeArti(data);
        }
        catch (err) {
          console.log(err)
        }
      };
      setArticles(articleData)
      setLogStatus(isLoged)
      console.log("In stockNews",logStatus);
      if(articles.length===0)
      {
         arcles();
      }
      
  },[isLoged]);





  return (
    <Layout isLoged={logStatus} articleData={articles}>
    <div>
      <Header isLoged={logStatus} />
      <div className='container my-3 pb-5'>
       <div className="pb-3" style = {{display: 'flex', justifyContent: 'space-between'}}>
        <h2 style={{color: 'white'}}>Stock News</h2>
       </div>
      <div className  ="row" style={{justifyContent: 'space-between'}} >

        {articles.slice(0,4).map((article) =>{
          return(
            <div className="col-md-3">
            <StockNewsitem title={article.content.title} description={article.content.provider.displayName} imageurl={article.content.thumbnail.resolutions[0].url} newsurl={article.content.previewUrl} isLoged = {logStatus}/>
            </div>
          )
        })}
      </div>
      </div>
    </div>
    </Layout>
  )
}

export default Home
