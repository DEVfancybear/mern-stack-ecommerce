const mongoose = require('mongoose');

const PaymentSchema = new mongoose.Schema({
    user: {
        type: Array,
        default: []
    },
    data: {
        type: Array,
        default: []
    },
    product: {
        type: Array,
        default: []
    }


}, {timestamps: true})


module.exports = Payment = mongoose.model('payment', PaymentSchema);