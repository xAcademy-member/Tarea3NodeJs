const express = require('express');
const app = express();
const PORT = 8090;
const { initializeDB } = require('./config/db-config');


/* Rutas */


/* Application Middlewares */
app.use(express.json());

/* Server */
app.listen(PORT, async () => {
    await initializeDB();
    console.log(`Server running in ${PORT}`);
});