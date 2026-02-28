export interface ResultType<T> {
    code: number;
    message: string;
    data: T;  // 只在 data 字段允许 null
}