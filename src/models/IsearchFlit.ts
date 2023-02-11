export interface searchFlits {
    userIds?: string[],
    text?: string,
    limit?: number,
    skip?: number,
    sort?: 'asc' | 'desc',
}