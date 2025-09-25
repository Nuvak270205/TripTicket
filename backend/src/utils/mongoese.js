const mongoose  = require("mongoose");

module.exports = {
    mutipleMongooseToObject: function (mongooseArrays) {
        return mongooseArrays.map(item => item.toObject());
    },

    mongooseToObject: function (mongoose) {
        return mongoose ? mongoose.toObject() : mongoose;
    }
}