import {Injectable} from "@angular/core";
import {Http, Response} from "@angular/http";
import 'rxjs/add/operator/map';
import {Jugador}  from "./jugador.model";

@Injectable()
export class UserService {
  constructor(private http: Http) {}

  getUser() {
    return this.http.get('/api/user')
      .map((res: Response) => res.json().response);
  }
}