import { User } from "./user";

export interface Flit {
    id: string;
    message?: string;
    picture?: string;
    createdBy: User;
    tags?: string[];
    createDate: Date;
    kudos?: number[];
}
