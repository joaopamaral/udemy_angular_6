import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  showParagraph = true;
  clicks = [];

  display() {
    this.showParagraph = !this.showParagraph;
    // this.clicks.push(this.clicks.length + 1);
    this.clicks.push(new Date());
  }
}
