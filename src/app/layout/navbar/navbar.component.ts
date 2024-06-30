import { CommonModule } from '@angular/common';
import { Component, ElementRef, HostListener, OnInit, Renderer2 } from '@angular/core';
import { Router, RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [
    CommonModule , RouterOutlet , RouterLink
  ],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent implements OnInit {
  constructor(private renderer: Renderer2, private elementRef: ElementRef,private router: Router) {}

  @HostListener('window:scroll', ['$event'])
  checkScroll() {
    const scrollPosition = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
    const scrollOffset = 200;

    if (scrollPosition >= scrollOffset) {
      this.renderer.addClass(this.elementRef.nativeElement.querySelector('#navbar'), 'nav-sticky');
    } else {
      this.renderer.removeClass(this.elementRef.nativeElement.querySelector('#navbar'), 'nav-sticky');
    }
  }

  ngOnInit() {
    // const currentPath = location.pathname.split('/').filter(Boolean);
    // const current = currentPath[0];
    // if (current === "") return;

    // const menuItems: NodeListOf<HTMLAnchorElement> = document.querySelectorAll('.nav-item a');
    // menuItems.forEach((menuItem) => {
    //   const href = menuItem.getAttribute("href");
    //   if (href && href.indexOf(current) !== -1) {
    //     const parentMenuItem = menuItem.parentElement?.parentElement?.parentElement?.firstElementChild;
    //     if (parentMenuItem) {
    //       parentMenuItem.classList.add("active");
    //     }
    //     menuItem.classList.add("active");
    //   }
    // });
  }
  darkThemeEnabled: boolean = false;

  toggleTheme() {
    this.darkThemeEnabled = !this.darkThemeEnabled;
    if (this.darkThemeEnabled) {
      document.body.setAttribute('data-bs-theme', 'dark');
    } else {
      document.body.removeAttribute('data-bs-theme');
    }
  }

  navigateTo(path: string) {
    this.router.navigateByUrl(path);
  }
}
