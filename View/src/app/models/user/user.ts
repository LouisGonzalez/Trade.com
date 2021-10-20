export class User {

    constructor(user="", password="", id_cuenta="" ,fecha_creacion="" ,pais="" ,telefono="" ,correo="", extension=""){
        this.user = user;
        this.password = password;
        id_cuenta=id_cuenta; 
        this.fecha_creacion=fecha_creacion; 
        this.pais=pais; 
        this.telefono=telefono; 
        this.correo=correo; 
        this.extension=extension;
    }

    id_cuenta: any;
    user: string;
    password: string;
    fecha_creacion: string;
    pais: string;
    telefono: string;
    correo: string;
    extension: string;

}
