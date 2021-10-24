export class UserCompany {

    constructor(empresa = "", cuenta_general = "", id_cuenta = "", mision = "", vision = "", descripcion = ""){
        this.empresa = empresa;
        this.cuenta_general = cuenta_general;
        this.id_cuenta = id_cuenta;
        this.mision = mision;
        this.vision = vision;
        this.descripcion = descripcion;
    }
    

    empresa: string;
    cuenta_general: any;
    id_cuenta: any;
    mision: string;
    vision: string;
    descripcion: string;
}
