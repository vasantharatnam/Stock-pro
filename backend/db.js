const mongoose = require("mongoose");
// const mongoURL = `mongodb://localhost:27017/stockmarket`;
const mongoURL = `mongodb://surya:ratnam@ac-gaxce4l-shard-00-00.zuyvr7m.mongodb.net:27017,ac-gaxce4l-shard-00-01.zuyvr7m.mongodb.net:27017,ac-gaxce4l-shard-00-02.zuyvr7m.mongodb.net:27017/?ssl=true&replicaSet=atlas-1359x2-shard-0&authSource=admin&retryWrites=true&w=majority`;

const connectToMongo = () => {
    return  mongoose.connect(mongoURL)
        .then(() => console.log("Connected to MongoDB"))
        .catch((error) => console.log("Error connecting to MongoDB", error));
}

module.exports = connectToMongo