import {Injectable} from '@angular/core';
import {UserModel} from '../../models/user.model';
import {LocalStorageService} from '../storage/local-storage.service';
import {environment} from '../../../../environments/environment';
import {AccessTokenService} from './access-token.service';

@Injectable({
    providedIn: 'root'
})
export class UserService {


    constructor(private localStorageService: LocalStorageService, private tokenService: AccessTokenService) {
    }

    setCurrent(data: UserModel) {
        // Update the local user properties and also that in local storage

        this.localStorageService.set({
            user: data,
            version: environment.LOCAL_STORAGE_SCHEMA_VERSION,
            cart: this.localStorageService.get().cart
        });
    }

    get current(): UserModel | null {
        const data = this.localStorageService.get();
        return data.user ? data.user : null;
    }

    get permissions(): { id: number, name: string }[] {
        return this.current.permissions;
    }

    get name(): string {
        return this.current.name;
    }

    get accessToken(): string {
        return this.current.access_token;
    }

    get isAuthenticated(): boolean {
        const user = this.current;
        if (!user) {
            return false;
        }
        return this.tokenService.isJWTValid(user.access_token);
    }

}
