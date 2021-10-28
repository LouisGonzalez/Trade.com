import { User } from "./user/user";

export class Notifications {
    id:                 number;
    usuario_recibe:     string;
    usuario_envia:      string;
    tipo:               string;
    descripcion:        string;
    leido:              boolean;
    Account:            User;
}


//solo mostrar el ultimo mensaje que un usuario le envio a otro