const mongoose = require("mongoose");

const connectionDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI);

    console.log("DB connected!", conn.connection.host);
  } catch (error) {
    console.log("Error", error.message);
    process.exit(1);
  }
};

module.exports= connectionDB