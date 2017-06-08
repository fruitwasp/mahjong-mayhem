
import { Injectable } from '@angular/core'

@Injectable()
export class PagerService {
    getPager(totalItems: number, currentPage: number = 1, pageSize: number = 10) {
        const totalPages = Math.ceil(totalItems / pageSize)

        return {
            totalItems: totalItems,
            currentPage: currentPage,
            pageSize: pageSize,
            totalPages: totalPages
        }
    }
}
