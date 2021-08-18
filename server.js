"use strict";

require("dotenv").config();
const express = require("express");
const cors = require("cors");
const jwt = require("jsonwebtoken");
const jwksClient = require("jwks-rsa");
const app = express();
app.use(cors());
app.use(express.json())
const PORT = process.env.PORT;

const {bookController,createBook,deleteBook,updateBook}=require('./controllers/book.controller')

const client = jwksClient({
  // this url comes from your app on the auth0 dashboard 
  jwksUri: `https://${process.env.REACT_APP_AUTH0_DOMAIN}/well/jwks.json`,
});
const getKey = (header, callback) => {
  client.getSigningKey(header.kid, function (err, key) {
    const signingKey = key.publicKey || key.rsaPublicKey;
    callback(null, signingKey);
  });
};


app.get("/",(req,res)=>res.send('hello'))
app.get("/books",bookController)
app.post("/books/create",createBook)
app.delete("/books/remove/:_id",deleteBook)
app.put("/books/update/:id",updateBook)

app.get("/test", (request, response) => {
  // TODO:
  // STEP 1: get the jwt from the headers
  // STEP 2. use the jsonwebtoken library to verify that it is a valid jwt
  // jsonwebtoken dock - https://www.npmjs.com/package/jsonwebtoken
  // STEP 3: to prove that everything is working correctly, send the opened jwt back to the front-end
  
  const token = request.headers.authorization.split(" ")[1];
  jwt.verify(token, getKey, {}, (err, user) => {
    if (err) {
      response.send("invalid token");
    }
    response.send(user);
  });

  console.log("hello World");
  response.json({ token: token });
});

app.listen(PORT, () => console.log(`listening on ${PORT}`));