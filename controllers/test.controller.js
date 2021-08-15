'use strict';


const testController= (request, response) => {
    response.json('hello')
    // TODO: 
    // STEP 1: get the jwt from the headers
    // STEP 2. use the jsonwebtoken library to verify that it is a valid jwt
    // jsonwebtoken dock - https://www.npmjs.com/package/jsonwebtoken
    // STEP 3: to prove that everything is working correctly, send the opened jwt back to the front-end
  
  }


module.exports=testController;