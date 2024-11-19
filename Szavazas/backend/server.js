const express = require('express');
const mysql = require('mysql');
const cors = require('cors');

const app = express()
app.use(cors())

const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "vote",


})

app.get('/', (re, res)=> {
    return res.json("backend");
})

app.get('/users', (req, res)=> {
  const sql = "SELECT * from users"
  db.query(sql, (err, data)=> {
    
  })
})

app.listen(8081, ()=> {
    console.log("Figyel az öreg");
})