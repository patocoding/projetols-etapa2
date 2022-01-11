const { Router } = require('express');
const routes = Router();
const DevKontroller = require('./kontrollers/DevKontroller')
const SearchController = require('./kontrollers/SearchController')

routes.get('/devs', DevKontroller.index)
routes.post('/devs', DevKontroller.store)
routes.get('/search', SearchController.index)
    
module.exports = routes;