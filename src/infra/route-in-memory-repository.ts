import { RouteRepositoryInterface } from "../domain/route.repository";
import { Route } from "../domain/route.entity"


export class RouteInMemoryRepository implements RouteRepositoryInterface {
    items: Route[] = []
    async insert(route: Route): Promise<void> {
        this.items.push(route)
    }
        //throw new Error("Method not implemented");
        
}