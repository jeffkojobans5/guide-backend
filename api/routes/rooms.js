import express from "express"
import { createRoom , findRoom , getRooms , updateRoom ,  deleteRoom , updateRoomAvailability}  from '../controllers/room.js'
import { verifyAdmin  } from '../utils/verfiyToken.js'

const router = express.Router()

// CREATE
router.post("/:hotelid" , verifyAdmin , createRoom)

// UPDATE
router.put("/:id" , verifyAdmin , updateRoom)
router.put("availability/:id" , updateRoomAvailability)

// DELETE
router.delete("/:id/:hotelid" , verifyAdmin , deleteRoom)

// GET
router.get("/:id" , findRoom)

// GET ALL
router.get("/" , getRooms)

export default router