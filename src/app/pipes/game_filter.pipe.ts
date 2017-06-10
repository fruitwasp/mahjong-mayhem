
import { Pipe, PipeTransform } from '@angular/core'

@Pipe({
    name: 'GameFilterPipe'
})
export class GameFilterPipe implements PipeTransform {
    transform(value: any, input: string) {
        if (input) {
            input = input.toLowerCase()

            return value.filter((item) => {
                return item.toLowerCase().indexOf(input) > -1
            })
        }

        return value
    }
}
