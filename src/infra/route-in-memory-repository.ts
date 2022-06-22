import { RouteRepositoryInterface } from "../domain/route.repository";
import { Route } from "../domain/route.entity"

/** Guardando em memória a rota, é um tipo de arquitetura */

export class RouteInMemoryRepository implements RouteRepositoryInterface {
    items: Route[] = []
    async insert(route: Route): Promise<void> {
        this.items.push(route)
    }   
}