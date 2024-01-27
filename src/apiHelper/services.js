import axios from 'axios'
export const fetchStockData = async({symbol}) => {
    try{
        const response = await axios.get(`https://www.alphavantage.co/query?function=TIME_SERIES_WEEKLY_ADJUSTED&symbol=${symbol}&apikey=BD81CTP30YAS921Y`);
        if (!response.ok || !response) {
            throw new Error(`API request failed with status: ${response.status}`);
          }
        
        const data = await response.json();
        console.log("Chart data got it",data);
        return data;
    }
    catch(e) {console.error(e);}
}
