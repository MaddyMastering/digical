import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Storage } from '@ionic/storage';
import 'rxjs/add/operator/map';

import { DatabaseProvider } from './DatabaseProvider';

export class User {
    id: string;
    name: string;
    email: string;
    password: string;
    type: Role;
    imageUrl: string;

    constructor(name: string, email: string, password: string, type: Role) {
        this.name = name;
        this.email = email;
        this.password = password;
        this.type = type;
    }
}

export class Role {
    static USER: string = 'User';
    static DOCTOR: string = 'Doctor';
    static DRUG_ASSIST: string = 'Drug Assist';
    static INSURANCE_PROVIDER: string = 'Insurance Provider';
    static HOSPITAL: string = 'Hospital';
}

@Injectable()
export class AuthService {
    currentUser: User = null;
    currentProfile: any;
    profiles: Array<any>;
    presciptions: Array<any>;
    doctors: Array<string>;
    hospitals: Array<string>;

    constructor(private db: DatabaseProvider, private storage: Storage) {

        // init login user
        this.storage.get("CURRENT_USER").then((user: User) => {
            console.log("login user from cookie", user);
            if (user !== undefined && user !== null) {
                this.currentUser = user;
            }
        });

        this.profiles = [
            { name: "Han", image: "assets/imgs/avatar-han.png" },
            { name: "Leia", image: "assets/imgs/avatar-leia.png" },
            { name: "Luke", image: "assets/imgs/avatar-luke.png" },
            { name: "Poe", image: "assets/imgs/avatar-poe.png" },
            { name: "Rey", image: "assets/imgs/avatar-rey.png" }
        ];

        this.presciptions = [
            {
                hospital: "Fortis",
                doctor: "Dr.Junior",
                timestamp: 1521962141187,
                contents: [
                    { name: "Seroplex", quantity: "10", frequency: "Twice a day" },
                    { name: "Panadol", quantity: "4", frequency: "Once a day" },
                    { name: "Forcan", quantity: "5", frequency: "Once a day" }
                ],
                approved: false
            },
            {
                hospital: "Apollo",
                doctor: "Dr.Maddy",
                timestamp: 1521668142187,
                contents: [
                    { name: "Seroplex", quantity: "10", frequency: "Twice a day" },
                    { name: "Panadol", quantity: "4", frequency: "Once a day" },
                    { name: "Forcan", quantity: "5", frequency: "Once a day" }
                ],
                approved: true
            }
        ];

        this.hospitals = ["Fortis Hospital", "Vanivilas Hospital", "Apollo Hospital", "Victoria Hospital", "Manipal Hospital", "Nimhans Hospital"];
        this.doctors = ["Dr.Junior", "Dr.Maddy", "Dr.Prakash", "Dr.Rajesh", "Dr.Vinay"];

        this.currentProfile = this.profiles[0];
    }

    private sleep(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
    }

    public async login(email, password) {
        await this.sleep(1500);

        let promise = new Promise((resolve, reject) => {

            this.db.findUser(email, password).then((data: User) => {
                this.currentUser = data;
                this.storage.set("CURRENT_USER", this.currentUser);
                resolve(data);
            }).catch((err) => {
                reject(err);
            });
        });

        return promise;
    }

    public isLoggedIn(): Promise<any> {
        let promise = new Promise((resolve, reject) => {
            this.storage.get("CURRENT_USER").then((user: User) => {
                if (user !== undefined && user !== null) {
                    resolve(user);
                } else {
                    reject("NOT_LOGGED_IN");
                }
            });
        });

        return promise;
    }

    public logout() {
        return Observable.create(observer => {
            this.currentUser = null;
            this.storage.remove("CURRENT_USER");
            observer.next(true);
            observer.complete();
        });
    }

    public setCurrentProfile(profile: any) {
        this.currentProfile = profile;
    }

    public getCurrentProfile() {
        return this.currentProfile;
    }

    public getUserInfo(): User {
        return this.currentUser;
    }

    public getRoles(): Array<string> {
        return [Role.USER, Role.DOCTOR, Role.DRUG_ASSIST, Role.INSURANCE_PROVIDER, Role.HOSPITAL];
    }

    public getProfiles(): Array<any> {
        return this.profiles;
    }

    public getPrescriptions(): Array<any> {
        return this.presciptions;
    }

    public getDoctors(): Array<string> {
        return this.doctors;
    }

    public getHospitals(): Array<string> {
        return this.hospitals;
    }
}