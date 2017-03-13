/**
 * Created by abhishek on 03/12/2017.
 */


import {
    Component, Input, Output, EventEmitter, OnChanges, ElementRef, ViewChild, Renderer, SimpleChanges,
} from "@angular/core";

export interface Item{
    text:string,
    value:any
}


@Component({
    selector:"ui-dropdown",
    templateUrl:"app/components/dropdown/dropdown.component.html"
})
export class DropdownComponent implements OnChanges{

    @ViewChild("dropdownmenu") menu:ElementRef;

    defItem:Item;

    // Optional Id for the Dropdown
    @Input()
    dropDownId:number;

    // Dropdown elements
    @Input()
    items:Item[];

    //Event propagated on click of an item
    @Output()
    dropDownClicked:EventEmitter<any> = new EventEmitter();

    constructor(private renderer:Renderer){

    }

    ngOnChanges(changes:SimpleChanges){
        console.log(changes)
        this.defItem = this.items[0];
    }

    itemClicked(it){
        this.renderer.setElementStyle(this.menu.nativeElement,"display","none");
        this.defItem = this.items.find(item => item.text === it.text);
        this.dropDownClicked.emit(this.defItem);
    }

    openDropDown($event){
        this.renderer.setElementStyle(this.menu.nativeElement,"display","block");
    }
}