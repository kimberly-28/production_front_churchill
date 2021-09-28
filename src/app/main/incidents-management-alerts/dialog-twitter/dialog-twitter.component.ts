import { Component, OnInit } from '@angular/core';
import { DialogCuentasComponent } from './dialog-cuentas/dialog-cuentas.component';
import { MatDialog } from '@angular/material/dialog';
import { DialogKeyWordsComponent } from './dialog-key-words/dialog-key-words.component';
import { DialogActionProtocolsComponent } from './dialog-action-protocols/dialog-action-protocols.component';

import { DialogAlertComponent } from './dialog-alert/dialog-alert.component';
import { DialogRiskLevelComponent } from './dialog-risk-level/dialog-risk-level.component';


@Component({
  selector: 'app-dialog-twitter',
  templateUrl: './dialog-twitter.component.html',
  styleUrls: ['./dialog-twitter.component.scss']
})
export class DialogTwitterComponent implements OnInit {
  

  constructor(public dialog: MatDialog){ }

  ngOnInit(): void {
    
  }

  openDialogCuentas()
  {
    this.dialog.open(DialogCuentasComponent);
  }

  openDialogKeyWords()
  {
    this.dialog.open(DialogKeyWordsComponent);
  }

  openDialogActionProtocols()
  {
    this.dialog.open(DialogActionProtocolsComponent);
  }

  openDialogRiskLevel()
  {
    this.dialog.open(DialogRiskLevelComponent);
  }

  openDialogAlert()
  {
    this.dialog.open(DialogAlertComponent);
  }
  

}
