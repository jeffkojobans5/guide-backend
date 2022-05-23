import express from "express"
import { createUser , findUser , getUsers , updateUser ,  deleteUser} from '../controllers/User.js'
import { verifyToken } from '../utils/verfiyToken.js'

const router = express.Router()

router.get("/checkauthentication" , verifyToken , (req , res) => {
    res.send("hello user you are login ")
});

// CREATE
router.post("/" , createUser)

// UPDATE
router.put("/:id" , updateUser)

// DELETE
router.delete("/:id" , deleteUser)

// GET
router.get("/:id" , findUser)

// GET ALL
router.get("/" , getUsers)

export default router