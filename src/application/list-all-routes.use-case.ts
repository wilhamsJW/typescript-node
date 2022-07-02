// lista todas as rotas

import { LatLng, Route } from "../domain/route.entity"
import { RouteRepositoryInterface } from "../domain/route.repository"

/** REGRA DE NEGÒCIO SE ECONTRA AQUI, DAS ROTAS */

export class ListAllRouteUseCase {

    constructor(private routeRepo: RouteRepositoryInterface) {

    }

    async execute(): Promise<CreateRouteOutput> {
        const routes = await this.routeRepo.findAll()
        return routes.map(r => r.toJSON())
    }
}

type CreateRouteOutput = {
    id: string,
    title: string,
    startPosition: LatLng,
    endPosition: LatLng,
    paths?: LatLng[]
}[];