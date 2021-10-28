export class Afiliate {

    id_usuario: string;
    id_cuenta_empresarial: string;
    id: string;
    fecha_cierre: string;
    fecha_afiliacion: string;
    StandardAccount: StandardAccountAfiliate;

}

export class StandardAccountAfiliate{
    Account: AccountAfiliate;
    apellidos: string;
    cuenta_general: any;
    fecha_nacimiento: any;
    id_cuenta: any;
    nombres: string;
}

export class AccountAfiliate{
    id_cuenta: any;
    user: string;
    password: string;
    fecha_creacion: string;
    pais: string;
    telefono: string;
    correo: string;
    extension: string;
    verificado: any;
    activa: any;

    nombre: string;
    apellido: string;
    fecha_nacimiento: any;
}
