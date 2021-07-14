const mongoose = require('mongoose');
const { Schema } = mongoose;

const QuejaSchema = new Schema({
    nombre: { type: String, required: true },
    pais: { type: String, required: true },
    observacion: { type: String, required: true }
})

module.exports = mongoose.model('Queja', QuejaSchema);