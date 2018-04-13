import { Injectable } from "@angular/core";
import { Storage } from '@ionic/storage';
import * as _ from 'underscore';

import { User } from "./AuthProvider";

@Injectable()
export class DatabaseProvider {
    users: Array<User>;

    constructor(private storage: Storage) {

        // init users
        this.storage.get("USERS").then((users: Array<User>) => {
            console.log("users from cookie", users);
            if (users === undefined || users === null) {
                this.users = new Array();
            } else {
                this.users = users;
            }
        });
    }

    private guid() {
        function s4() {
            return Math.floor((1 + Math.random()) * 0x10000)
                .toString(16)
                .substring(1);
        }
        return s4() + s4() + '-' + s4() + '-' + s4() + '-' + s4() + '-' + s4() + s4() + s4();
    }

    registerUser(user: User) {
        let promise = new Promise((resolve, reject) => {

            user.id = this.guid();
            this.users.push(user);
            this.storage.set("USERS", this.users);
            resolve("USER_CREATED_SUCCSSFULLY");
        });

        return promise;
    }

    findUser(email: string, password: string) {
        let promise = new Promise((resolve, reject) => {
            let user = _.find(this.users, (user: User) => { return (user.email === email && user.password === password) });

            if (user !== undefined && user !== null) {
                resolve(user);
            } else {
                reject("USER_NOT_FOUND");
            }
        });

        return promise;
    }
}