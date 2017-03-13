/**
 * Created by abhishek on 03/12/2017.
 */
import {Injectable} from "@angular/core";
import {Http} from "@angular/http";

@Injectable()
export class CountryService{
    private url="https://restcountries.eu/rest/v2/";

    constructor(private _http:Http){

    }

    getAllCountries(){
        return this._http.get(this.url+"all?fields=name;alpha3Code").map(res => res.json())
    }
    getCountry(country){
        return this._http.get(this.url+"name/" + country +"?fullText=true").map(res => res.json())
    }

}