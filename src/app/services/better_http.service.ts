import { Injectable } from '@angular/core'
import { Http, RequestOptions, RequestOptionsArgs, Response, Headers } from '@angular/http'
import { Observable } from 'rxjs/Observable'

import { LocalLoginService } from './'

@Injectable()
export class BetterHttpService {

    constructor(
        public http: Http,
        public localLoginService: LocalLoginService
    ) { }

    get(url: string, options?: RequestOptionsArgs): Observable<Response> {
        return this.http.get(url, this.getOptions(options))
    }

    post(url: string, body: any, options?: RequestOptionsArgs): Observable<Response> {
        return this.http.post(url, body, this.getOptions(options))
    }

    put(url: string, body: any, options?: RequestOptionsArgs): Observable<Response> {
        return this.http.put(url, body, this.getOptions(options))
    }

    delete(url: string, options?: RequestOptionsArgs): Observable<Response> {
        return this.http.delete(url, this.getOptions(options))
    }

    getOptions(options: RequestOptionsArgs = new RequestOptions()) {
        const user = this.localLoginService.getUser()

        if (!options.headers) {
            options.headers = new Headers({})
        }

        options.headers.set('x-username', user.username)
        options.headers.set('x-token', user.token)

        return options
    }
}
