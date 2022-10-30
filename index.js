const express = require("express");
const app = express();
const pool = require("./queries");
const port = 3000;

app.use(express.json());

//ROUTES//


//get(one user)

app.get('/user/:id', async(req, res) =>{
    const {id} = req.params;
    try{

        const getuser = await pool.query('SELECT * FROM users WHERE id = $1', [id]);

        res.json(getuser.rows[0]);

    }
    catch(err){
        console.error(err.message);
    }
});

//get(all users)

app.get('/user', async(req, res) =>{
    
    try{
        const getusers = await pool.query('SELECT name,major FROM users');
        res.json(getusers.rows);
    }
    catch(err){
        console.error(err.message);
    }


});

//post(create name, major)

app.post("/user" , async(req , res) => {
try{
    const {name, major } = req.body;
    const Newuser = await pool.query("INSERT INTO users (name, major) VALUES ($1 , $2) RETURNING *", 
    [name , major]);
    res.json(Newuser.rows);
}catch(err){

    console.error(err.message); 
}

});

// put(update a user )

app.put("/user/:id", async(req,res) => {
    const {id}= req.params;
    const {name, major} = req.body;

    try{
        
        const updateuser = await pool.query('UPDATE users SET name = $1, major = $2 WHERE id = $3', [name, major, id]);

        res.json("User was modified");
}
catch(err){
    console.error(err.message);
}

});

//Delete a user

app.delete("/user/:id", async(req, res)=>{
    const {id} = req.params;

    try{
        
        const deleteuser = await pool.query('DELETE FROM users WHERE id = $1', [id]);
        res.json("A user was deleted");
    }
    catch(err){
        console.error(err.message)
    }

});

app.listen(3000, () => {
    console.log("listeing to port 3000");
});