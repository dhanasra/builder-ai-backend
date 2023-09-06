const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const _userSchema = new Schema({
    firstName: {
        type: String,
        default: null,
    },
    lastName: {
        type: String,
        default: null,  
    },
    picture: {
        type: String,
        default: null,
    },
    customPicture: {
        type: Boolean,
        default: false,
    },
    phoneNumber: {
        type: String,
        default: false,
    },
    email: {
        type: String,
        default: null,
    },
    emailVerified: {
        type: Boolean,
        default: false
    },
    uid: {
        type: String,
        required: true
    },
    locale: {
        type: String,
        default: "en",
    },
    countryCode: {
        type: String,
        default: "IN"
    },
    dateFormat: {
        type: String,
        default: "dd/mm/yyyy"
    },
    defaultCurrency: {
        type: String,
        default: "INR"
    },
    notificationsRead: {
        type: Date,
        default: Date.now
    },
    notificationsCount: {
        type: Number,
        default: 0
    },
    lastLogin: { type: Date, default: Date.now },
    created: { type: Date, default: Date.now },
    updated: { type: Date, default: Date.now }
});
const getUserModel = () => {
    return mongoose.model("Users", _userSchema, "Users");
};

module.exports = {
    getUserModel
};