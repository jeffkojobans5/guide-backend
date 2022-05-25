import express from "express"
import { createHotel , findHotel , getHotels , updateHotel ,  deleteHotel} from '../controllers/hotel.js'
import { verifyAdmin  } from '../utils/verfiyToken.js'

const router = express.Router()

// CREATE
router.post("/" , verifyAdmin , createHotel)

// UPDATE
router.put("/:id" , verifyAdmin , updateHotel)

// DELETE
router.delete("/:id" , verifyAdmin , deleteHotel)

// GET
router.get("/:id" , findHotel)

// GET ALL
router.get("/" , getHotels)

export default router