import { DateTime } from 'luxon';
declare const User_base: any;
export default class User extends User_base {
    id: number;
    fullName: string | null;
    email: string;
    password: string;
    createdAt: DateTime;
    updatedAt: DateTime | null;
    static accessTokens: any;
}
export {};
