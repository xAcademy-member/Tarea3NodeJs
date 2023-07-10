const express = require('express');
const { userRouter, libraryRouter, bookRouter } = require('./routes');

const app = express();
const { initializeDB } = require('./config/db-config');
const PORT = 8090;


/* Application Middlewares */
app.use(express.json());

/* Rutas */
app.use("/user", userRouter);
app.use("/library", libraryRouter);
app.use("/book", bookRouter);


/* Server */
app.listen(PORT, async () => {
    await initializeDB();
    console.log(`Server running in ${PORT}`);
});