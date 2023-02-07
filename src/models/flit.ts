import { User } from "./user";

export interface Flit {
    _id: string;
    userId: string;
    text?: string;
    imageUrl?: string;
    kudosCount: number;
    kudosUserIds: string[],
    createdAt: Date;
    user: User,
}