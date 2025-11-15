const {Pool} =require('pg')
const pool = new Pool({
    connectionString:'postgresql://postgres:12345@localhost:5432/test'

})
module.exports ={
    pool
}