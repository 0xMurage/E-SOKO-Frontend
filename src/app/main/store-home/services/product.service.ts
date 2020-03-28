import {Injectable} from '@angular/core';
import {HttpService} from '../../../singleton/services/network/http.service';
import {Observable} from 'rxjs';
import {HttpResponseModel} from '../../../singleton/models/http-response.model';
import {apiEndPoints} from '../../../singleton/helpers/constants';

@Injectable({
    providedIn: 'root'
})
export class ProductService {

    constructor(private http: HttpService) {
    }

    fetchAll(): Observable<HttpResponseModel> {
        return this.http.getResource(apiEndPoints.products, this.http.buildHttpOptions());
    }

    fetch(code: string): Observable<HttpResponseModel> {
        return this.http.getResource(`${apiEndPoints.products}/${code}`, this.http.buildHttpOptions());
    }

    fetchByCategory(id: number[]): Observable<HttpResponseModel> {
        return this.http.getResource(apiEndPoints.products, this.http.buildHttpOptions({categories: id}));
    }

}
