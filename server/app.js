import express from "express";
import config from "config"
import "./utils/dbConnect.js"

// Import User from Controllers. 
import UserRoutes from "./controllers/User/User.js"

// Create an Express application. 
const app = express();

/// IF YOU WANT TO ACCEPT DATA FROM CLIENT
// ADD THIS LINE IN YOUR CODE in app.js
app.use(express.json());


// User Route Access. 
app.use("/user", UserRoutes);


const PORT = config.get("PORT");


// Define a simple route
app.get("/", (req, res) => {
    res.send(`Ahmed is learning express`);
})

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

