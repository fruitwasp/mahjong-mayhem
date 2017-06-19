import { Injectable } from '@angular/core'

@Injectable()
export class LoadingService {

    private yesIsLoadingCount: number = 0

    push() {
        this.yesIsLoadingCount++

        return this.yesIsLoadingCount
    }

    pop() {
        if (this.yesIsLoading()) {
            this.yesIsLoadingCount--
        }

        return this.yesIsLoadingCount
    }

    yesIsLoading() {
        return this.yesIsLoadingCount > 0
    }
}
