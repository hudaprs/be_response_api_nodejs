const express = require("express");
const app = express();

// Import the responseApi.js
const { success, error, validation } = require("./responseApi");

// Success request
app.get("/api/success", (req, res) => {
  res
    .status(200)
    .json(success("OK", { data: "Some random data" }, res.statusCode));
});

// Error request
app.get("/api/error", (req, res) => {
  res.status(500).json(error("Something went wrong", res.statusCode));
});

// Validation request
app.get("/api/validation", (req, res) => {
  res.status(422).json(validation({ username: "Username is required" }));
});

// Run the server
app.listen(5000, () => console.log(`Server running in 5000`));
