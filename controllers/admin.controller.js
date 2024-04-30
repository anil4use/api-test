const AdminService = require("../services/admin.service");

class adminController {
  async login(req, res) {
    try {
      const result = await AdminService.loginService(req, res);
      return result;
    } catch (error) {
      throw error;
    }
  }

  async getcontact(req, res) {
    try {
      const result = await AdminService.getcontactService(req, res);
      return result;
    } catch (error) {
      throw error;
    }
  }

  async getform(req, res) {
    try {
      const result = await AdminService.getformService(req, res);
      return result;
    } catch (error) {
      throw error;
    }
  }

}

module.exports = new adminController();
