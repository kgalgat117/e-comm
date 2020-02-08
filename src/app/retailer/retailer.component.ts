import { Component, OnInit } from '@angular/core';
import { AuthService } from '../shared/shared.module';

@Component({
    selector: 'retailer-home',
    templateUrl: './retailer.component.html',
    styleUrls: ['./retailer.component.css']
})

export class RetailerComponent implements OnInit {

    constructor(private authService: AuthService) {
    }

    logout() {
        this.authService.logoutUser()
    }

    signOut() {
        this.authService.logoutUser()
    }

    ngOnInit() { }
} 