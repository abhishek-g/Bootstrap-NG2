/**
 * Created by abhishek on 03/12/2017.
 */


import {NgModule} from "@angular/core";
import {BrowserModule} from "@angular/platform-browser";
import {HttpModule} from "@angular/http";

import {DashboardComponent} from "./components/dashboard/dashboard.component";
import {PanelComponent} from "../../components/panel/panel.component";
import {DropdownExampleComponent} from "./components/dropdownexample/dropdownexample.component";
import {DropdownComponent} from "../../components/dropdown/dropdown.component";
import {CountryService} from "./services/countries.service";
import {TableExampleComponent} from "./components/tableexample/tableexample.component";
import {TableComponent} from "../../components/table/table.component";
import {UsersService} from "./services/users.service";


@NgModule({
    imports:[BrowserModule , HttpModule],
    declarations:[DashboardComponent, PanelComponent, DropdownComponent, TableComponent, DropdownExampleComponent, TableExampleComponent],
    exports:[DashboardComponent],
    providers:[CountryService, UsersService]
})
export class DashboardModule{

}