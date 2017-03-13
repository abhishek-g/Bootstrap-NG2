/**
 * Created by abhishek on 03/12/2017.
 */

import {Component, Input, Output, EventEmitter, OnChanges} from "@angular/core";


export interface Header{
    title:string;
    lookup:string;
}


@Component({
    selector:"mytable",
    templateUrl:"app/components/table/table.component.html"
})
export class TableComponent implements OnChanges{
    @Input('header')
    tableHeader:Header[];

    @Input()
    data:any[];

    @Output()
    rowClicked:EventEmitter<any> = new EventEmitter()

    tableBody:any[];
    constructor(){

    }

    ngOnChanges(){
        this.tableBody=[];
        if(this.data && this.data.length>0){
            this.data.forEach((row,index)=>{
                let rowData:any[]=[];
                this.tableHeader.forEach((header:Header)=>{
                    rowData.push(row[header.lookup])
                })
                this.tableBody.push(rowData);
            })
        }

    }

}