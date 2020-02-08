import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OwnerRoutingModule, OwnerRoutingComponents } from './retailer-routing.module';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [
    OwnerRoutingComponents
  ],
  imports: [
    CommonModule,
    OwnerRoutingModule,
    SharedModule
  ]
})
export class RetailerModule { }
