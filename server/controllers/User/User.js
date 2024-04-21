// CRUD Opertions.
//  Read update delete
import express from "express"
import UserModel from "../../models/user.js";

const router = express.Router();

router.post("/register", async (req, res) => {
    try {
        let UserkanseJoDataArra = req.body;
        await UserModel.create(UserkanseJoDataArra)

        res.status(200).json({ msg: "User Created Successfully" })

    } catch (error) {
        console.log(error);
        res.status(500).json({ msg: "Internal Server Error" })

    }
})

router.get("/getallUser", async (req, res) => {
    try {
        let collectAllUser = await UserModel.find({});
        res.status(200).json(collectAllUser)
    } catch (error) {
        console.log(error);
        res.status(500).json({ msg: "Internal Server Error" })
    }
})

router.delete("/deleteAllUser", async (req, res) => {
    try {
        await UserModel.deleteMany({});
        res.status(200).json({ msg: "User deleted Successfully" })

    } catch (error) {
        console.log(error);
        res.status(500).json({ msg: "Internal Server Error" })
    }
})

export default router;