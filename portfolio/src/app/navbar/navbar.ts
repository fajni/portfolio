import { Component, ElementRef, OnInit, Output, ViewChild, viewChild } from '@angular/core';

@Component({
  selector: 'app-navbar',
  imports: [],
  templateUrl: './navbar.html',
  styleUrls: ['./navbar.css']
})
export class Navbar implements OnInit {

  private menuLinks = viewChild.required<ElementRef<HTMLDivElement>>('menuLinks');
  private hamburgerIcon = viewChild.required<ElementRef<HTMLDivElement>>('hamburgerIcon');

  private logo = viewChild.required<ElementRef<HTMLDivElement>>('logo');

  private click: number = 0;

  public toggleMenu() {

    this.menuLinks().nativeElement.classList.toggle("open");
    this.hamburgerIcon().nativeElement.classList.toggle("open");

  }

  ngOnInit(){

    this.logo().nativeElement.addEventListener('click', () => {

      this.click = this.click + 1;

      this.logo().nativeElement.textContent = "Hello, World!";

      if(this.click % 2 == 0) {
        this.logo().nativeElement.textContent = "Veljko Fajnisevic";
      }

      console.log("You found easter egg, nice :D");
    })
  }

}
