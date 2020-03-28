import {Injectable} from '@angular/core';
import {StorageModel} from '../../models/storage.model';
import {StorageInterface} from './storage';

@Injectable({
    providedIn: 'root'
})
export class LocalStorageService implements StorageInterface {
    private dataKey = 'data';

    constructor() {
        this.localData = new Map<string, any>();
    }

    protected localData: Map<string, any>;

    get isSupported(): boolean {
        return typeof localStorage !== undefined;
    }

    get(): StorageModel {
        if (this.isSupported) {
            try {
                return JSON.parse(localStorage.getItem(this.dataKey) || '{}');
            } catch (err) {
                return {version: 0};
            }
        } else {
            return this.localData ? this.localData.get(this.dataKey) : {};
        }
    }

    /**
     * Add new data to local storage
     * @param data : data to store
     * @param overwrite :indicate if to overwrite if version is different
     * @return boolean: if storage was update or false
     */
    set(data: StorageModel, overwrite = true): boolean {
        if (!this.isSupported) {
            this.localData.set(this.dataKey, data);
            return true;
        }
        // verify the schema version
        if (data.version && !overwrite && (this.get().version !== data.version)) {
            return false;
        }

        return localStorage.setItem(this.dataKey, JSON.stringify(data)) === undefined;
    }

    clearDataItem(key: keyof StorageModel): boolean {

        if (!this.isSupported) {
            delete this.localData.delete(this.dataKey)[key];
            return false;
        }
        const loadedData = this.get();
        delete loadedData[key];

        return this.set(loadedData) === undefined && delete this.localData.delete(this.dataKey)[key];
    }

    clearAllDataItems(): boolean {
        return localStorage.removeItem(this.dataKey) === undefined && this.localData.delete(this.dataKey);
    }
}
