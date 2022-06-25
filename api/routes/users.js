import express from "express"
import { createUser , findUser , getUsers , updateUser ,  deleteUser , nonAdmin} from '../controllers/user.js'
import { verifyToken, verifyUser , verifyAdmin  } from '../utils/verfiyToken.js'

const router = express.Router()

// router.get("/checkauthentication" , verifyToken , (req , res) => {
//     res.send("hello user you are login ")
// });

// router.get("/checkuser/:id" , verifyUser , (req , res) => {
//     res.send("hello user you are login and you can delete your account ")
// });

// router.get("/checkadmin/:id",verifyAdmin , async (req , res) => {
//     res.send("hello admin and you can login and you can delete your account ")
// });

// CREATE
router.post("/" , verifyUser , createUser)

// UPDATE
router.put("/:id" , verifyUser , updateUser)

// DELETE
router.delete("/:id" , verifyUser , deleteUser)

// GET
router.get("/:id" , verifyUser , findUser)


// GET
router.get("/find/nonadmin" , verifyAdmin , nonAdmin)

// GET ALL
router.get("/" , verifyAdmin , getUsers)

export default router