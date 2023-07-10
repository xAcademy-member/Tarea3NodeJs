const { libraryProvider } = require("../providers");

const createLibrary = async (library) => {
    return await libraryProvider.createLibrary(library);
};

module.exports = { createLibrary };