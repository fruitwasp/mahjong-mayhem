
import { Pipe, PipeTransform } from '@angular/core'

@Pipe({
    name: 'gameFilter'
})
export class GameFilterPipe implements PipeTransform {
    transform(value: any, input: string) {
        if (input) {
            input = input.toLowerCase()

            if (input === 'all') {

                return value
            }

            return value.filter((item) => {
                return item.state === input
            })
        }

        return value
    }
}
