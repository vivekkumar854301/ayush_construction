import { Component } from '@angular/core';

@Component({
  selector: 'ayush-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  menuItems = [
    { title: 'Home', link: '/home', icon: 'fa-solid fa-house' },
    { title: 'About', link: '/home/about', icon: 'fa-solid fa-address-card' },
    { title: 'Services', link: '/home/services', icon: 'fa-brands fa-servicestack' },
    { title: 'Portfolio', link: '/home/portfolio', icon: 'fa-brands fa-creative-commons-nd' },
    { title: 'Contact', link: '/home/contact', icon: 'fa-solid fa-phone' }
  ];

  // Variable to toggle the sidebar visibility
  isSidebarActive = false;

  // Toggle the sidebar visibility on hamburger click
  toggleSidebar() {
    this.isSidebarActive = !this.isSidebarActive;
  }

  // Close the sidebar when a menu item is clicked
  closeSidebar() {
    this.isSidebarActive = false;
  }

}
