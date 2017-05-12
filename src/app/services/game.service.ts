
import { Injectable } from '@angular/core'
import { Http } from '@angular/http'
import { PagerService } from './'

@Injectable()
export class GameService {
    constructor(
        private http: Http,
        private pagerService: PagerService
    ) { }
}
