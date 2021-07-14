const Queja = require('../models/queja');

const quejaCtrl = {};

quejaCtrl.getQuejas = async (req, res) => {
    const quejas = await Queja.find();
    res.json(quejas);
}

quejaCtrl.createQueja = async (req, res) => {
    const queja = new Queja.find(req.body);
    await queja.save();
    res.json({status: 'Queja guardada'});
}

quejaCtrl.getQueja = async (req, res) => {
    const queja = await Queja.findById(req.params.id);
    res.json(queja);
}

quejaCtrl.editQueja = async (req, res) => {
    const { id } = req.params;
    const queja = {
        nombre: req.body.nombre,
        pais: req.body.pais,
        observacion: req.body.observacion
    };
    await Queja.findByIdAndUpdate(id, {$set: libro}, {new: true});
    res.json({status: 'Queja actualizada'})
}

quejaCtrl.deleteQueja = async (req, res) => {
    await Queja.findByIdAndRemove(req.params.id);
    res.json({status: 'Queja eliminada'});
}

module.exports = quejaCtrl;