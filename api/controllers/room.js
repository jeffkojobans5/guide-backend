import Room from "../models/Room.js";
import Hotel from "../models/Hotel.js";
import { createError } from "../utils/error.js";
import { request } from "express";
import nodemailer  from "nodemailer"


export const createRoom = async ( req ,res , next) => {
    
    const hotelId = req.params.hotelid;
    const newRoom = new Room(req.body)

    try {
        const savedRoom = await newRoom.save()

        try {
            await Hotel.findByIdAndUpdate(hotelId , {
                $push : { rooms : savedRoom._id }
            })
        } catch (err) {
            next(err)
        }
        res.status(200).json(savedRoom)
    } catch (err) {
        next(err)
    }
}  


export const updateRoom = async ( req , res , next) => {
    try{
        const updatedRoom = await Room.findByIdAndUpdate(req.params.id , {$set : req.body} , { new: true} )
        res.status(200).json(updatedRoom)
    } catch (err) {
        next(err)
    }
}

export const updateRoomAvailability = async ( req , res , next) => {
    try {
        await Room.updateOne(
          { "roomNumbers._id": req.params.id },
          {
            $push: {
              "roomNumbers.$.unavailableDates": req.body.dates
            },
          }
        );
        res.status(200).json("Room status has been updated.");
      } catch (err) {
        next(err);
      }    
}



export const findRoom = async ( req , res , next) => {
    try{
        const room = await Room.findById( req.params.id )
        res.status(200).json(room)
    } catch (err) {
        next(err)
    }
}

export const getRooms = async ( req , res , next) => {
    try{
        const room = await Room.find()
        res.status(200).json(room)
    } catch (err) {
        next(err)
    }
}

export const deleteRoom = async ( req , res , next) => {
    const hotelId = req.params.hotelid;
    try {
        await Room.findByIdAndDelete(req.params.id )
        res.status(200).json("deleted successfully")

        try {
            await Hotel.findByIdAndUpdate(hotelId , {
                $pull : { rooms : req.params.id }
            })
        } catch (err) {
            next(err)
        }
        res.status(200).json(savedRoom)
    } catch (err) {
        next(err)
    }
}



export const sendMail = async ( req , res , next) => {


try{
let { hotelname , hoteldays , startDate , email , user} = req.body
async function main() {
  let testAccount = await nodemailer.createTestAccount();

  // create reusable transporter object using the default SMTP transport
  let transporter = nodemailer.createTransport({
    secure: true, // true for 465, false for other ports
    service : "gmail",
    auth: {
      user: "guidebookingapp@gmail.com", // generated ethereal user
      pass: "nfpuxbhutgslgcza",
    },
  });

// pmdydotkdgogtdtb
  // send mail with defined transport object
  let info = await transporter.sendMail({
    from: "guidebookingapp@gmail.com", // sender address
    to: `${email}`, // list of receivers
    subject: "Booking from Guide.", // Subject line
    text: `Booking from ${hotelname}`, // plain text body
    html: `Hello ${user} <br/> You successfully booked ${hotelname} for ${hoteldays == 0 ? 1 : $hoteldays} day(s) starting from ${startDate} <br/><br/><br/> Guide Contact : +233 XXXXXXXXXX <br/> Guide Email : guide@yyy.com`, // html body
  });

  console.log("Message sent: %s", info.messageId);
  // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>

  // Preview only available when sending through an Ethereal account
  console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
  // Preview URL: https://ethereal.email/message/WaQKMgKddxQDoou...
}

main().catch(console.error);

// next()

    } catch (err) {
        next(err)
    }
}


