const { uploadSingleFile } = require("../serviecs/fileService");
const { createCustomerService, createArrayCustomerService, getAllCustomersService, putUpdateOneCustomerService } = require("../serviecs/customerService");
const Customer = require("../models/Customer");
//Viết theo chuẩn OBject
// {key : value}
module.exports = {
    postCreateCustomer: async (req, res) => {

        let { name, address, phone, email, description } = req.body;
        //console.log(">>> name:", name, description);
        let imageUrl = "";

        // image: String,
        if (!req.files || Object.keys(req.files).length == 0) {
            //do nothing
        } else {
            //console.log(">>Check Req.file", req.files.image);
            let result = await uploadSingleFile(req.files.image);
            imageUrl = result.path;
        }

        let customerData = {
            name,
            address,
            phone,
            email,
            description,
            image: imageUrl
        }
        console.log(">>> customerData: ", customerData);
        let customer = await createCustomerService(customerData)

        return res.status(200).json({
            EC: 0,
            data: customer
        })
    },

    postCreateArrayCustomer: async (req, res) => {
        let customers = await createArrayCustomerService(req.body.customers)
        if (customers) {
            return res.status(200).json({
                EC: 0,
                data: customers
            })
        } else {
            return res.status(200).json({
                EC: -1,
                data: customers
            })
        }
    },

    getAllCustomers: async (req, res) => {
        let result = await getAllCustomersService();

        return res.status(200).json({
            EC: 0,
            data: result
        })
    },

    putupdateOneCustomer: async (req, res) => {
        let { id, name, email } = req.body;
        let result = await putUpdateOneCustomerService(id, name, email);
        console.log("Request customer body:", req.body);

        return res.status(200).json({
            errorCode: 0,
            data: result
        });
    }
}