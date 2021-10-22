export class User {

    constructor(user="", password="", id_cuenta="" ,fecha_creacion="" ,pais="" ,telefono="" ,correo="", extension="", activa=true, nombre = "", apellido = "", fecha_nacimiento = ""){
        this.user = user;
        this.password = password;
        this.id_cuenta = id_cuenta; 
        this.fecha_creacion = fecha_creacion; 
        this.pais = pais; 
        this.telefono = telefono; 
        this.correo = correo; 
        this.extension = extension;
        this.activa = activa;
        this.nombre = nombre;
        this.apellido = apellido;
        this.fecha_nacimiento = fecha_nacimiento;
    }

    id_cuenta: any;
    user: string;
    password: string;
    fecha_creacion: string;
    pais: string;
    telefono: string;
    correo: string;
    extension: string;
    activa: any;

    nombre: string;
    apellido: string;
    fecha_nacimiento: any;

    
}
