import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Rspn } from './shared/response';

import 'rxjs/add/operator/map';

@Injectable()
export class LoginService {

    constructor(private http: HttpClient) { }

    login(username: string, password: string) {
        return this.http.post<Rspn<String>>(`${environment.urlBase}/users/login`, { username: username, password: password });
    }

}
