import { User } from "../user/user";

export class Service {

    id: any;
    id_post: any;
    tipo_servicio: any;
    Post?: Post;
    
}

export class Post {
    id:                number;
    cuenta:            number;
    titulo:            string;
    fecha_publicacion: string;
    costo:             Number;
    divisa:            string;
    intercambio:       boolean;
    descripcion:       string;
    activo:            boolean;
    invisible:         boolean;

    Account: User;
}
