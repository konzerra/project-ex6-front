import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {PageRequestDto} from "../../../common/PageRequestDto";
import {ProductPage} from "../../../domain/product/ProductPage";
import {PageEvent} from "@angular/material/paginator";
import {ProductService} from "../../../domain/product/product.service";
import {CartViewService} from "../../checkout/cart.view.service";
import {Product} from "../../../domain/product/Product";
import {MatSnackBar} from "@angular/material/snack-bar";
import {FormControl} from "@angular/forms";
import {checkFormControl} from "../../../utils/checkFormControl";


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
    value: "desc",
    viewValue: "descending"
    },
    {
      value: "asc",
      viewValue: "ascending"
    },
  ]

  selectedSorting: FormControl<string | null> = new FormControl("");
  searchText: FormControl<string | null> = new FormControl("");
  searching: boolean = false;

  pageRequestDto: PageRequestDto = {
    page: 0,
    size: 12,
    sort: [
      {
        property : "price",
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
    private _snackBar: MatSnackBar,
    private router: Router
  ) {
      this.selectedSorting.setValue( this.sorting[0].value )
      console.log("In constructor "+ this.selectedSorting.value)
  }

  private getPaginated(){
    this.productService.getPaginated(this.cat, this.sub, this.pageRequestDto).subscribe(
      {
        next:(modelPage)=>{
          this.modelPage = modelPage
        },
        error:(err)=>{
          console.error(err)
        }
      })
  }
  ngOnInit(): void {

    // Subscribe to any changes in the query parameters
    this.route.queryParams.subscribe(params => {
      this.cat = params['cat'] || 1;
      this.sub = params['sub'] || 1;
      this.pageRequestDto.page=0
      // You can log these values or do other actions here
      this.getPaginated()
      this.searchText.setValue("")
    });

    //Subscribe to changes in sorting (select)
    this.selectedSorting.valueChanges.subscribe(value=>{
      this.pageRequestDto.sort[0].direction = this.selectedSorting.value || "asc"
      this.getPaginated()
    })

  }

  onPageChange($event:PageEvent) {
    this.pageRequestDto.page = $event.pageIndex
    this.pageRequestDto.size = $event.pageSize
    if(this.searching){
      this.runSearch()
    }else{
      this.getPaginated()
    }


  }


  addToCart(product: Product) {
    this.cartService.addCart(product)
    this._snackBar.open('Added to the cart!!', 'Ok', {
      horizontalPosition: "center",
      verticalPosition:"bottom",
    });
  }

  navigateToDetails(id: number) {
    this.router.navigate(["/products/details"], {
      queryParams: {
        id: id
      }
    })
  }


  protected readonly checkFormControl = checkFormControl;

  searchClicked() {
    this.pageRequestDto.page = 0
    console.log(this.pageRequestDto)
    this.runSearch()
  }

  private runSearch(){
    if(this.searchText.value && this.searchText.value?.trim().length > 0){
      this.searching = true
      this.productService.search(this.searchText.value, this.pageRequestDto).subscribe({
        next:(modelPage)=>{
          this.modelPage = modelPage
        }
      })
    }else{
      this.searching = false
    }
  }
}
