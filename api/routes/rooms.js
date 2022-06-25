import express from "express"
import { createRoom , findRoom , getRooms , updateRoom ,  deleteRoom , updateRoomAvailability , sendMail}  from '../controllers/room.js'
import { verifyAdmin , verifyUser , verifyToken } from '../utils/verfiyToken.js'

const router = express.Router()

// CREATE
router.post("/create/:hotelid" , verifyAdmin , createRoom)

// UPDATE
router.put("/:id" , verifyAdmin , updateRoom)
router.put("/availability/:id" , updateRoomAvailability)

// DELETE
router.delete("/:id/:hotelid" , verifyAdmin , deleteRoom)

// GET
router.get("/:id" , findRoom)

// GET ALL
router.get("/getRooms" , getRooms)

// SEND EMAIL
router.post("/sendMail" , sendMail)

export default router