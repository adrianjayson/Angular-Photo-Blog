import {NgModule} from '@angular/core'; //foundation of any Angular app
import {BrowserModule} from '@angular/platform-browser'; // package for browser specific features
import { HttpModule } from '@angular/http'; // package for http module
import { FormsModule } from '@angular/forms';
import { InMemoryWebApiModule } from 'angular-in-memory-web-api'; // used for educational purposes only
import {AppComponent} from './app.component';
import { EntryListComponent, EntryComponent, EntryService, EntryCommentFormComponent } from './entries';
import { InMemoryEntryService } from './backend'; //fake backend server

// decorator for modules
@NgModule({
    imports: [
        BrowserModule, // tells Angular the app will be used in a browser
        HttpModule,
        FormsModule, 
        InMemoryWebApiModule.forRoot(InMemoryEntryService)
    ], 
    providers: [ EntryService ], 
    declarations: [
        AppComponent,
        EntryComponent, 
        EntryListComponent,
        EntryCommentFormComponent
    ], // registering all app's components
    bootstrap:[AppComponent] // tells w/c module will act as the base of the application
})
export class AppModule {

}