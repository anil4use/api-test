const userDao = require("../daos/user.dao");
const homeDao = require("../daos/home.dao");
const { compareItems, hashItem } = require("../utils/helpers/bcrypt.util");
const log = require("../configs/logger.config");
const { validateEmail } = require("../utils/helpers/validator.util");

class AdminService {
    async loginService(req, res) {
        try {
            const { email, password } = req.body;
            if (!email || !password) {
                log.error("Error from [User SERVICE]: Invalid Request");
                return res.status(400).json({
                    message: "Invalid Request",
                    status: "failed",
                    data: null,
                    code: 201,
                });
            }
            if (!validateEmail(email)) {
                log.error("Error from [User SERVICE]: Invalid Email Address");
                return res.status(400).json({
                    message: "Invalid Email Address",
                    status: "failed",
                    data: null,
                    code: 201,
                });
            }
            const user = await userDao.getUserByEmail(email);
            if (user.data == null) {
                return res.status(400).json({
                    message: "Account does not exist",
                    status: "notFound",
                    code: 201,
                    data: null,
                });
            } else {
                const validateUser = await compareItems(password, user.data.password);
                if (!validateUser) {
                    log.error("Error from [Auth SERVICE]: Please enter password");
                    return res.status(400).json({
                        message: "Please enter correct password",
                        status: "failed",
                        code: 201,
                        data: null,
                    });
                }
                log.info("[Auth SERVICE]: User verified successfully");
                return res.status(200).json({
                    message: "User verified successfully",
                    status: "success",
                    code: 200,
                    data: {
                        user: {
                            userId: user.data.userId,
                            email: user.data.email,
                        },
                    },
                });
            }
        } catch (error) {
            log.error("Error from [Auth SERVICE]:", error);
            throw error;
        }
    }


    async getcontactService(req, res) {
        try {
            const allItems = await homeDao.getAllcontactdata();
            const contactdetail = allItems.data.map(item => {
                return {
                    _id: item._id,
                    firstname: item.firstname,
                    lastname: item.lastname,
                    email: item.email,
                    phone: item.phone,
                    message: item.message,
                };
            });
            res.status(200).send(contactdetail);

        } catch (error) {
            log.error("Error from [GET CONTACT SERVICE]:", error);
            throw error;
        }
    }

    async getformService(req, res) {
        try {
            const allItems = await homeDao.getAllformdata();
            const contactdetail = allItems.data.map(item => {
                return {
                    _id: item._id,
                    firstname: item.firstname,
                    lastname: item.lastname,
                    email: item.email,
                    phone: item.phone,
                    state: item.state,
                    city: item.city,
                    pincode: item.pincode,
                    carbuyingbudget: item.carbuyingbudget,
                    message: item.message,
                };
            });
            res.status(200).send(contactdetail);

        } catch (error) {
            log.error("Error from [GET CONTACT SERVICE]:", error);
            throw error;
        }
    }

}

module.exports = new AdminService();
