import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../../../environments/environment';
import {UserService} from '../auth/user.service';
import {HttpOptions} from '../../models/http-options.model';
import {Observable} from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class HttpService {

    constructor(private http: HttpClient, private authUserService: UserService) {
        this.baseUrl = environment.apiBaseUrl;

    }

    protected baseUrl: string;

    /**
     * Get a resource
     * @param uri : request URI
     * @param httpOptions : Options such as headers to send with request
     */
    getResource(uri: string, httpOptions: HttpOptions): Observable<any> {
        return this.http.get(this.baseUrl + uri, httpOptions);
    }

    /**
     * Create a new resource using POST http method
     * @param uri : a URI for the resource access
     * @param payload  : key ~value pair of the data
     * @param httpOptions : http options such as headers to send with request
     */
    createResource(uri: string, payload: object, httpOptions: HttpOptions): Observable<any> {
        return this.http.post(this.baseUrl + uri, payload, httpOptions);
    }

    /**
     * Update a resource partially using PATCH http method
     * @param uri :the URI to the resource
     * @param payload : key ~ value pair data to update with
     * @param httpOptions : options such as headers
     */
    updateResource(uri: string, payload: object, httpOptions: HttpOptions): Observable<any> {
        return this.http.patch(this.baseUrl + uri, payload, httpOptions);
    }

    /**
     * Updating the whole record completely using PUT http method
     * @param uri :the uri to the resource
     * @param payload : key ~ value pair data to replace with
     * @param httpOptions : options such as request header
     */
    replaceResource(uri: string, payload: JSON, httpOptions: {}): Observable<any> {

        return this.http.put(this.baseUrl + uri, payload, httpOptions);
    }

    /**
     *  Delete http resource
     * @param  uri: URI to the resource
     * @param httpOptions: http request options
     */
    deleteResource(uri: string, httpOptions: {}): Observable<any> {

        return this.http.delete(this.baseUrl + uri, httpOptions);
    }


    /**
     * Build HTTP request options
     * @param queryParams : any query parameters
     * @param sendAuthorizationHeader : boolean to send authorization header
     * @param headersOptions : headers to override or any extra headers
     * @param responseType: Response type expected
     */
    buildHttpOptions(queryParams?: {}, sendAuthorizationHeader = false, headersOptions?: {},
                     responseType = 'json'): HttpOptions {
        let baseHeaders = {
            Accept: 'application/json',
            'Content-Type': 'application/json'
        };
        if (sendAuthorizationHeader) {
            baseHeaders = {...baseHeaders, ...{Authorization: `Bearer ${this.authUserService.accessToken}`}};
        }
        headersOptions = headersOptions ? {...baseHeaders, ...headersOptions} : baseHeaders;

        return {
            headers: headersOptions,
            params: queryParams,
            withCredentials: false,
            responseType
        };
    }
}
