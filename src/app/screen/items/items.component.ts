import { Component, Input } from '@angular/core';
import { HeaderComponent } from "../header/header.component";

@Component({
  selector: 'app-items',
  imports: [],
  templateUrl: './items.component.html',
  styleUrl: './items.component.css'
})
export class ItemComponent {
  @Input({required: true}) name!: string;
  @Input({required: true}) description!: string;
  @Input({required: true}) price!: number;
  @Input({required: true}) avatar!: string;


  get imagePath(){
    return 'assets/relampago-mcqueen.png';
  }
}
