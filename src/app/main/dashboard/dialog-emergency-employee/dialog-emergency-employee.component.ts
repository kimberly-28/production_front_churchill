import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DialogEmployeeDetailsComponent } from './dialog-employee-details/dialog-employee-details.component';

@Component({
  selector: 'app-dialog-emergency-employee',
  templateUrl: './dialog-emergency-employee.component.html',
  styleUrls: ['./dialog-emergency-employee.component.scss']
})
export class DialogEmergencyEmployeeComponent implements OnInit {
  

  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {

  }

  openDialogEmployeeDetails() {
    this.dialog.open(DialogEmployeeDetailsComponent);
  }


}
