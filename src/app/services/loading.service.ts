import { Injectable } from '@angular/core'

@Injectable()
export class LoadingService {

    private yesIsLoadingCount: number = 0

    yesIsLoading() {
        return this.yesIsLoadingCount > 0
    }

    push() {
        this.yesIsLoadingCount = this.yesIsLoadingCount + 1

        return this.yesIsLoadingCount
    }

    pop() {
        if (this.yesIsLoadingCount > 0) {
            this.yesIsLoadingCount = this.yesIsLoadingCount - 1
        }

        return this.yesIsLoadingCount
    }
}
