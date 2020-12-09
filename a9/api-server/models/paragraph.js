import mongoose from "mongoose"

const paragraphSchema = new mongoose.Schema({
    text: String,
});

export default mongoose.model('paragraph', paragraphSchema)