const express = require('express');
const router = express.Router();

const eventsApi = require('./event.api');
router.use('/events', eventsApi);


module.exports = router;
