import mongoose from "mongoose";
import dotenv from 'dotenv';
// mongoose.connect(process.env.CONNECTION_URL).then(() => {
//   console.log("database Connected");
// });
const userSchema = mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  password: { type: String, required: true },
  about: { type: String },
  tags: { type: [String] },
  joinedOn: { type: Date, default: Date.now },
});

export default mongoose.model("User", userSchema);
