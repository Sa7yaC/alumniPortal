import express from "express"
import bodyParser from "body-parser"
import pg from "pg"

const port = 3000;
const app = express();

app.get('/',(req,res)=>{
    res.render("index.ejs");
})
app.listen((port), ()=>{
    console.log(`Server is running on ${port}`);
});