import { Product } from "../products/product";
import { Service } from "../products/service";

export class Post {

    id: any;
    cuenta: any;
    titulo: any;
    fecha_publicacion: any;
    costo: any;
    divisa: any;
    intercambio: any;
    descripcion: any;
    activo: any;
    invisible: any;

    Article?: Product;
    Service?: Service;
}
