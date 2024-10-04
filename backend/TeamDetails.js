const mongoose = require("mongoose");

const teamSchema = new mongoose.Schema({
    teamName: { type: String, required: true },
    teamLeader: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    whatsapp: { type: String, required: true },
    TeamMembers: { type: [String], required: true },
    collegeName: { type: String, required: true },
    githubAccount: { type: String, required: true },
    field: { type: String, required: true },
    year:{ type: String, required: true }
});

const TeamDetails = mongoose.model("TeamDetails", teamSchema);

module.exports = TeamDetails;
