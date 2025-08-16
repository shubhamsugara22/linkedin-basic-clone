import mongoose from 'mongoose';

const connectionString = 'mongodb+srv://${process.env.MONGO_DB_USERNAME}:${process.env.MONGO_DB_PASSWORD}@ssugara-linkedin-clone-2.global.mongocluster.cosmos.azure.com/?tls=true&authMechanism=SCRAM-SHA-256&retrywrites=false&maxIdleTimeMS=120000'

if (!connectionString) {
	throw new Error("please provide a valid connection string");
}

const connectDB = async () => {
	if(mongoose.connection?.readyState >= 1) {
		// console.log("Already connected to mongodb");
		return;
	}

	try {
		console.log("Connecting to mongodb");
		await mongoose.connect(connectionString);
	} catch (error) {
		console.log("Error connecting to mongodb:" , error);
	}
};