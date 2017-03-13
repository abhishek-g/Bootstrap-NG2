/**
 * Created by abhishek on 03/12/2017.
 */


import {Component, Input} from "@angular/core";

@Component({
    selector:"panel",
    templateUrl:"app/components/panel/panel.component.html"
})
export class PanelComponent{

    @Input()
    panelTitle : string;

    @Input()
    panelClasses:string;

}