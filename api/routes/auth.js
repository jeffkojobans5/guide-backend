import express from "express"


const router = express.Router()

router.get('/' , ( req , res )=> {
    res.send("This is our Auth point")
})
router.get('/register' , ( req , res )=> {
    res.send("This is our Register endpoint")
})


export default router