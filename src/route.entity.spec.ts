import { Route, RouteProps } from "./route.entity"

describe('Route Teste', () => {

    const routeProps = {
        title: 'minha rota',
        startPosition: {lat: 0, lng: 1},   
        endPosition: {lat: 0, lng: 1},
        points: []   
    }
    // Usado para simplificar o código em vez de instaciarmos a classe em todos os testes, isntanciamos apenas uma vez e usamos para todos os testes
    let globalRoute = new Route(routeProps)

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
        // expect e toStrictEqual --> pertecem ao jest, verifica se está igual
        expect(route.props).toStrictEqual({
             ...routeProps,
             points: [
                { lat: 20, lng: 20 },
                { lat: 20, lng: 20 },
            ]
        });
    });

    /************* Teste de atualização de título da rota */
    test('updateTitle method', () => {        
        // route.updateTitle -> acessando método da class route, a classe está sendo importada acima e dessa forma consigo acessar seus métodos
        globalRoute.updateTitle('title updated')
        expect(globalRoute.title).toBe('title updated'); // Tobe -> é um teste do q ele espera receber, então deve ser igual o q está em route.updateTitle para q ele compare de fato se está correto
    });

        /************ Teste update de position */
        test('updatePosition method', () => {

            const startPosition = {lat: 10, lng: 20}
            const endPosition = {lat: 30, lng: 40}
            globalRoute.updatePosition(startPosition, endPosition)
            expect(globalRoute.startPosition).toBe(startPosition); // Tobe -> é um teste do q ele espera receber, então deve ser igual o q está em route.updatePosition para q ele compare de fato se está correto
            expect(globalRoute.endPosition).toBe(endPosition); 

        });

        /************ Teste update points */
        test('updatePoints method', () => {

            const points = [{lat: 10, lng: 20}]
            globalRoute.updatePoints(points)
            expect(globalRoute.points).toBe(points);    // Tobe -> é um teste do q ele espera receber, então deve ser igual o q está em route.updatePosition para q ele compare de fato se está correto
            expect(globalRoute.points).toHaveLength(1); // toHaveLength -> verifica se de fato existe uma posição
            expect(globalRoute.points).toStrictEqual(points); // toStrictEqual -> verifica a igualdade

        });

})