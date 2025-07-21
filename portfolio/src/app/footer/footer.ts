import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-footer',
  imports: [],
  templateUrl: './footer.html',
  styleUrl: './footer.css'
})
export class Footer implements OnInit{

  @Output() public isLoading = new EventEmitter<boolean>();

  public ngOnInit(): void {
    this.isLoading.emit(false);
  }
}
