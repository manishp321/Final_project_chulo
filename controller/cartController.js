const { db } = require("../demo_db_connection");

const getCartController = async (req, res) => {
  res.render("pages/cart");
};

const postCartController = async (req, res) => {
  try {
    const data = req.body;
    const parsedData = data ? JSON.parse(data.store_purchase_data) : [];
    const addDataPromise = Promise.all(
      parsedData.map(async (data) => {
        const price = parseFloat(
          parseInt(data.quantity) * parseFloat(data.price)
        ).toString();

        await db.execute(
          `INSERT INTO \`order\` (idcustomer, iddish, itemamount, totalprice) VALUES (1, ${parseInt(
            data.id
          )}, ${parseInt(data.quantity)}, ${price})`
        );
      })
    );

    addDataPromise
      .then(() => {
        res.redirect("/khana");
      })
      .catch((err) => {
        throw new Error(err.message);
      });
  } catch (err) {
    console.log("Error", err);
  }
};

module.exports = { getCartController, postCartController };
