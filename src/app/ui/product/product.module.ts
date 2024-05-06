import {CUSTOM_ELEMENTS_SCHEMA, NgModule} from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductRoutingModule } from './product-routing.module';
import { ProductsComponent } from './products/products.component';
import {AngularMaterialModule} from "../../angular.material/angular.material.module";
import {MatPaginatorModule} from "@angular/material/paginator";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { ProductDetailsComponent } from './product.details/product.details.component';
import {register} from "swiper/element/bundle";
import {NgxPageScrollCoreModule} from "ngx-page-scroll-core";


register();
@NgModule({
  declarations: [
    ProductsComponent,
    ProductDetailsComponent
  ],
    imports: [
        CommonModule,
        ProductRoutingModule,
        AngularMaterialModule,
        MatPaginatorModule,
        ReactiveFormsModule,
        NgxPageScrollCoreModule
    ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class ProductModule { }
