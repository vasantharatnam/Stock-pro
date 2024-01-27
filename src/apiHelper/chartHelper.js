
const chartHelper = (stockdata) => {

    let formattedData = {};
    let data = [];
    formattedData["name"] = "candle";

    const timestamps = stockdata.chart.result[0].timestamp;
    const open = stockdata.chart.result[0].indicators.quote[0].open;
    const high = stockdata.chart.result[0].indicators.quote[0].high;
    const low = stockdata.chart.result[0].indicators.quote[0].low;
    const close = stockdata.chart.result[0].indicators.quote[0].close;

    timestamps.forEach((item, index) => {
        data.push({
            x: new Date(timestamps[index]),
            y: [
                Math.round(open[index]*100)/100, 
                Math.round(low[index]*100)/100, 
                Math.round(high[index]*100)/100, 
                Math.round(close[index]*100)/100
            ]
        });
    });

    formattedData["data"] = data;

    console.log(formattedData,"Vachindi");

    return [formattedData];
}

export default chartHelper;