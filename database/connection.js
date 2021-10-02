
const { Pool, Client } = require('pg')
// pools will use environment variables
// for connection information



const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'postgres',
  password: 'admin',
  port: 5432,
})


// ca nous retourne tous les rows dans la database postgres dans le schema Blog dans la table posts
pool.query('SELECT * from "Blog".posts', (err, res) => {
 if(err){

  console.log(err)
 }else{


  console.log(res.rows)
 }
  pool.end()
})  
// you can also use async/await
// const res = await pool.query('SELECT NOW()')
// await pool.end()
// // clients will also use environment variables
// // for connection information
// const client = new Client()
// await client.connect()
// const res = await client.query('SELECT NOW()')
// await client.end()
     

//module.exports = dbconnect;