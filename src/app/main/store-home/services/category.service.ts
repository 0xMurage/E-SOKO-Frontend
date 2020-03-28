import {Injectable} from '@angular/core';
import {HttpService} from '../../../singleton/services/network/http.service';
import {Observable} from 'rxjs';
import {HttpResponseModel} from '../../../singleton/models/http-response.model';
import {apiEndPoints} from '../../../singleton/helpers/constants';

@Injectable({
    providedIn: 'root'
})
export class CategoryService {

    constructor(private http: HttpService) {
    }

    fetchAll(): Observable<HttpResponseModel> {
        return this.http.getResource(apiEndPoints.categories, this.http.buildHttpOptions());
    }
}
