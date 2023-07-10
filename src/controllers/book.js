const { bookService } = require("../services");

const createBook = async (req, res) => {
    try {
        const newBook = await bookService.createBook(req.body);
        res.json(newBook);
    } catch (err) {
        res.status(500).json({ action: "createBook", error: err.message });
    }
};

module.exports = { createBook };