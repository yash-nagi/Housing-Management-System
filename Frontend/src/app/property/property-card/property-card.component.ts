import { Component } from "@angular/core";
// comments.
@Component({
    selector: 'app-property-card',
    templateUrl: 'property-card.component.html',
    styleUrls: ['property-card.component.css']
})
export class PropertCardComponent{
    property: any = {
        "Name":"Birla House",
        "Type":"House",
        "Price":12000
    }
}