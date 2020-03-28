export interface UserModel {
    id: number;
    name: string;
    access_token: string;
    role: { name: string };
    permissions: { id: number, name: string }[];
}
