export class UserStandar {


    constructor(apellidos = "", cuenta_general = "", fecha_nacimiento = "", id_cuenta = "", nombres = ""){
        this.apellidos = apellidos;
        this.cuenta_general = cuenta_general;
        this.fecha_nacimiento = fecha_nacimiento;
        this.id_cuenta = id_cuenta;
        this.nombres = nombres;
    }

    apellidos: string;
    cuenta_general: any;
    fecha_nacimiento: any;
    id_cuenta: any;
    nombres: string;

    
}
