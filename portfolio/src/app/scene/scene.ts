import { Component, ElementRef, OnInit, viewChild } from '@angular/core';

@Component({
  selector: 'app-scene',
  imports: [],
  templateUrl: './scene.html',
  styleUrl: './scene.css'
})
export class Scene implements OnInit {

  private img1 = viewChild.required<ElementRef<HTMLImageElement>>('img1');
  private img2 = viewChild.required<ElementRef<HTMLImageElement>>('img2');
  private img3 = viewChild.required<ElementRef<HTMLImageElement>>('img3');
  private img4 = viewChild.required<ElementRef<HTMLImageElement>>('img4');
  private img5 = viewChild.required<ElementRef<HTMLImageElement>>('img5');
  private plant = viewChild.required<ElementRef<HTMLImageElement>>('plant');
  private tree = viewChild.required<ElementRef<HTMLImageElement>>('tree');

  public ngOnInit(): void {
    
    window.addEventListener('scroll', () => {

      var value = window.scrollY;

      this.img1().nativeElement.style.top = value * 1 + 'px';
      this.img2().nativeElement.style.top = value * 0.95 + 'px';
      this.img3().nativeElement.style.top = value * 0.7 + 'px';
      this.img4().nativeElement.style.top = value * 1 + 'px';
      this.img5().nativeElement.style.top = value * 1 + 'px';
      this.tree().nativeElement.style.top = value * 0.9 + 'px';
      this.tree().nativeElement.style.top = value * 0.9 + 'px';

    });

  }
}
