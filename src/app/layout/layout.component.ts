import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements OnInit {

  myText: string = 'Este es mi texto';
  disabledText: boolean = false;

  constructor() { }

  ngOnInit() {
  }

  toggleDisable(): void {
    this.disabledText = !this.disabledText;
  }

  resetText(): void {
    this.myText = "Este es mi texto";
  }
}
