import {Component, ElementRef, Inject, OnInit, Renderer2, ViewChild} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {ProductService} from "../../../domain/product/product.service";
import {Product} from "../../../domain/product/Product";
import {PageRequestDto} from "../../../common/PageRequestDto";
import {ProductPage} from "../../../domain/product/ProductPage";
import {PageEvent} from "@angular/material/paginator";
import {CartViewService} from "../../checkout/cart.view.service";
import {MatSnackBar} from "@angular/material/snack-bar";
import {CommentService} from "../../../domain/comment/comment.service";
import {Comment} from "../../../domain/comment/Comment";
import {PageScrollService} from "ngx-page-scroll-core";
import {AuthService} from "../../../domain/auth/auth.service";
import {DialogsService} from "../../../shared/dialogs.service";

@Component({
  selector: 'app-product.details',
  templateUrl: './product.details.component.html',
  styleUrls: ['./product.details.component.scss']
})
export class ProductDetailsComponent implements OnInit {

  @ViewChild('scrollContainer')
  private scrollContainer: ElementRef | undefined;

  product: Product | null = null;
  comments: Comment[] = [];
  rating:number = 0.0
  cat: number  = 1;
  sub: number  = 1;


  constructor(
    private route: ActivatedRoute,
    private productService: ProductService,
    private cartService: CartViewService,
    private _snackBar: MatSnackBar,
    private router: Router,
    private commentService: CommentService,
    private authService: AuthService,
    private dialogsService: DialogsService,
  ) {
  }
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
  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      let id:string | undefined = params['id']
      if(id){
        this.productService.getById(id).subscribe({
          next:(v)=>{
            this.product = v
            this.cat = v.category
            this.sub = v.subCategory
            this.productService.getPaginated(this.cat, this.sub, this.pageRequestDto).subscribe({
              next:(modelPage)=>{
                this.modelPage = modelPage
                console.log(modelPage)
              },
              error:(err)=>{

              },
              complete:()=>{

              }
            })
          },
        })
        this.commentService.getAllByProductId(id).subscribe({
          next:(v)=>{
            this.comments = v
            this.countRating(v)
          }
        })
      }
    })
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
      verticalPosition:"bottom",
    });
  }

  onSortChange(event: any) {
    console.log(event)
  }

  navigateToDetails(id: number) {
    this.router.navigate(["/products/details"], {
      queryParams: {
        id: id
      }
    })

  }

  buy(product: Product) {
    this.cartService.addCart(product)
    this.router.navigate(["/checkout/payment"])
  }

  private countRating(comments: Comment[]) {

    this.rating = 0.0
    comments.forEach(comment => {
      this.rating += comment.rating
    })
    this.rating = (this.rating/comments.length)

  }

  leaveComment() {
    if(!this.authService.isLoggedIn()){
      this.dialogsService.openInfoDialog("You need to sign in")
      return
    }
    this.dialogsService.openComment().afterClosed().subscribe({
      next:(v)=>{
        if(v){
          this.dialogsService.openInfoDialog("Your comment will be published after moderation \n")
        }
      }
    })
  }
}
