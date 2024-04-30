const ContactModel = require("../models/contact.model");
const FormModel = require("../models/form.model");
const log = require("../configs/logger.config");
class homeDao {
  async setcontactdata(data) {
    try {
      const saveItem = new ContactModel({
        firstname: data.firstname,
        lastname: data.lastname,
        email: data.email,
        phone: data.phone,
        message: data.message,
      });

      await saveItem.save();
      return {
        message: "save successful",
        status: "success",
        data: saveItem,
        code: 200,
      };
    } catch (error) {
      log.error("Error", error);
      throw error;
    }
  }


  async setformdata(data) {
    try {
      const saveItem = new FormModel({
        user_id: data.user_id,
        fullname: data.fullname,
        email: data.email,
        phone: data.phone,
        state: data.state,
        city: data.city,
        pincode: data.pincode,
        carbuyingbudget: data.carbuyingbudget,
        message: data.message,
        paymentType: "Cash-On-Delivery",
        plan: data.plan,
        status: "UnPaid",
        totalPrice: data.price,
      });
      await saveItem.save();
      return {
        message: "save successful",
        status: "success",
        data: saveItem,
        code: 200,
      };
    } catch (error) {
      log.error("Error", error);
      throw error;
    }
  }

  async getAllcontactdata() {
    try {
      const allItems = await ContactModel.find();
      if (!allItems) {
        return {
          message: "Data not found",
          status: "failed",
          data: null,
          code: 201,
        };
      } else {
        return {
          message: "getting data success",
          status: "success",
          data: allItems,
          code: 200,
        };
      }
    } catch (error) {
      log.error("Error in getting document: ", error);
      throw error;
    }
  }


  async getAllformdata() {
    try {
      const allItems = await FormModel.find();
      if (!allItems) {
        return {
          message: "Data not found",
          status: "failed",
          data: null,
          code: 201,
        };
      } else {
        return {
          message: "getting data success",
          status: "success",
          data: allItems,
          code: 200,
        };
      }
    } catch (error) {
      log.error("Error in getting document: ", error);
      throw error;
    }
  }


  async SeachByID(user_id) {
    try {
      const allItems = await FormModel.findOne({ user_id: user_id });
      if (!allItems) {
        return {
          message: "UserID not found",
          status: "failed",
          data: null,
          code: 201,
        };
      } else {
        return {
          message: "getting UserID success",
          status: "success",
          data: allItems,
          code: 200,
        };
      }
    } catch (error) {
      log.error("Error", error);
      throw error;
    }
  }

}

module.exports = new homeDao();
