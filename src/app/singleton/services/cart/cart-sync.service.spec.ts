import {TestBed} from '@angular/core/testing';

import {CartSyncService} from './cart-sync.service';

describe('CartSyncService', () => {
    beforeEach(() => TestBed.configureTestingModule({}));

    it('should be created', () => {
        const service: CartSyncService = TestBed.get(CartSyncService);
        expect(service).toBeTruthy();
    });
});
