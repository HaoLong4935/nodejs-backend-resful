const mongoose = require('mongoose');
const mongoose_delete = require('mongoose-delete');

const customerSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    address: String,
    phone: String,
    email: String,
    image: String,
    description: String,
},
    //Config for Schema
    { timestamps: true }

);

customerSchema.plugin(mongoose_delete);
const Customer = mongoose.model('Customer', customerSchema);

module.exports = Customer;