const { getDB } = require("../DB/db");

exports.getAllProducts = async (req, res) => {
    const db = getDB()
    const productCollection = db.collection('products')
    const result = await productCollection.find().toArray();
    res.send(result);
}