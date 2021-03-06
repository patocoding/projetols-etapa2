const Dev = require('../models/Dev')
const parseStringAsArray = require('../models/utils/ParseStringAsArray')

module.exports = {
    async index(request,response){
        //buscar devs num raio de 10km, filtro de distancia e filtro de techs
        const { latitude, longitude, techs} = request.query;
        const techsArray = parseStringAsArray(techs);
        const devs = await Dev.find({
            techs: {
                $in: techsArray,
            },
            location: {
                $near: {
                    $geometry: {
                        type:'Point',
                        coordinates:[longitude,latitude],
                    },
                    $maxDistance: 10000,    
                }
            }
        });
        return response.json({ devs });
    }
}