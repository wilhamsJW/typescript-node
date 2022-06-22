import { LatLng, Route } from "./route.entity"

class CreateRouteUseCase {

    execute(input: CreateRouteInput): CreateRouteOutput {
        const route = new Route(input)
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