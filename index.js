const express = require("express");
const app = express();
const pool = require("./Database");

app.use(express.json());

//ROUTES//

//name 

app.post("/name" , async(req , res) => {
try{
    const { description } = req.body;
    const newName = await pool.query("INSERT INTO major (description) VALUES ($1) RETURNING *", 
    [description]);

}catch(err){

    console.error(err.message);

}

});
//major


app.listen(3000, () => {
    console.log("listeing to port 3000");
});