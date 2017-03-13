/**
 * Created by abhishek on 03/13/2017.
 */

import {Component, OnInit} from "@angular/core";

import {Header} from "../../../../components/table/table.component";
import {UsersService, User} from "../../services/users.service";

@Component({
    selector: "table-example",
    template: "<mytable [header]='tableHeader' [data]='users'></mytable>"
})
export class TableExampleComponent implements OnInit {
    tableHeader: Header[];
    users: User[];

    constructor(private _users: UsersService) {

        this.tableHeader = [{title: "User Id", lookup: "id"}, {title: "Name", lookup: "name"},
            {title: "Email Id",lookup: "email"},{title: "Username", lookup: "username"}]
    }

    ngOnInit() {
        this.getUsers();
    }

    getUsers() {
        this._users.getUsers()
            .subscribe((res) => {
                console.log(res);
                this.users = res;
            })
    }
}