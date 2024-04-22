import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {PageRequestDto} from "../../../common/PageRequestDto";
import {ProductPage} from "../../../domain/product/ProductPage";
import {PageEvent} from "@angular/material/paginator";
import {ProductService} from "../../../domain/product/ProductService";
import {CartViewService} from "../../checkout/cart.view.service";
import {Product} from "../../../domain/product/Product";
import {MatSnackBar} from "@angular/material/snack-bar";


interface Sorting{
  value: string
  viewValue: string
}


@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent  implements OnInit{
  cat: number  = 1;
  sub: number  = 1;
  sorting: Sorting[] = [
  {
    value: "asc",
    viewValue: "ascending"
  },
  {
    value: "desc",
    viewValue: "descending"
  },
]
  selectedSorting: Sorting = this.sorting[0]


  pageRequestDto: PageRequestDto = {
    page: 0,
    size: 12,
    sort: [
      {
        property : "id",
        direction: "desc"
      }
    ]
  }
  modelPage: ProductPage = {
    content: [],
    empty: true,
    first: true,
    number: 0,
    numberOfElements: 0,
    size: 12,
    totalElements: 0,
    totalPages: 0
  }
  pageSizeOptions = [3, 12, 27, 99];

  constructor(
    private route: ActivatedRoute,
    private productService: ProductService,
    private cartService: CartViewService,
    private _snackBar: MatSnackBar
  ) {

  }

  ngOnInit(): void {
    // Subscribe to any changes in the query parameters
    this.route.queryParams.subscribe(params => {
      this.cat = params['cat'] || 1;
      this.sub = params['sub'] || 1;
      // You can log these values or do other actions here
      this.productService.getPaginated(this.cat, this.sub, this.pageRequestDto).subscribe(
      {
        next:(modelPage)=>{
          this.modelPage = modelPage
          console.log(modelPage)
        },
        error:()=>{

        },
        complete:()=>{

        }
      })
    });

  }

  onPageChange($event:PageEvent) {
    this.pageRequestDto.page = $event.pageIndex
    this.pageRequestDto.size = $event.pageSize
    this.productService.getPaginated(this.cat, this.sub, this.pageRequestDto).subscribe(
      {
        next:(modelPage)=>{
          this.modelPage = modelPage
        },
        error:()=>{

        },
        complete:()=>{

        }
      })
  }


  addToCart(product: Product) {
    this.cartService.addCart(product)
    this._snackBar.open('Added to the cart!!', 'Ok', {
      horizontalPosition: "center",
      verticalPosition:"top",
    });
  }

  onSortChange(event: any) {
    console.log(event)
  }
}
