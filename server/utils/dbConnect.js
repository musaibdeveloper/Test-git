import mongoose from "mongoose";
import config from "config"

const dbConnect = async () => {
    try {
        // One line Syntax
        await mongoose.connect(config.get("DB_URI"));
        console.log("DB connected Successfully");
    } catch (error) {
        console.log(error)
    }
};

dbConnect();
