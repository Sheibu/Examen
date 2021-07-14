const mongoose = require('mongoose');

const URI = 'mongodb+srv://usuario_Prueba:ruZf3wmxatkm6Uck@cluster0.snnnu.mongodb.net/Examen';

mongoose.connect(URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then(db => console.log('Base de datos conectada'))
    .catch(err => console.error(err));

module.exports = mongoose;


