import {Injectable} from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class AccessTokenService {

    constructor() {
    }

    /**
     * Check if token is formatted as JWT token standard and is not expired
     * @param token: a string token
     */
    isJWTValid(token: string): boolean {
        const decoded = this.decodeJWTToken(token);
        if (!decoded.exp || Object.keys(decoded).length < 1) {
            return false;
        }
        return decoded.exp > +new Date();

    }

    decodeJWTToken(token) {
        if (!token) {
            return {};
        }
        try {
            const base64Url = token.split('.')[1];
            const base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
            const payload = decodeURIComponent(atob(base64).split('').map((val) => {
                return `%` + (`00` + val.charCodeAt(0).toString(16)).slice(-2);
            }).join(''));
            return JSON.parse(payload);
        } catch (e) {
            console.log(e);
            return {};
        }
    }

}
