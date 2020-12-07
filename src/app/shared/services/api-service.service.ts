import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '@environment';
import { IRequestOptions } from '../interfaces/iRequestOptions.interface';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private api = environment.backendUrl + '/';

  public constructor(public http: HttpClient) {}

  /**
   * GET request
   * @param endPoint it doesn't need / in front of the end point
   * @param options options of the request like headers, body, etc.
   */
  public get < T >(endPoint: string, options ?: any): Observable < any > {
    return this.http.get < any > (this.api + endPoint, options);
  }

  /**
   * FETCH request
   * @param endPoint it doesn't need / in front of the end point
   * @param options options of the request like headers, body, etc.
   */
  public async fetch < Deal >(endPoint: string, options ?: IRequestOptions): Promise < Deal > {
    return await this.http.get < Deal > (`${this.api}${endPoint}`, options).toPromise();
  }

  /**
   * POST request
   * @param endPoint end point of the api
   * @param params body of the request.
   * @param options options of the request like headers, body, etc.
   */
  public post < T >(endPoint: string, params: object, options ?: IRequestOptions): Observable < T > {
    return this.http.post < T > (this.api + endPoint, params, options);
  }

  /**
   * PUT request
   * @param endPoint end point of the api
   * @param params body of the request.
   * @param options options of the request like headers, body, etc.
   */
  public put < T >(endPoint: string, params: object, options ?: IRequestOptions): Observable < T > {
    return this.http.put < T > (this.api + endPoint, params, options);
  }

  /**
   * DELETE request
   * @param endPoint end point of the api
   * @param options options of the request like headers, body, etc.
   */
  public delete < T >(endPoint: string, options ?: IRequestOptions): Observable < T > {
    return this.http.delete < T > (this.api + endPoint, options);
  }
}
