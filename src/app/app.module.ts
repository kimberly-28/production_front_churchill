import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule, Routes } from '@angular/router';

// Angular Material
import { MatMomentDateModule } from '@angular/material-moment-adapter';
import { MatPaginatorModule} from '@angular/material/paginator';
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatTableModule } from '@angular/material/table';
import {MatTabsModule} from '@angular/material/tabs';
import {MatCardModule} from '@angular/material/card';
import {MatDialogModule} from '@angular/material/dialog';
import { MatGridListModule} from '@angular/material/grid-list';
import {MatListModule} from '@angular/material/list';

import { TranslateModule } from '@ngx-translate/core';

import { FuseModule } from '@fuse/fuse.module';
import { FuseSharedModule } from '@fuse/shared.module';
import { FuseProgressBarModule, FuseSidebarModule, FuseThemeOptionsModule } from '@fuse/components';

import { fuseConfig } from 'app/fuse-config';

import { AppComponent } from 'app/app.component';
import { LayoutModule } from 'app/layout/layout.module';
import { LogisticTransportationComponent } from './main/logistic-transportation/logistic-transportation.component';

import { VehicleTrackingSystemComponent } from './main/vehicle-tracking-system/vehicle-tracking-system.component';
import { AppRoutingModule } from './main/app-routing.module';
import { AgmCoreModule } from '@agm/core';

import { SecurityAlarmsPanicButtonsComponent } from './main/security-alarms-panic-buttons/security-alarms-panic-buttons.component';
import { EmergencyEmployeeNumberComponent } from './main/emergency-employee-number/emergency-employee-number.component';
import { DialogVehicleTrackingDetailsComponent } from './main/vehicle-tracking-system/dialog-vehicle-tracking-details/dialog-vehicle-tracking-details.component';
import { DatePipe } from '@angular/common';
import { DialogVehicleTrackingAddGeofencingComponent } from './main/vehicle-tracking-system/dialog-vehicle-tracking-add-geofencing/dialog-vehicle-tracking-add-geofencing.component';
import { DialogVehicleTrackingAddGeoConfirmComponent } from './main/vehicle-tracking-system/dialog-vehicle-tracking-add-geo-confirm/dialog-vehicle-tracking-add-geo-confirm.component';
import { GeofilterPipe } from './main/vehicle-tracking-system/dialog-vehicle-tracking-add-geofencing/geofilter.pipe';
import { IncidentsManagementAlertsComponent } from './main/incidents-management-alerts/incidents-management-alerts.component';
import { MatProgressBar, MatProgressBarModule } from '@angular/material/progress-bar';
import { DialogReportsComponent } from './main/incidents-management-alerts/dialog-reports/dialog-reports.component';


//Gráficos

import { ChartsModule } from 'ng2-charts';
import { DialogMessageComponent } from './main/incidents-management-alerts/dialog-message/dialog-message.component';
import { DialogTwitterComponent } from './main/incidents-management-alerts/dialog-twitter/dialog-twitter.component';
import { DialogCuentasComponent } from './main/incidents-management-alerts/dialog-twitter/dialog-cuentas/dialog-cuentas.component';
import { MatOptionModule } from '@angular/material/core';
import { MatSelectModule } from '@angular/material/select';
import { DialogKeyWordsComponent } from './main/incidents-management-alerts/dialog-twitter/dialog-key-words/dialog-key-words.component';
import { DialogActionProtocolsComponent } from './main/incidents-management-alerts/dialog-twitter/dialog-action-protocols/dialog-action-protocols.component';
import { DialogFormAccountComponent } from './main/incidents-management-alerts/dialog-twitter/dialog-cuentas/dialog-form-account/dialog-form-account.component';
import { DialogFormKeyWordsComponent } from './main/incidents-management-alerts/dialog-twitter/dialog-key-words/dialog-form-key-words/dialog-form-key-words.component';
import { DialogAlertComponent } from './main/incidents-management-alerts/dialog-twitter/dialog-alert/dialog-alert.component';
import { DialogFormAlertComponent } from './main/incidents-management-alerts/dialog-twitter/dialog-alert/dialog-form-alert/dialog-form-alert.component';
import { DialogRiskLevelComponent } from './main/incidents-management-alerts/dialog-twitter/dialog-risk-level/dialog-risk-level.component';
import { DialogFormActionProtocolsComponent } from './main/incidents-management-alerts/dialog-twitter/dialog-action-protocols/dialog-form-action/dialog-form-action.component';
import { DashboardComponent } from './main/dashboard/dashboard.component';
import { DialogLogisticComponent } from './main/dashboard/dialog-logistic/dialog-logistic.component';

import { DialogVehicleTrackingComponent } from './main/dashboard/dialog-vehicle-tracking/dialog-vehicle-tracking.component';
import { DialogIncidentsComponent } from './main/dashboard/dialog-incidents/dialog-incidents.component';
import {MatChipsModule} from '@angular/material/chips';
import {MatBadgeModule} from '@angular/material/badge';
import { DialogAddReportComponent } from './main/dashboard/dialog-add-report/dialog-add-report.component';
import { DialogEmergencyEmployeeComponent } from './main/dashboard/dialog-emergency-employee/dialog-emergency-employee.component';
import { DialogSecurityComponent } from './main/dashboard/dialog-security/dialog-security.component';
import { DialogLogisticDetailsComponent } from './main/dashboard/dialog-logistic/dialog-logistic-details/dialog-logistic-details.component';
import { DialogVehicleDetailsComponent } from './main/dashboard/dialog-vehicle-tracking/dialog-vehicle-details/dialog-vehicle-details.component';
import { DialogIncidentsDetailsComponent } from './main/dashboard/dialog-incidents/dialog-incidents-details/dialog-incidents-details.component';
import { DialogEmployeeDetailsComponent } from './main/dashboard/dialog-emergency-employee/dialog-employee-details/dialog-employee-details.component';
import { DialogDriverDetailComponent } from './main/logistic-transportation/dialog-driver-detail/dialog-driver-detail.component';
import { MatSortModule } from '@angular/material/sort';
import { DialogTransportDetailComponent } from './main/logistic-transportation/dialog-transport-detail/dialog-transport-detail.component';
import { DialogAddDTComponent } from './main/logistic-transportation/dialog-add-dt/dialog-add-dt.component';
import { DialogHistoricDTComponent } from './main/logistic-transportation/dialog-historic-dt/dialog-historic-dt.component';
import { DialogDangerZoneComponent } from './main/logistic-transportation/dialog-danger-zone/dialog-danger-zone.component';
import { DialogAuthorizedStopsComponent } from './main/logistic-transportation/dialog-authorized-stops/dialog-authorized-stops.component';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatExpansionModule} from '@angular/material/expansion';
import { MatMenuModule } from '@angular/material/menu';
import { DriverSpeedComponent } from './main/logistic-transportation/driver-speed/driver-speed.component';
import { DialogRouteTrackingComponent } from './main/logistic-transportation/dialog-route-tracking/dialog-route-tracking.component';


const appRoutes: Routes = [
    {
        path      : '**',
        redirectTo: 'dashboard'
    }
];

@NgModule({

    providers: [
        DatePipe
    ],

    declarations: [
        AppComponent,
        LogisticTransportationComponent,
        VehicleTrackingSystemComponent,
        SecurityAlarmsPanicButtonsComponent,
        EmergencyEmployeeNumberComponent,
        DialogVehicleTrackingDetailsComponent,
        DialogVehicleTrackingAddGeofencingComponent,
        DialogVehicleTrackingAddGeoConfirmComponent,
        GeofilterPipe,
        IncidentsManagementAlertsComponent,
        DialogReportsComponent,
        DialogMessageComponent,
        DialogTwitterComponent,
        DialogCuentasComponent,
        DialogKeyWordsComponent,
        DialogActionProtocolsComponent,
        DialogFormAccountComponent,
        DialogFormKeyWordsComponent,
        DialogRiskLevelComponent,
        DialogAlertComponent,
        DialogFormAlertComponent,
        DialogFormActionProtocolsComponent,
        DashboardComponent,
        DialogLogisticComponent,
        DialogVehicleTrackingComponent,
        DialogIncidentsComponent,
        DialogAddReportComponent,
        DialogEmergencyEmployeeComponent,
        DialogSecurityComponent,
        DialogLogisticDetailsComponent,
        DialogVehicleDetailsComponent,
        DialogIncidentsDetailsComponent,
        DialogEmployeeDetailsComponent,
        DialogDriverDetailComponent,
        DialogTransportDetailComponent,
        DialogAddDTComponent,
        DialogHistoricDTComponent,
        DialogHistoricDTComponent,
        DialogAddDTComponent,
        DialogDangerZoneComponent,
        DialogAuthorizedStopsComponent,
        DriverSpeedComponent,
        DialogRouteTrackingComponent,
    ],

    entryComponents: [
        DialogReportsComponent,
        DialogMessageComponent,
        DialogTwitterComponent,
        DialogCuentasComponent,
        DialogKeyWordsComponent,
        DialogFormAccountComponent,
        DialogFormKeyWordsComponent,
        DialogFormAlertComponent,
        DialogRiskLevelComponent,
        DialogFormActionProtocolsComponent,
        DialogIncidentsDetailsComponent,
        DialogVehicleDetailsComponent,
        DialogLogisticDetailsComponent,
        DialogEmployeeDetailsComponent,
        DialogTransportDetailComponent,
        DialogDangerZoneComponent,
        DialogAuthorizedStopsComponent,
        
      ],
    imports     : [
        AppRoutingModule,
        BrowserModule,
        BrowserAnimationsModule,
        HttpClientModule,
        AgmCoreModule.forRoot({
            apiKey: 'AIzaSyBt8_sZvU3q9XW_kM6dfTq8fGaERwByfH0',
            libraries: ['drawing']
          }),
        RouterModule.forRoot(appRoutes, { relativeLinkResolution: 'legacy' }),

        TranslateModule.forRoot(),

        // Material moment date module
        MatMomentDateModule,

        // Material
        MatButtonModule,
        MatIconModule,
        MatTableModule,
        MatPaginatorModule,
        MatCheckboxModule,
        MatFormFieldModule,
        MatInputModule,
        MatTabsModule,
        MatCardModule,
        MatDialogModule,
        MatGridListModule,
        MatListModule,
        MatInputModule,
        MatInputModule,
        MatProgressBarModule,
        MatOptionModule,
        MatSelectModule,
        MatChipsModule,
        MatBadgeModule,
        MatSortModule,
        MatPaginatorModule,
        MatDatepickerModule,
        MatExpansionModule,
        MatMenuModule,
        
        // Fuse modules
        FuseModule.forRoot(fuseConfig),
        FuseProgressBarModule,
        FuseSharedModule,
        FuseSidebarModule,
        FuseThemeOptionsModule,

        // App modules
        LayoutModule,

        //Gráficos
        ChartsModule
       
    ],
    bootstrap   : [
        AppComponent
    ]
})
export class AppModule
{
}
