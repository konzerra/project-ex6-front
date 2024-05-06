import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {PageRequestDto} from "../../common/PageRequestDto";
import {Observable} from "rxjs";
import {ProductPage} from "./ProductPage";
import {ProductApi} from "./ProductApi";
import {ApiPathUtil} from "../../common/ApiPathUtil";
import {Product} from "./Product";


@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private api = ProductApi
  constructor(private http: HttpClient) {

  }

  public getPaginated(
    cat: number,
    sub: number,
    pageRequestDto: PageRequestDto
  ): Observable<ProductPage> {
    return this.http.get<ProductPage>(this.api.getPaginated, {
      params: {
        cat: cat,
        sub: sub,
        pageRequestDto : encodeURIComponent(JSON.stringify(pageRequestDto))
      }
    });
  }

  public search(
    searchText: string,
    pageRequestDto: PageRequestDto
  ): Observable<ProductPage> {
    return this.http.get<ProductPage>(this.api.search, {
      params: {
        searchText: searchText,
        pageRequestDto : encodeURIComponent(JSON.stringify(pageRequestDto))
      }
    });
  }

  public getById(
    id: string
  ): Observable<Product> {
    return this.http.get<Product>(ApiPathUtil.insertId(this.api.getById, id ));
  }

}
