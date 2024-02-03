const mongoose=require('mongoose')

mongoose.connect('mongodb+srv://mariamzareen184:Mongodb@movieticketbooking.idh14ck.mongodb.net/')
.then(()=>{
    console.log('database successfully connected')
})
.catch(()=>{
    console.log("error connecting to the database")
})

const loginSchema=mongoose.Schema({
    email:{
        type:String,
        required:true
    },
    password:{
        type:String,
        requried:true
    }
})

const loginTable=mongoose.model("Login Table",loginSchema);



const movieSchema=mongoose.Schema({
    title:String,
    link:String,
    rating:String,
    genre:[String]
})

const movieTable=mongoose.model('Movie Table',movieSchema);
const theatreSchema=mongoose.Schema({
    "theatre name":String,
    "location":String,
    "movie name":String,
    "date":String,
    "slot":Object,
    "price":Number
})
const theatreTable=mongoose.model('Theatre Table',theatreSchema);

const bookedDataSchema=mongoose.Schema({
    "email":String,
    "movieName":String,
    "date":String,
    "day":String,
    "slot":String,
    "theatreName":String,
    "theatreLocation":String,
    "noOfSeats":Number,
    "price":Number
})
const bookedData=mongoose.model('Booked Seats',bookedDataSchema)

module.exports = { loginTable, movieTable, theatreTable,bookedData };