const { db } = require("../demo_db_connection");

const purchaseIndex = async (req, res) => {
  try {
    const [purchasedData] = await db.execute("SELECT * FROM `order`");

    res.render("pages/login", { data: purchasedData });
  } catch (err) {
    console.log("Error", err);
  }
};

module.exports = { purchaseIndex };
