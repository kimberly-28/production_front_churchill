
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DialogMessageComponent } from './dialog-message/dialog-message.component';
import { DialogTwitterComponent } from './dialog-twitter/dialog-twitter.component';


@Component({
  selector: 'app-incidents-management-alerts',
  templateUrl: './incidents-management-alerts.component.html',
  styleUrls: ['./incidents-management-alerts.component.scss']
})
export class IncidentsManagementAlertsComponent implements OnInit {
  
  constructor(public dialog: MatDialog) { }
  
  ngOnInit(): void {
 
  }
  openDialog() {
    this.dialog.open(DialogMessageComponent);
  }

  openDialogTwitter() 
  {
    this.dialog.open(DialogTwitterComponent);
  }

}