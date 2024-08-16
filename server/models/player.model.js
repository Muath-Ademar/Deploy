const mongoose = require('mongoose');

const PlayerSchema = new mongoose.Schema(
  {
    name: { type: String,  
        required: [true, 'Player name is required'], 
        minlength: [3, 'Name must be at least 3 characters long'], },
    position: { type: String, 
        required: [true, 'Posistion is required'], 
        minlength: [5, 'Position must be at least 5 characters long'],}
  },
  { timestamps: true }
);

const Player = mongoose.model('Player', PlayerSchema);

module.exports = Player;
