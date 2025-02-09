import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { PropertCardComponent } from './property/property-card/property-card.component';
import {PropertyListComponent } from './property/property-list/property-list.component'
import { NavBarComponent } from './nav-bar/nav-bar.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,
            PropertCardComponent,
            PropertyListComponent,
            NavBarComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Test';
}
