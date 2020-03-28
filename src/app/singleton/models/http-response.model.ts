export interface HttpResponseModel {
    code: number;
    results: [] | object | string | any;
    message: string | null;
    success: boolean;
}
