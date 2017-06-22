import { Injectable, Inject } from '@angular/core'
import { Http, RequestOptions, Headers } from '@angular/http'

import { LocalLoginService } from 'app/services'

@Injectable()
export class HttpService {
    public requestOptions: RequestOptions

    public get: any
    public post: any
    public put: any
    public delete: any

    constructor(
        @Inject(Http) public http: Http,
        @Inject(LocalLoginService) public localLoginService: LocalLoginService
    ) {
        this.get = this.http.get
        this.post = this.http.post
        this.put = this.http.put
        this.delete = this.http.delete
    }

    getRequestOptions(): RequestOptions {
        return this.requestOptions
    }

    buildRequestOptions() {
        const user = this.localLoginService.getUser()

        this.requestOptions = new RequestOptions({
            headers: new Headers({
                'x-username': user.username,
                'x-token': user.token
            })
        })
    }
}
