import { Component, Input, OnInit } from '@angular/core';
import { NgFor } from '@angular/common';
// comments.
@Component({
    selector: 'app-property-card',
    templateUrl: 'property-card.component.html',
    styleUrls: ['property-card.component.css'],
    imports: [NgFor
    ]
})
export class PropertCardComponent{
    @Input() Property : any
}