import mongoose, { Types } from "mongoose";
import UniqueValidator from "mongoose-unique-validator";

const UserSchema = mongoose.Schema({
    _id: Number,
    name: {
        type: String, // Fixed: 'Type' → 'type'
        required: [true, "name is required"],
        trim: true
    },
    email: {
        type: String, // Fixed
        required: [true, "email is required"],
        trim: true,
 
        lowercase: true
    },
    message: {
        type: String, // Fixed
        required: [true, "message is required"],
        trim: true,
        lowercase: true
    },
    role: String,
    status: Number,
    info: String
});

const UserSchemaModel = mongoose.model("user-collection", UserSchema);
export default UserSchemaModel;
