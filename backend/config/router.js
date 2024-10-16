const { Router } = require('express');
const userRouter = require('../routes/userRoutes.js');

const routes = Router();

routes.use('/users', userRouter);

module.exports = routes;
