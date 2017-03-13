/**
 * Created by abhishek on 03/12/2017.
 */
import {RouterModule} from "@angular/router";
import {DashboardComponent} from "./modules/dashboard/components/dashboard/dashboard.component";

export const routing = RouterModule.forRoot([
    { path:"",component:DashboardComponent}
]);