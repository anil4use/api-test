const log = require("../configs/logger.config");
const homeDao = require("../daos/home.dao");
const getNextSequenceValue = require('../utils/helpers/counter.util')
const { validateEmail, validateIndianMobileNumber } = require('../utils/helpers/validator.util')

class HomeService {
  async contactService(req, res) {
    try {
      const data = req.body;
      const firstname = req.body.firstname;
      const lastname = req.body.lastname;
      const email = req.body.email;
      const phone = req.body.phone;
      const message = req.body.message;

      if (!firstname || !lastname || !email || !phone || !message) {
        log.error("Error from [CONTACT SERVICE]: Please fill all details");
        return res.status(400).json({
          message: "Please fill all detail",
          status: "failed",
          data: null,
          code: 400,
        });
      }

      const allItems = await homeDao.setcontactdata(data);
      log.info('Saved successfully');
      return res.status(200).json({
        status: "success",
        code: 200,
        message: "Save data Successfully",
        data: allItems
      });
    } catch (error) {
      log.error("Error from [CONTACT SERVICE]:", error);
      throw error;
    }
  }

  async formService(req, res) {
    try {
      const plan = req.body.plan;
      const data = req.body;
      const fullname = req.body.fullname;
      const email = req.body.email;
      const phone = req.body.phone;
      const state = req.body.state;
      const city = req.body.city;
      const pincode = req.body.pincode;
      const carbuyingbudget = req.body.carbuyingbudget;
      const message = req.body.message;

      if (!fullname || !email || !phone || !state || !city || !pincode || !carbuyingbudget || !message || !plan) {
        log.error("Error from [FORM SERVICE]: All fields are required.");
        return res.status(400).json({
          message: "All fields are required.",
          status: "failed",
          data: null,
          code: 400,
        });
      }
      if (!validateEmail(email)) {
        log.error("Error from [FORM SERVICE]: Invalid Email Address");
        return res.status(400).json({
          message: "Invalid Email Address",
          status: "failed",
          data: null,
          code: 201,
        });
      }

      if (!validateIndianMobileNumber(phone)) {
        log.error("Error from [FORM SERVICE]: Invalid Mobile");
        return res.status(400).json({
          message: "Invalid Mobile Address",
          status: "failed",
          data: null,
          code: 201,
        });
      }

      // create userID 
      const randomseqnum = await getNextSequenceValue('userId');
      const user_id = 'user_' + randomseqnum;
      data.user_id = user_id;

      // if(option !== 'Basic' && option !== 'Full'){
      //   log.error("Error from [CONSULTANCY SERVICE]: Select correct option");
      //   return res.status(400).json({
      //     message: "Select correct option",
      //     status: "failed",
      //     data: null,
      //     code: 201,
      //   });
      // }
      var price = 0;
      if (plan === 'Basic') {
        price = 500;
      }else{
        price = 3000;
      }
      data.plan = plan;
      data.price = price;
      const allItems = await homeDao.setformdata(data);
      log.info('Saved successfully');
      return res.status(200).json({
        status: "success",
        code: 200,
        message: "Order create Successfully",
        data: allItems
      });
    } catch (error) {
      log.error("Error from [FORM SERVICE]:", error);
      throw error;
    }
  }
}

module.exports = new HomeService();
