const router = require("express").Router();
const adminController = require("../controllers/admin.controller");

router.post("/login", async (req, res) => {
  try {
    const result = await adminController.login(req, res);
    return result;
  } catch (error) {
    log.error("Internal Server Error: ", error);
    return res.status(500).json({ error: "Internal Server Error" });
  }
});

router.post("/getallcontact", async (req, res) => {
  try {
    const result = await adminController.getcontact(req, res);
    return result;
  } catch (error) {
    log.error("Internal Server Error: ", error);
    return res.status(500).json({ error: "Internal Server Error" });
  }
});

router.post("/getallform", async (req, res) => {
  try {
    const result = await adminController.getform(req, res);
    return result;
  } catch (error) {
    log.error("Internal Server Error: ", error);
    return res.status(500).json({ error: "Internal Server Error" });
  }
});


module.exports = router;
