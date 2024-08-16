const PlayerController =require('../controllers/player.controller')
module.exports = function(app){
    app.post('/api/players', PlayerController.createPlayer)
    app.get('/api/players', PlayerController.getAllPlayers)
    app.get('/api/player/:id', PlayerController.getPlayer)
    app.delete('/api/player/:id', PlayerController.deletePlayer)
}