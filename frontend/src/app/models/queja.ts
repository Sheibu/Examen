export class Queja {

    constructor(_id = '', nombre = '', pais = '', observacion = ''){
        this._id = _id;
        this.nombre = nombre;
        this.pais = pais;
        this.observacion = observacion;
    }

    _id: string;
    nombre: string;
    pais: string;
    observacion: string;
}
