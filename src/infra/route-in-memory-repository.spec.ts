import { RouteInMemoryRepository } from './route-in-memory-repository'
import {RouteProps, Route} from '../domain/route.entity'

describe('RouteInMemoryRepository Test', () => {

    it('should insert a new route', async () => {
        const repository = new RouteInMemoryRepository();

        const routeProps: RouteProps = {
            title: 'minha rota',
            startPosition: {lat: 0, lng: 1},   
            endPosition: {lat: 0, lng: 1},
            points: [
                { lat: 20, lng: 20 },
                { lat: 20, lng: 20 },
            ]   
        };
        
        const route = new Route(routeProps)
        await repository.insert(route)
        expect(repository.items).toHaveLength(1)
        expect(repository.items).toStrictEqual([route])
    })

})