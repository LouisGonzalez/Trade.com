import { User } from "../user/user";

export class Product {

    id: any;
    id_post: any;
    stock: any;
    minimo_stock: any;
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


