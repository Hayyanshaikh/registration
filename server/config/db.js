const mongoose = require('mongoose');
const mongoURI = 'mongodb://localhost:27017/ecommerce';

const connectDB = async () =>{
	try{
		await mongoose.connect(mongoURI);
		console.log(`connection successfully`);
	} catch(err) {
		console.log(`connection error: ${err}`);
	}
}

module.exports = connectDB;