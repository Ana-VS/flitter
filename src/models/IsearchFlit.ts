import { User } from "./user";

export interface searchFlits {
    id?: string;
    pageMin?: number;
    pageMax?: number;
    message?: string;
    createdBy: User;
    tags?: string[];
    createDate?: Date;
    kudos?: number[];
}
