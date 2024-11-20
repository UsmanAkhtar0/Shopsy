const mongoose = require("mongoose");
const initData = require("./data");
const Product = require("../models/product.js");


main().then(() => {
    console.log("Connected to DB");
}).catch((err) => {
    console.log(err);
});

async function main() {
    await mongoose.connect("mongodb://localhost:27017/productsDB");
};

const initDB = async () => {
    await Product.deleteMany({});
    await Product.insertMany(initData.data);
    console.log(" Data was intialised");
};

initDB();