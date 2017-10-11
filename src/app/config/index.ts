export const config = {
    BASE_URL: 'https://mahjongmayhem.herokuapp.com/',
    USER: 's.mommersteeg@student.avans.nl',
    TOKEN: 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.InMubW9tbWVyc3RlZWdAc3R1ZGVudC5hdmFucy5ubCI.FvLBJIWzgyYpzSCMGlnI0g_PEN7WzpHib2_T8X1G_-E',
    GAME_STATES: [
        'open',
        'playing',
        'finished',
        'all'
    ],
    DEFAULT_GAME_STATE: 'open',
    GAME_TEMPLATES: [
        'Dragon',
        'Monkey',
        'Ox',
        'Ram',
        'Rooster',
        'Shanghai',
        'Snake'
    ],
    LOGIN_URL: 'https://mahjongmayhem.herokuapp.com/auth/avans',
    GAME_PLAYER_FILTERS: {
        NO_GAME_PLAYER: '<selecteer speler>'
    },

    MIN_PLAYERS: 1,
    MAX_PLAYERS: 32
}
