const mongoose = require('mongoose');
const { Schema } = mongoose;

const LibroSchema = new Schema({
    nombre: { type: String, required: true },
    imagenURL: { type: String, required: true },
    paginas: { type: Number, required: true },
    autor: { type: String, required: true }
})

module.exports = mongoose.model('Libro', LibroSchema);
