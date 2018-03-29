import { AuthService } from '../providers/AuthProvider';
import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { Camera } from '@ionic-native/camera';
import { QRScanner } from '@ionic-native/qr-scanner';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
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
        HomePage,
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
        IonicModule.forRoot(MyApp)
    ],
    bootstrap: [IonicApp],
    entryComponents: [
        MyApp,
        HomePage,
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
        Camera,
        StatusBar,
        SplashScreen,
        QRScanner,
        { provide: ErrorHandler, useClass: IonicErrorHandler }
    ]
})
export class AppModule { }
