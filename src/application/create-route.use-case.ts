import { LatLng, Route } from "../domain/route.entity"
import { RouteRepositoryInterface } from "../domain/route.repository"

/** REGRA DE NEGÒCIO SE ECONTRA AQUI, DAS ROTAS */

class CreateRouteUseCase {

    constructor(private routeRepo: RouteRepositoryInterface) {

    }

    async execute(input: CreateRouteInput): Promise<CreateRouteOutput> {
        const route = new Route(input)
        await this.routeRepo.insert(route)
        // operações em cima das entidades

        return route.toJSON()
    }
}

type CreateRouteInput = {
    title: string,
    startPosition: LatLng,
    endPosition: LatLng,
    paths?: LatLng[]
}

type CreateRouteOutput = {
    title: string,
    startPosition: LatLng,
    endPosition: LatLng,
    paths?: LatLng[]
}

// S   OLID