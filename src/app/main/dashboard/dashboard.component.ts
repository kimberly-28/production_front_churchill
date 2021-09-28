import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DialogLogisticComponent } from './dialog-logistic/dialog-logistic.component';
import { DialogVehicleTrackingComponent } from './dialog-vehicle-tracking/dialog-vehicle-tracking.component';
import { DialogIncidentsComponent } from './dialog-incidents/dialog-incidents.component';
import { DialogAddReportComponent } from './dialog-add-report/dialog-add-report.component';
import { DialogEmergencyEmployeeComponent } from './dialog-emergency-employee/dialog-emergency-employee.component';
import { DialogSecurityComponent } from './dialog-security/dialog-security.component';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
    
  }

  openDialogLogistic() {
    this.dialog.open(DialogLogisticComponent);
  }
  openDialogIncidents () {
    this.dialog.open(DialogIncidentsComponent);
  }
  openDialogVehicleTracking () {
    this.dialog.open(DialogVehicleTrackingComponent);
  }
  openDialogEmergencyEmployee () {
    this.dialog.open(DialogEmergencyEmployeeComponent);
  }
  openDialogAddReport () {
    this.dialog.open(DialogAddReportComponent);
  }
  

  openDialogSecurity  () {
    this.dialog.open(DialogSecurityComponent);
  }
}
