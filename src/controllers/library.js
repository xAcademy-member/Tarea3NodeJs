const { libraryService } = require("../services");

const createLibrary = async (req, res) => {
    try {
        const newLibrary = await libraryService.createLibrary(req.body);
        res.json(newLibrary);
    } catch (err) {
        res.status(500).json({ action: "createLibrary", error: err.message });
    }
};

module.exports = { createLibrary };