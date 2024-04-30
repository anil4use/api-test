const router = require("express").Router();
const HomeController = require("../controllers/home.controller");

router.post("/contact", async (req, res) => {
  try {
    const result = await HomeController.contact(req, res);
    return result;
  } catch (error) {
    log.error("Internal Server Error: ", error);
    return res.status(500).json({ error: "Internal Server Error" });
  }
});

router.post("/form", async (req, res) => {
  try {
    const result = await HomeController.form(req, res);
    return result;
  } catch (error) {
    log.error("Internal Server Error: ", error);
    return res.status(500).json({ error: "Internal Server Error" });
  }
});

// router.post("/paymentCOD", async (req, res) => {
//   try {
//     const result = await HomeController.consultancyserviceCOD(req, res);
//     return result;
//   } catch (error) {
//     log.error("Internal Server Error: ", error);
//     return res.status(500).json({ error: "Internal Server Error" });
//   }
// });

// router.post("/status/:txnId", async (req,res) => {
//   try {
//     const result = await HomeController.checkStatus(req, res);
//     return result;
//   } catch (error) {
//     log.error("Internal Server Error: ", error);
//     return res.status(500).json({ error: "Internal Server Error" });
//   }
// })


module.exports = router;
