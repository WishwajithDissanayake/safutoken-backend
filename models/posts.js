const mongoose = require("mongoose");

const postSchema = new mongoose.Schema({

    coinIcon: {
        type: String,
        required: true
    },
    coinName: {
        type: String,
        required: true
    },
    coinSymbol: {
        type: String,
        required: true
    },
    network_chain: {
        type: String,
        required: true
    },
    listingStatus: {
        type: String,
        required: true
    },
    launchDate: {
        type: String,
        required: true
    },
    contractAddress: {
        type: String,
        required: true
    },
    coinDescription: {
        type: String,
        required: true
    },
    websiteLink: {
        type: String,
        required: true
    },
    telegramLink: {
        type: String,
        required: true
    },
    chartLink: {
        type: String,
        required: true
    },
    redditLink: {
        type: String,
        required: true
    },
    twitterLink: {
        type: String,
        required: true
    },
    discordLink: {
        type: String,
        required: true
    }
});

module.exports = mongoose.model('posts', postSchema);