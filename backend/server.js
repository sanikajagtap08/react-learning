const express = require("express");
const cors = require("cors");

const app = express();

// Middlewares
app.use(cors());
app.use(express.json());

// Fake DB data
const stats = {
  totalUsers: 1230,
  revenue: 42500,
  newOrders: 75,
};

const users = [
  { id: 1, name: "John Doe", role: "Admin", status: "Active" },
  { id: 2, name: "Emma Smith", role: "User", status: "Pending" },
  { id: 3, name: "Alex Johnson", role: "Editor", status: "Blocked" },
];

// Routes
app.get("/api/stats", (req, res) => {
  res.json(stats);
});

app.get("/api/users", (req, res) => {
  res.json(users);
});

const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Backend running on http://localhost:${PORT}`);
});
