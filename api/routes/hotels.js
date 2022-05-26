import express from "express"
import { createHotel , findHotel , getHotels , updateHotel ,  deleteHotel , countByCity} from '../controllers/hotel.js'
import { verifyAdmin  } from '../utils/verfiyToken.js'

const router = express.Router()

// CREATE
router.post("/" , verifyAdmin , createHotel)

// UPDATE
router.put("/:id" , verifyAdmin , updateHotel)

// DELETE
router.delete("/:id" , verifyAdmin , deleteHotel)

// GET
router.get("/find/:id" , findHotel)

// GET ALL
router.get("/" , getHotels)


router.get("/countByCity" , countByCity)
router.get("/countByType" , getHotels)

export default router