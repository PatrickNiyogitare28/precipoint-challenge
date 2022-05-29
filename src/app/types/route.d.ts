export interface IRoute {
    path: string,
    label: string,
    children?: IRoute[]
}
