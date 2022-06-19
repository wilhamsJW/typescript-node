import { Route, RouteProps } from "./route.entity"

describe('Route Teste', () => {
    test('constructor', () => {
        // Professor fez dessa forma, achei mais complicado
        // const routeProps: RouteProps = {
        //     title: 'minha rota',
        //     startPosition: {lat: 0, lng: 1},   
        //     endPosition: {lat: 0, lng: 1}   
        // }

        // Fiz dessa forma, achei mais simples
        let routeProps = {
            title: 'minha rota',
            startPosition: {lat: 0, lng: 1},   
            endPosition: {lat: 0, lng: 1},
            points: [
                { lat: 20, lng: 20 },
                { lat: 20, lng: 20 },
            ]   
        }/**As 4 linhas acima apenas definem manualmente a rota para teste */

        let route = new Route(routeProps); // estou instaciando com NEW que cria uma instacia do objeto q foi criado, o obejto criado é routeProps
                                            // assim, estou enviado 'routeProps' para 'Route' que é classe que possui um constructor e irá receber esse Obejto
        
            /** TESTANDO COM POINTS VAZIO, PARA ISSO É PRECISO RETIRAR POINTS DO ROUTPROPS ACIMA */                                   
        // expect e toStrictEqual --> pertecem ao jest
        // expect(route.props).toStrictEqual({
        //     ...routeProps, points: [] // ...routeProps -> repetindo as props do constructor e points: [] -> está repetindo uma regrada criada para points onde pode ser vazio ou conter algo na class do Route q está no arquivo route.enitity.ts
        // })

        /** TESTANDO COM POINTS */
        // expect e toStrictEqual --> pertecem ao jest
        expect(route.props).toStrictEqual({
             ...routeProps,
             points: [
                { lat: 20, lng: 20 },
                { lat: 20, lng: 20 },
            ]
        })
    })
})