

export type BaseApi<T> = {
    data: T
    error: false
    errorMessage: null
} | {
    data: null
    error: true
    errorMessage: string
}