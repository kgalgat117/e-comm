import { Component, OnInit } from '@angular/core';
import { RetailerService } from '../retailer.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {



  constructor(private ownerService: RetailerService) {
  }





  ngOnInit() {
  }

}
