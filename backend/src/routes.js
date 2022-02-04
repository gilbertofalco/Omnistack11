const express = require("express");
const IncidentController = require("./controllers/IncidentController");
const OngController = require("./controllers/OngController");
const ProfileController = require("./controllers/ProfileController");
const SessionController = require('./controllers/SessionController')

const routes = express.Router();

routes.get("/ongs", OngController.index);
routes.get("/incidents", IncidentController.index);
routes.get('/profile', ProfileController.index);

routes.post("/ongs", OngController.create);
routes.post("/incidents", IncidentController.create);
routes.post('/sessions', SessionController.create);

routes.delete('/incidents/:id', IncidentController.delete);

module.exports = routes;
