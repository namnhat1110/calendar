const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const eventSchema = Schema(
    {
        title: { type: String, require: true },
        description: { type: String, require: false },
        category: {
            type: String,
            enum: [
                "appointment",
                "event",
            ],
        },
        isDeleted: { type: Boolean, default: false },
    },
    { timestamps: true }
);

const Events = mongoose.model("Events", eventSchema);

module.exports = Events;