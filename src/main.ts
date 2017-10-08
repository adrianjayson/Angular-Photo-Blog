// Import global stylesheet
import './styles/main.css';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic'; // helps with debugging errors
import {AppModule} from './app/app.module';

platformBrowserDynamic().bootstrapModule(AppModule); // bootstraps App module and attach to web page
