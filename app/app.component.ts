import { Component } from '@angular/core';
import {OnInit} from "@angular/core";
import {Http, Headers, RequestOptions, Response, HTTP_PROVIDERS} from "@angular/http";


import { AuthService } from './service/auth.service';


@Component({
    selector: 'my-app',
    template: '<h1>My First Angular 3 App</h1>',
    providers: [AuthService, HTTP_PROVIDERS],
})

export class AppComponent implements OnInit {

	constructor (private auth: AuthService) {}

	ngOnInit() {
        console.log('on-init')

        var ret = this.auth.login("dsadas");

        console.log('ret', ret);
    }
}
