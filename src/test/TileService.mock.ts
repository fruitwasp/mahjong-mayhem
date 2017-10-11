import { Game } from "app/models";
import { Observable } from "rxjs/Observable";
    

export class MockTileService {

    find() {
        return Observable.of([]);
    }

}
