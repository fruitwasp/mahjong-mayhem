
import { Game } from "app/models";
import { Observable } from "rxjs/Observable";
import 'rxjs/add/observable/of'


var game = new Game({
    _id: 0, 
    gameTemplate: { 
        _id: 0
    }
});     

export class MockGameService {
    find() {
        return Observable.of(game)
    }
}