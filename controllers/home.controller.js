const HomeService = require("../services/home.service");

class HomeController {
  async contact(req, res) {
    try {
      const result = await HomeService.contactService(req, res);
      return result;
    } catch (error) {
      throw error;
    }
  }

  async form(req, res) {
    try {
      const result = await HomeService.formService(req, res);
      return result;
    } catch (error) {
      throw error;
    }
  }

}

module.exports = new HomeController();
