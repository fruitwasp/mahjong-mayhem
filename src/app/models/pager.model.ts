import * as _ from 'underscore'

export class Pager {

    public currentPage: number
    public startPage: number
    public endPage: number

    public pageSize: number
    public totalItemCount: number
    public totalPageCount: number

    update(currentPage: number, pageSize: number, totalItemCount: number) {
        this.currentPage = currentPage
        this.pageSize = pageSize

        this.totalItemCount = totalItemCount
        this.totalPageCount = Math.ceil(totalItemCount / pageSize)

        this.startPage = Math.max(0, currentPage - 5)
        this.endPage = Math.min(10, currentPage + 4)
    }
}
