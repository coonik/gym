import { Component } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export default class HeaderComponent {
  public isCollapsed = window.outerWidth < 600;

  public searchName: string;

  constructor(private router: Router) {
    router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.hiddenSubMenu();
      }
    });
  }

  public update(searchName: string, search?: boolean): void {
    if (searchName.replace(/\s/g, '') !== '') {
      this.searchName = searchName;
    }

    if (search) {
      setTimeout(() => {
        document.getElementById('search').click();
      }, 0);
    }
  }

  public onSearch(): void {
    if (this.searchName !== '' && this.searchName) {
      this.router.navigate(['/products'], { queryParams: { searchName: this.searchName } });
    }
  }

  // eslint-disable-next-line class-methods-use-this
  public hiddenSubMenu(): void {
    const subMenu: HTMLCollectionOf<Element> = document.getElementsByClassName('sub-menu');
    for (let i = 0; i < subMenu.length; i += 1) {
      const item = subMenu[i] as HTMLElement;
      item.style.visibility = 'hidden';
      item.style.visibility = 'unset';
    }
  }
}
