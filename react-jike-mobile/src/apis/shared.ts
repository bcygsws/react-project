// type是数据结构的抽象，不明确的先使用泛型 <T>/T 代替
// 所有接口通用类型，将其单独抽离出来
export type ResType<T> = {
    data: T
    message: string
}