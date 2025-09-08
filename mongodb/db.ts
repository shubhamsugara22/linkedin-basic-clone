import mongoose from 'mongoose';

const username = process.env.MONGO_USERNAME;
const password = process.env.MONGO_PASSWORD;

const connectionString =  `mongodb+srv://${username}:${password}@linkedin-clone-ssugara-db.mongocluster.cosmos.azure.com/?tls=true&authMechanism=SCRAM-SHA-256&retrywrites=false&maxIdleTimeMS=120000`;

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

export default connectDB;