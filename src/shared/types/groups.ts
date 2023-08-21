export type GroupType = {
    name: string
    courses: {
        name: string
        data: {
           name: string
           link: string
        }[]
    }[]
}