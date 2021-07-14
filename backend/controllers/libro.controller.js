const Libro = require('../models/libro');

const libroCtrl = {};

libroCtrl.getLibros = async (req, res) => {
    const libros = await Libro.find();
    res.json(libros);
}

libroCtrl.createLibro = async (req, res) => {
    const libro = new Libro(req.body);
    await libro.save();
    res.json({'status': 'Libro guardado'});
}

libroCtrl.getLibro = async (req, res) => {
    const libro = await Libro.findById(req.params.id);
    res.json(libro);
}

libroCtrl.editLibro = async (req, res) => {
    const { id } = req.params;
    const libro = {
        nombre: req.body.nombre,
        imagenURL: req.body.imagenURL,
        paginas: req.body.paginas,
        autor: req.body.autor
    };
    await Libro.findByIdAndUpdate(id, {$set: libro}, {new: true});
    res.json({status: 'Libro actualizado'});
}

libroCtrl.deleteLibro = async (req, res) => {
    await Libro.findByIdAndRemove(req.params.id);
    res.json({status: 'Libro eliminado'});
}

module.exports = libroCtrl;