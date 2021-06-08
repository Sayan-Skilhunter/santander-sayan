import { Component, OnInit } from '@angular/core';
import {FormControl} from '@angular/forms';

interface Property {
  type: string;
  value: string;
}

@Component({
  selector: 'app-property-form',
  templateUrl: './property-form.component.html',
  styleUrls: ['./property-form.component.scss']
})
export class PropertyFormComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  foods: Property[] = [
    {type: 'steak-0', value: 'Steak'},
    {type: 'pizza-1', value: 'Pizza'},
    {type: 'tacos-2', value: 'Tacos'}
  ];

  fontStyleControl = new FormControl();
  fontStyle?: string;
}
