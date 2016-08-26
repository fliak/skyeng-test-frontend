import {Injectable} from "@angular/core";
import {Http, Headers, RequestOptions, Response, HTTP_PROVIDERS} from "@angular/http";
import {Observable} from "rxjs/Observable";
import 'rxjs/Rx'; //без этого импорта у нас любое общение с API будет заканчиваться ошибками. Временная фича, которую обещают найти и устранить
import { Inject} from '@angular/core';


@Injectable()

export class AuthService {

    constructor (private http: Http) {}

    private loginUrl = 'http://localhost:8000/login';

   
    public login(username: string, password?: string) {
        console.log('LOGIN', this.http);

        const body = new URLSearchParams();
        body.set('_username', username);


       if (password)    {
           body.set('_password', password);
       }


       let headers = new Headers();
       headers.append('Content-Type', 'application/x-www-form-urlencoded');
       
       return this.http.post(this.loginUrl, body.toString(), {
           headers: headers
       }).toPromise().then(function (argument) {
           console.log('then', arguments);
           // body...
       }, function (argument) {
           console.log('reject', arguments);
           // body...
       });
    }

    

}
