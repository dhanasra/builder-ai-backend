const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const _siteSchema = new Schema({
    name: {
        type: String,
        default: null,  
    },
    link: {
        type: String,
        default: null,
    },
    status: {
        type: String,
        default: 'active',
    },
    templateId: {
        type: mongoose.Schema.ObjectId,
        default: null,
    },
    resumeId: {
        type: mongoose.Schema.ObjectId,
        default: null,
    },
    created: { type: Date, default: Date.now },
    updated: { type: Date, default: Date.now }
});
const getSiteModel = () => {
    return mongoose.model("Sites", _siteSchema, "Sites");
};

module.exports = {
    getSiteModel
};