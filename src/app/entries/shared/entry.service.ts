import { Entry  } from './entry.model';
import { Injectable } from '@angular/core'; // gets Injectable decorator
import { Http } from '@angular/http';

// decorator to make class available for service
@Injectable()
export class EntryService {
    constructor(private http: Http) {

    }

    getEntries(): Promise<Entry[]> {
        return this.http.get('/app/entries')
                    .toPromise()
                    .then(response => response.json().data as Entry[]);
    } 
}