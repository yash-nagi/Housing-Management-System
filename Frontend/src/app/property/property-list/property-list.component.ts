import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PropertCardComponent } from '../property-card/property-card.component';

@Component({
  selector: 'app-property-list',
  imports: [PropertCardComponent,
            CommonModule
  ],
  standalone: true,
  templateUrl: './property-list.component.html',
  styleUrl: './property-list.component.css'
})
export class PropertyListComponent {
  Properties: Array<any> = [
    {
      "Id":1,
      "Name":"Birla House",
      "Type":"House",
      "Price":12000
    },
    {
      "Id":2,
      "Name":"Mannat",
      "Type":"House",
      "Price":120000
    },
    {
      "Id":3,
      "Name":"Antella",
      "Type":"House",
      "Price":52000
    },
    {
      "Id":4,
      "Name":"Jalsa",
      "Type":"House",
      "Price":78000
    },
    {
      "Id":5,
      "Name":"Pathan cot",
      "Type":"House",
      "Price":45000
    },
    {
      "Id":6,
      "Name":"Noida House",
      "Type":"House",
      "Price":17000
    },
  ]
}
