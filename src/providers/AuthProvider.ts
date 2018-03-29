import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

export class User {
    email: string;
    password: string;
    type: Role;

    constructor(email: string, password: string, type: Role) {
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
}

@Injectable()
export class AuthService {
    currentUser: User;
    currentProfile: any;
    profiles: Array<any>;
    presciptions: Array<any>;
    doctors: Array<string>;
    hospitals: Array<string>;

    constructor() {
        this.profiles = [
            { name: "Han", image: "assets/imgs/avatar-han.png" },
            { name: "Leia", image: "assets/imgs/avatar-Leia.png" },
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

    public login(credentials: User) {
        return Observable.create(observer => {
            setTimeout(() => {
                this.currentUser = new User(credentials.email, credentials.password, credentials.type);
                observer.next(true);
                observer.complete();
            }, 1000);
        });
    }

    public register(credentials: User) {
        return Observable.create(observer => {
            setTimeout(() => {
                observer.next(true);
                observer.complete();
            }, 2000);
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
        return [Role.USER, Role.DOCTOR, Role.DRUG_ASSIST, Role.INSURANCE_PROVIDER];
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

    public logout() {
        return Observable.create(observer => {
            this.currentUser = null;
            observer.next(true);
            observer.complete();
        });
    }
}