// const express = require('express');
// const bodyParser = require('body-parser')
// const app = express();
// const mongoose= require('mongoose');
// const Aggregator =require('./Models/news.js')

// app.use(bodyParser.json()); 
// app.use(bodyParser.urlencoded({extended:true}));
// const static= express.static("static");
// app.use("/",static);

// mongoose.connect('mongodb://localhost:27017/NewsAggregator')
//         .then(()=>console.log("DB Connected"))
//         .catch((err)=>console.log("DB Connection Failed"));

// app.get("/news",async(req,res)=>{
//       const news= await Aggregator.find()
//       console.log(news);
//       res.json(news);
// })

// app.get("/news/:id",async(req,res)=>{
//     const{id}=req.params;
//     const news=await Aggregator.findById(id)
//     res.json(news);
// })

// app.listen(3000, () => {
//     console.log("app running");
//   });



const express = require('express');
const bodyParser = require('body-parser');
const Axios = require('axios');
const mongoose = require('mongoose');
const  Aggregator =require('./Models/news')
const cors = require('cors')
const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("static"));
app.use(cors());

mongoose.connect('mongodb://localhost:27017/NewsAggregator')
    .then(() => console.log("DB Connected"))
    .catch((err) => console.log("DB Connection Failed"));

// app.get("/", async (req, res) => {
//     try {
//         const response = await Axios.get("https://newsapi.org/v2/top-headlines?country=in&category=business&apiKey=fa1ca1cc7e7e49b683adee2e4cadbf13");
//         const newsData = response.data.articles; 
//         for (let article of newsData) {
//             const news = new Aggregator({
//                 author: article.author,
//                 title: article.title,
//                 description: article.description,
//                 publishedAt: article.publishedAt,
//                 url: article.url,
//                 urlToImage:article.urlToImage,
//                 content: article.content
//             });
//             await news.save();
//         }
//         console.log("Articles saved to 'Aggregator' collection:", newsData);
//         res.send({ articles: newsData });
//     } catch (error) {
//         console.error(error);
//         res.status(500).send("An error occurred while fetching data from the API.");
//     }
// });

app.get("/news",async(req,res)=>{
      const news= await Aggregator.find({})
      console.log(news);
      res.json(news);
})


// app.get("/news/:title",async(req,res)=>{
//     const{title}=req.params;
//     const news= await Aggregator.findOne({title})
//       console.log(news);
//       res.json(news);

// })

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});
