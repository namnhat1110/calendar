const mongoose = require("mongoose");
const Events = require('../models/Events')
const utilsHelper = require("../helpers/utils.helper");
const eventsController = {};

eventsController.getEvents = async (req, res, next) => {
  try {
    const events = await Events.find({ isDeleted: false });
    utilsHelper.sendResponse(res, 200, true, { events }, null, "Events found");
  } catch (error) {
    next(error);
  }
};


eventsController.createEvent = async (req, res, next) => {
  try {
    const { title, description } = req.body;

    const event = await Events.create({
      title,
      description
    });
    if (!event) return next(new Error("Create event failed"));
    utilsHelper.sendResponse(res, 200, true, { event }, null, "Event created");
  } catch (error) {
    next(error);
  }
};

eventsController.updateEvent = async (req, res, next) => {
  try {
    const eventId = req.params.eventId;
    const { title, description } = req.body;

    const event = await Events.findByIdAndUpdate(
      eventId,
      {
        title,
        description
      },
      {
        new: true,
      }
    );
    if (!event) {
      return next(new Error("Update event failed"));
    }
    utilsHelper.sendResponse(res, 200, true, { event }, null, "Event updated");
  } catch (error) {
    next(error);
  }
};

eventsController.deleteEvent = async (req, res, next) => {
  try {
    const eventId = req.params.eventId;
    const event = await Events.findById(eventId);
    if (!event) {
      return next(new Error("Event not found"));
    }
    await Events.findByIdAndUpdate(eventId, { isDeleted: true }, { new: true });
    utilsHelper.sendResponse(res, 200, true, null, null, "Event deleted");
  } catch (error) {
    next(error);
  }
};

module.exports = eventsController;
