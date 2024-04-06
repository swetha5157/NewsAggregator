// const mongoose = require('mongoose');
// const Schema = mongoose.Schema
// const Aggregator = new Schema({
//     author:String,
//     title:String,
//     description:String,
//     publishedAt:String,
//     content:String
// })

// const newsmodel = mongoose.model("Aggregator",Aggregator);
// module.exports=newsmodel;


// const mongoose = require('mongoose');

// const aggregatorSchema = new mongoose.Schema({
//     author: String,
//     title: String,
//     description: String,
//     publishedAt: Date,
//     content: String
// });

// const Aggregator = mongoose.model('Aggregator', aggregatorSchema);

const mongoose = require('mongoose');

const aggregatorSchema = new mongoose.Schema({
    author: String,
    title: String,
    description: String,
    publishedAt: Date,
    url:String,
    urlToImage:String,
    content: String
});

module.exports = mongoose.model('Aggregator', aggregatorSchema);