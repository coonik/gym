import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export default class AppComponent {
  private title = 'Đồ chơi công viên, trẻ em giá rẻ ';

  constructor() {
    this.changeTitle();
  }

  private changeTitle(): void {
    setInterval(() => {
      document.title = this.newTitle;
      this.title = this.newTitle;
    }, 10);
    
  }

  private get newTitle(): string {
    const firstCharacter = String.fromCharCode(this.title.charCodeAt(0));
    return `${this.title.slice(1)}${firstCharacter}`;
  }
}
