import { Pipe, PipeTransform } from '@angular/core'

import { config } from 'app/config'

@Pipe({
    name: 'gamePlayerFilter'
})
export class GamePlayerFilterPipe implements PipeTransform {
    transform(value: any, input: string) {
        if (input) {
            input = input.toLowerCase()

            if (input === config.GAME_PLAYER_FILTERS.NO_GAME_PLAYER) {
                return value
            }

            return value.filter((item) => {
                for (const player of item.players) {
                    if (player._id === input) {
                        return true
                    }

                    return false
                }
            })
        }

        return value
    }
}
