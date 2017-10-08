import {Component} from '@angular/core';

// decorator to mark class as an angular component
@Component({
    selector: 'app-root', // inserts components into the placeholder element
    templateUrl: 'app.component.html',
    styleUrls: ['app.component.css']
})
export class AppComponent {
    emoji = ['🎉', '😍', '😜', '👍'];
    activeEmoji: string;

    changeEmoji() {
        this.activeEmoji = this.emoji[Math.floor(Math.random() * this.emoji.length)];
    }
}