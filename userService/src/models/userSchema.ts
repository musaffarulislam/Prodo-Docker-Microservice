import * as mongoose from 'mongoose';

const Schema = mongoose.Schema;

const schema = new Schema({
    name: String,
    email: String,
    phoneNumber: Number,
    password: String
},{timestamps: true})

export default mongoose.model('users', schema);