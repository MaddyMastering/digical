import { AuthService } from '../providers/AuthProvider';
import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { NgxQRCodeModule } from 'ngx-qrcode2';
import { BarcodeScanner } from '@ionic-native/barcode-scanner';
import { IonicStorageModule } from '@ionic/storage';

import { MyApp } from './app.component';
import { DescriptionPage } from '../pages/description/description';
import { DiagnosticsPage } from '../pages/diagnostics/diagnostics';
import { FitbitPage } from '../pages/fitbit/fitbit';
import { HomePage } from '../pages/home/home';
import { HomeDoctorPage } from '../pages/home/homeDoctor';
import { InsurancePage } from '../pages/insurance/insurance';
import { LoginPage } from '../pages/login/login';
import { NotificationPage } from '../pages/notifications/notifications';
import { ProductPage } from '../pages/products/products';
import { ProfilePage } from '../pages/profile/profile';
import { PrescriptionPage } from '../pages/prescriptions/prescriptions';
import { RecordsPage } from '../pages/records/records';
import { RegisterPage } from '../pages/register/register';
import { SlidesPage } from '../pages/slides/slide';
import { QrCodePage } from '../pages/qr-code/qrCode';
import { QrScanPage } from '../pages/scan/scan';
import { VaccinationPage } from '../pages/vaccinations/vaccination';
import { DatabaseProvider } from '../providers/DatabaseProvider';

@NgModule({
    declarations: [
        MyApp,
        DiagnosticsPage,
        DescriptionPage,
        FitbitPage,
        HomePage,
        HomeDoctorPage,
        InsurancePage,
        LoginPage,
        NotificationPage,
        ProductPage,
        ProfilePage,
        PrescriptionPage,
        RecordsPage,
        RegisterPage,
        QrCodePage,
        QrScanPage,
        SlidesPage,
        VaccinationPage
    ],
    imports: [
        BrowserModule,
        NgxQRCodeModule,
        IonicModule.forRoot(MyApp, {
            tabsHideOnSubPages: true
        }),
        IonicStorageModule.forRoot(),
    ],
    bootstrap: [IonicApp],
    entryComponents: [
        MyApp,
        DiagnosticsPage,
        DescriptionPage,
        FitbitPage,
        HomePage,
        HomeDoctorPage,
        InsurancePage,
        LoginPage,
        NotificationPage,
        ProductPage,
        ProfilePage,
        PrescriptionPage,
        RecordsPage,
        RegisterPage,
        QrCodePage,
        QrScanPage,
        SlidesPage,
        VaccinationPage
    ],
    providers: [
        AuthService,
        DatabaseProvider,
        BarcodeScanner,
        StatusBar,
        SplashScreen,
        { provide: ErrorHandler, useClass: IonicErrorHandler }
    ]
})
export class AppModule { }
