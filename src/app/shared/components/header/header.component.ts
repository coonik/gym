import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export default class HeaderComponent {
  public isCollapsed = window.outerWidth < 600;

  public searchName: string;

  update(searchName: string, search?: boolean) {
    this.searchName = searchName;
    if (search) {
      setTimeout(() => {
        document.getElementById('search').click();
      }, 0);
    }
  }
}
