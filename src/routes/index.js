const express = require('express');
const router = express.Router();
const useRouter = require('./user.router')


// colocar las rutas aquí
router.use(useRouter);

module.exports = router;