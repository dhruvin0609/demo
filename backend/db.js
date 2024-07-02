const mongoose = require("mongoose");
// const db =
//   "mongodb+srv://logrocket:<password>@cluster1.dydb2rf.mongodb.net/?retryWrites=true&w=majority";
/* Replace <password> with your database password */

mongoose.set("strictQuery", true, "useNewUrlParser", true);

const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI);
        console.log("MongoDB is Connected...");
    } catch (err) {
        console.error(err.message);
        process.exit(1);
    }
};
module.exports = connectDB;