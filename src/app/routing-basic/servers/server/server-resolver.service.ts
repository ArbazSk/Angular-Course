import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from "@angular/router";
import { Observable } from "rxjs";
import { ServersService } from "../servers.service";
import { Injectable } from "@angular/core";

interface Server {
    id: number,
    name: string,
    status: string
}

@Injectable({
    providedIn: 'root'
})
export class ServerResolver implements Resolve<Server> {
    constructor(private serversService: ServersService) { }

    resolve(route: ActivatedRouteSnapshot,
        state: RouterStateSnapshot): Server | Observable<Server> | Promise<Server> {
        return this.serversService.getServer(+route.params['id'])
    }

}
/*
    This resolver will get executed every time the route is get hit.
    we use resolve to do somethig every time a route is hit.
    It is different than guards as guard decide wheater the route can load or not.
    But resolver will always load but it does something before it will load the component.
    You add the resolver in the Route Definition as resolve key which is on object.
    you pass any key here in object and for value you pass the Service name.
    You get the data in Component in ActivatedRoute as a data and you can subscribe to it.
 */