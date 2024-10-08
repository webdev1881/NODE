const { Pool } = require('pg')

// console.log( process.env.POSTGRES_URL )
 
const pool = new Pool({
  connectionString: "postgres://default:V7EX1vBTayFI@ep-holy-breeze-a479smir.us-east-1.aws.neon.tech:5432/verceldb?sslmode=require"
})

pool.connect((err) => {
    if (err) throw err
    console.log("Connect to PostgreSQL successfully!")
})

module.exports = pool