const Customer = require("../models/Customer");

const createCustomerService = async (customerData) => {
    try {
        let result = await Customer.create({
            name: customerData.name,
            address: customerData.address,
            phone: customerData.phone,
            email: customerData.email,
            description: customerData.description,
            image: customerData.image
        })
        return result;

    } catch (error) {
        console.log(error);
        return null;
    }
}

const createArrayCustomerService = async (arr) => {
    try {
        let result = await Customer.insertMany(arr);
        return result;
    } catch (error) {
        console.log("Error :", error);
        return null;
    }
}

const getAllCustomersService = async () => {
    try {
        let result = await Customer.find({});
        console.log(result);
        return result
    }
    catch (error) {
        console.log(error);
        return null;
    }

}

const putUpdateOneCustomerService = async (id, name, email) => {
    try {
        let result = await Customer.updateOne({ _id: id }, { name, email });
        return result;
    }

    catch (error) {
        console.log("Error: ", error);
        return null;
    }
}

module.exports = {
    createCustomerService, createArrayCustomerService, getAllCustomersService, putUpdateOneCustomerService
}
