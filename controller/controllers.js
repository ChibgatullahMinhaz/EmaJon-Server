const { ObjectId, ClientSession } = require("mongodb");
const { map } = require("../app");
const { getDB } = require("../DB/db");

exports.getAllProducts = async (req, res) => {
    try {
        const db = getDB()
        const productCollection = db.collection('products')

        const currentPage = parseInt(req.query.page)
        const limit = parseInt(req.query.limit)
        console.log(limit, currentPage)
        const result = await productCollection.find().skip(currentPage * limit).limit(limit).toArray();
        res.status(200).json(result);
    } catch (error) {
        res.status(500).json({ message: 'feaild to load all products ' })
    }
}

exports.server = async (req, res) => {
    res.send('server is running......')
}
exports.getFullData = async (req, res) => {
    try {
        const db = getDB()
        const productCollection = db.collection('products')

        // get total count of data  
        // mongodb fn 1=> count()
        // mongodb fn 1=> estimatedDocumentCount()

        const count = await productCollection.estimatedDocumentCount()
        res.status(200).json({ count: count })
    } catch (error) {
        res.status(500).json({ message: 'feild to load all data set' })
    }
}

exports.getDataByIds = async (req, res) => {
    try {
        const db = getDB()
        const productCollection = db.collection('products')
        const ids = req.body;
        const objectIds = ids.map(id => new ObjectId(id))
        const result = await productCollection.find({_id: {$in:objectIds }}).toArray()
        res.status(200).json(result)
        console.log(result)
    } catch (error) {
        res.status(500).json({ message: 'fail to load Data' })
    }
}