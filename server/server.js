const port = process.env.PORT ?? 3000;
const express = require("express");
const app = express();
const cors = require("cors");
const pool = require("./db");

app.use(cors());

app.get("/todos/:userEmail", async (req, res) => {
  console.log(req.params);
  const userEmail = req.params.userEmail; // Corrected this
  try {
    const todos = await pool.query(`SELECT * FROM todo WHERE email = LOWER($1)`, [userEmail]);
    res.json(todos.rows);
  } catch (error) {
    console.error("Error fetching todos:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}/`);
});
