export abstract class StorageInterface {

    abstract set(data: any, overwrite: boolean): boolean;

    abstract get(key: string): any;

    abstract clearDataItem(key): boolean;

    abstract clearAllDataItems(key): boolean;

    abstract get isSupported(): boolean;

}
