import {Inject, Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {PageRequestDto} from "../../common/PageRequestDto";
import {Observable} from "rxjs";
import {ProductPage} from "./ProductPage";
import {ProductApi} from "./ProductApi";


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

}
