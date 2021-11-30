require("dotenv").config();

const express = require("express");

const server = express();

server.listen(process.env.PORT, () => {
  console.log(`server running on port ${process.env.PORT}`);
});

const products = [
  {
    id: 1,
    name: "pit",
    size: "1 quadrlion",
  },
  {
    id: 2,
    name: "safemoon",
    size: "565 trlion",
  },
  {
    id: 3,
    name: "shib inu",
    size: "450 trlion",
  },
];

//fetching API we created
server.get("/products", (req, res) => {
    console.log(req);
    res.status(200).json(products)
})

server.post("/products", (req, res) => {
    res.status(201).json([{size: "1 quadrlion"}])
    console.log(products);
})
