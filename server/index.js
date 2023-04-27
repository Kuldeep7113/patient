var express = require('express');
const db=require('./db')
// const cors = require('cors')
const utils=require('./utils')
var app = express();
console.log('started')
// app.use(express.json());
// app.use(cors())
app.get('/', function (req, res) {
  const statement = `
  SELECT *
  FROM doctor
`
db.pool.query(statement, (error, notes) => {
res.send(utils.createResult(error, notes))
})
  });

app.listen(3000);

    

    // router.get('/', (request, response) => {
   
    //     const statement = `
    //        SELECT user_id,first_name,last_name,mobile,email,profile_pic FROM tbl_user`
    
    //     db.pool.query(
    //       statement,
    //       (error, result) => {
    //         response.send(utils.createResult(error, result))
    //       }
    //     )
    //   })