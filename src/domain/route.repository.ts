import { Route } from "./route.entity"

export interface RouteRepositoryInterface{
    insert(route: Route): Promise<void>
    findAll(): Promise<Route[]> // Route[] -> para que devolva uma lista de rotas
}