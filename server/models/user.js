import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    firstname: {
        type: String,

    },
    lastname: {
        type: String,

    },
    age: {
        type: Number,

    },
    number: {
        type: Number,

    }
});

const UserModel = mongoose.model('User', userSchema);

export default UserModel;
