import { Component } from '@angular/core';

@Component({
  selector: 'ayush-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss']
})
export class SidenavComponent {
  menuItems = [
    { title: 'Home', link: '/home', icon: 'fa-solid fa-house' },
    { title: 'About', link: '/home/about', icon: 'fa-solid fa-address-card' },
    { title: 'Services', link: '/home/services', icon: 'fa-brands fa-servicestack' },
    { title: 'Portfolio', link: '/home/portfolio', icon: 'fa-brands fa-creative-commons-nd' },
    { title: 'Contact', link: '/home/contact', icon: 'fa-solid fa-phone' }
  ];
  // isSidebarCollapsed = false;
  isSidebarCollapsed: boolean = false;

  toggleSidebar() {
    this.isSidebarCollapsed = !this.isSidebarCollapsed;
  }
}
