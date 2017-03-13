/**
 * Created by abhishek on 03/12/2017.
 */

import {Component, OnInit} from "@angular/core";
import {Item} from "../../../../components/dropdown/dropdown.component";
import {CountryService} from "../../services/countries.service";
import 'rxjs/add/operator/map';


@Component({
    selector:"example-dropdown",
    template:`
        <ui-dropdown dropDownId="1" [items]="countries" (dropDownClicked)="onClickOfCountry($event)"></ui-dropdown>
        <div class="row">&nbsp;</div>
        <div class="well well-sm" *ngIf="country">
            <div class="row">
                <div class="col-md-3">Name : </div>
                <div class="col-md-9">{{country.name}}</div>
            </div>
        
            <div class="row">
                <div class="col-md-3">Capital : </div>
                <div class="col-md-9">{{country.capital}}</div>
            </div>
            
            <div class="row">
                <div class="col-md-3">Region : </div>
                <div class="col-md-9">{{country.region}}</div>
            </div>
        
            <div class="row">
                <div class="col-md-3">Population : </div>
                <div class="col-md-9">{{country.population}}</div>
            </div>
            
            <div class="row">
                <div class="col-md-3">NumericCode : </div>
                <div class="col-md-9">{{country.numericCode}}</div>
            </div>
        
            <div class="row">
                <div class="col-md-3">Languages :</div>
                <div class="col-md-9">
                   <div *ngFor="let curr of country.currencies"><div class="col-md-6" style="padding-left: 0">Name:  {{curr.name}}</div><div class="col-md-6">Symbol:  {{curr.symbol}}</div></div>
                </div>
            </div>
        </div>
    `
})
export class DropdownExampleComponent implements OnInit{
    countries:Item[] = [];
    country:{};
    constructor(private countryService:CountryService){
        this.countries.push({text:"Get Country",value:""})
    }
    ngOnInit(){
        this.getCountries();
    }
    onClickOfCountry(country){
        this.getCountry(country.text);
    }
    getCountries(){

        this.countryService.getAllCountries()
            .map((data)=>{
                return data.map((country)=>{ return {text:country.name,value:country.alpha3Code}; })
            })
            .subscribe((data:Item[])=>{
                this.countries=data;
                this.getCountry(data[0].text);
            })

    }
    getCountry(country){
        this.countryService.getCountry(country)
            .subscribe((country)=>{ this.country = country[0];})
    }

}
