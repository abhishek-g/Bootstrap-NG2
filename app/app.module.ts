import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';


import {AppComponent} from './app.component';
import {NavBarComponent} from "./components/navbar/navbar.component";
import {routing} from './app.routing';
import {DashboardModule} from "./modules/dashboard/dashboard.module";
import {TableComponent} from "./components/table/table.component";

@NgModule({
    imports: [BrowserModule, routing , DashboardModule],
    declarations: [AppComponent, NavBarComponent],
    bootstrap: [AppComponent]
})
export class AppModule {
}
