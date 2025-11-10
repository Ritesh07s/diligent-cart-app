const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());

// Sample product data (like Amazon-style products)
const products = [
  {
    id: 1,
    name: "Laptop",
    price: 75000,
    image: "https://m.media-amazon.com/images/I/61Dw5Z8LzJL._SL1500_.jpg",
  },
  {
    id: 2,
    name: "Headphones",
    price: 2500,
    image: "https://m.media-amazon.com/images/I/61CGHv6kmWL._SL1500_.jpg",
  },
  {
    id: 3,
    name: "Mouse",
    price: 700,
    image: "https://m.media-amazon.com/images/I/61LtuGzXeaL._SL1500_.jpg",
  },
  {
    id: 4,
    name: "Smartwatch",
    price: 5000,
    image: "https://m.media-amazon.com/images/I/71Zl3Cq4kPL._SL1500_.jpg",
  },
  {
    id: 5,
    name: "Bluetooth Speaker",
    price: 1800,
    image: "https://m.media-amazon.com/images/I/71vZypjNkPS._AC_SL1500_.jpg",
  },
  {
    id: 6,
    name: "Keyboard",
    price: 1200,
    image: "https://m.media-amazon.com/images/I/71k3fJh5EEL._AC_SL1500_.jpg",
  },
];

// API route to send product list to frontend
app.get("/api/products", (req, res) => {
  res.json(products);
});

// Root route to test server
app.get("/", (req, res) => {
  res.send("✅ Backend server is running fine!");
});

// Start the backend server
const PORT = 5000;
app.listen(PORT, () => console.log(`✅ Server running on port ${PORT}`));
