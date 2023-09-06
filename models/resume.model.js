const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const _resumeSchema = new Schema({
    userId: {
        type: mongoose.Types.ObjectId,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    parsed: {
        type: String,
        default: null
    },
    link: {
        type: String,
        default: null
    },
    content: {
        type: String,
        default: null
    },
    schema: {
        type: Object,
        default: null
    },
    created: { type: Date, default: Date.now },
    updated: { type: Date, default: Date.now }
});
const getResumeModel = () => {
    return mongoose.model("Resumes", _resumeSchema, "Resumes");
};

module.exports = {
    getResumeModel
};