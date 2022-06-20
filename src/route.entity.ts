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

    /** Todos os metódos abaixo são monitorados pelo jest para testes no arquivo route.entity.spec.ts */
    updateTitle(title: string){
        this.title = title
    }

    updatePosition(startPosition: LatLng, endPosition: LatLng ){
        this.startPosition = startPosition,
        this.endPosition = endPosition
    }

    updatePoints(points: LatLng[]){
        this.points = points
    }

    get points() {
        return this.props.points
    }
    
    private set points(value: LatLng[]) {
        this.props.points = value
    }

    
    get title() {
        return this.props.title
    }
    
    private set title(value: string) {
        this.props.title = value
    }

    get startPosition() {
        return this.props.startPosition
    }
    
    private set startPosition(value: LatLng) {
        this.props.startPosition = value
    }

    get endPosition() {
        return this.props.endPosition
    }
    
    private set endPosition(value: LatLng) {
        this.props.endPosition = value
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