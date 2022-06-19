type LatLng = {lat: Number, lng: number}

export type RouteProps = {
     title: string,
     startPosition: LatLng,
     endPosition: LatLng,
     points?: LatLng[]
}

export class Route {
    public props: Required<RouteProps>
        constructor( props: RouteProps ){
        // ...props, --> repetindo todas as props que existem no meu construtor
        //  points: props.points || [] -> estou dizendo que props.points pode existir ou ser um array vazio
        // fiz isso pq inserir o Required acima que obriga todos a existirem mas eu quero q points seja opcional
        this.props = {
            ...props,
            points: props.points || []
        }
    }
}

const route = new Route({ 
    title: 'my route',
    startPosition: { lat: 15, lng: 15 },
    endPosition: { lat: 20, lng: 20 },
    points: [
        { lat: 20, lng: 20 },
        { lat: 20, lng: 20 },
    ]})

/** points?: LatLng[] -> Quero dizer que LatLng aqui é um array ou uma coleção de pontos e o ponto de interrogação quer dizer que ele não é obrigatório
 *  Required<RouteProps> -> é um agente do typescript que faz com que todas as informações sejam obrigatórias
 */