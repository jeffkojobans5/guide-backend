import express from "express"
import { countByType , createHotel , findHotel , getHotels , updateHotel ,  deleteHotel , countByCity , getHotelRooms} from '../controllers/hotel.js'
import { verifyAdmin  } from '../utils/verfiyToken.js'

const router = express.Router()

// CREATE
router.post("/createHotel" , verifyAdmin , createHotel)

// UPDATE
router.put("/:id" , verifyAdmin , updateHotel)

// DELETE
router.delete("/:id" , verifyAdmin , deleteHotel)

// GET
router.get("/find/:id" , findHotel)

// GET ALL
router.get("/allHotels" , getHotels)

router.get("/countByCity" , countByCity)
router.get("/countByType" , countByType)
router.get("/room/:id" , getHotelRooms)

export default router