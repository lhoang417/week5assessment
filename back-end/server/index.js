const express = require("express");
const cors = require("cors");
const ctrl = require("./controller.js");
const app = express();
const {getCompliment, getFortune, getForm, getImg, getItem, addItem, deleteItem} = ctrl;


app.use(cors());

app.use(express.json()); // When we want to be able to accept JSON.

app.get("/api/compliment", getCompliment);
app.get("/api/fortune", getFortune);
app.get("/api/data", getForm);
app.get("/api/pictures", getImg);
app.get("/api/items", getItem);
app.post("/api/items", addItem);
app.delete("/api/items/:indexPos", deleteItem)

app.listen(4000, () => console.log("Server running on 4000"));
