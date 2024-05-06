import { Injectable } from '@angular/core';
import {Observable} from "rxjs";
import {Product} from "../product/Product";
import {ApiPathUtil} from "../../common/ApiPathUtil";
import {HttpClient} from "@angular/common/http";
import {CommentApi} from "./CommentApi";
import {Comment} from "./Comment";

@Injectable({
  providedIn: 'root'
})
export class CommentService {
  private api = CommentApi
  constructor(
    private http: HttpClient,
  ) { }

  public getAllByProductId(
    id: string
  ): Observable<Comment[]> {
    return this.http.get<Comment[]>(ApiPathUtil.insertId(this.api.getAllByProductId, id ));
  }
}
