import express from "express"
import { createHotel , findHotel , getHotels , updateHotel ,  deleteHotel} from '../controllers/hotel.js'

const router = express.Router()

// CREATE
router.post("/" , createHotel)

// UPDATE
router.put("/:id" , updateHotel)

// DELETE
router.delete("/:id" , deleteHotel)

// GET
router.get("/:id" , findHotel)

// GET ALL
router.get("/" , getHotels)

export default router