// server.js
import express from "express";
import axios from "axios";
import cors from "cors";

const app = express();
app.use(cors());

const JSON_SERVER_URL = "http://localhost:5001"; 

app.get("/api/animals", async (req, res) => {
  try {
    const response = await axios.get(`${JSON_SERVER_URL}/animals`);
    res.json(response.data);
  } catch (err) {
    res.status(500).send("Error fetching data");
  }
});

app.listen(4000, () => {
  console.log("Proxy API running on http://localhost:4000");
});
