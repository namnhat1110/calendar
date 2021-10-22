const express = require("express");
const router = express.Router();
const eventsController = require("../controllers/event.controller");

// GET /events
router.get("/", eventsController.getEvents);

// POST /events
router.post("/", eventsController.createEvent);

// PUT /events/{id}
router.put("/:eventId", eventsController.updateEvent);

// DELETE /events/{id}
router.delete(
  "/:eventId",
  eventsController.deleteEvent
);

module.exports = router;
