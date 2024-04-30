const bcrypt = require("bcryptjs");
const AdminModel = require("../models/admin.model");

async function seedAdmin() {
 
  const existingAdmin = await AdminModel.findOne({ isAdmin: true });
  if (!existingAdmin) {
    const adminCredentials = {
      email: "Admin@gmail.com",
      password: "adminpassword",
      isAdmin: true,
    };

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(adminCredentials.password, salt);
    adminCredentials.password = hashedPassword;

    await AdminModel.create(adminCredentials);

    console.log("Admin user created successfully");
  } else {
    console.log("Admin user already exists");
  }

}

// seedAdmin().then(() => {
//   console.log("Admin seeding completed");
//   process.exit(0);
// }).catch((err) => {
//   console.error("Error seeding admin:", err);
//   process.exit(1);
// });

module.exports = seedAdmin;