import { AuthService } from '../providers/AuthProvider';
import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { NgxQRCodeModule } from 'ngx-qrcode2';
import { BarcodeScanner } from '@ionic-native/barcode-scanner';

import { MyApp } from './app.component';
import { DescriptionPage } from '../pages/description/description';
import { HomePage } from '../pages/home/home';
import { HomeDoctorPage } from '../pages/home/homeDoctor';
import { LoginPage } from '../pages/login/login';
import { ProfilePage } from '../pages/profile/profile';
import { PrescriptionPage } from '../pages/prescriptions/prescriptions';
import { RecordsPage } from '../pages/records/records';
import { RegisterPage } from '../pages/register/register';
import { QrCodePage } from '../pages/qr-home/qrCode';
import { QrScanPage } from '../pages/qr-home/qrScan';

@NgModule({
    declarations: [
        MyApp,
        DescriptionPage,
        HomePage,
        HomeDoctorPage,
        LoginPage,
        ProfilePage,
        PrescriptionPage,
        RecordsPage,
        RegisterPage,
        QrCodePage,
        QrScanPage
    ],
    imports: [
        BrowserModule,
        NgxQRCodeModule,
        IonicModule.forRoot(MyApp)
    ],
    bootstrap: [IonicApp],
    entryComponents: [
        MyApp,
        DescriptionPage,
        HomePage,
        HomeDoctorPage,
        LoginPage,
        ProfilePage,
        PrescriptionPage,
        RecordsPage,
        RegisterPage,
        QrCodePage,
        QrScanPage
    ],
    providers: [
        AuthService,
        BarcodeScanner,
        StatusBar,
        SplashScreen,
        { provide: ErrorHandler, useClass: IonicErrorHandler }
    ]
})
export class AppModule { }
