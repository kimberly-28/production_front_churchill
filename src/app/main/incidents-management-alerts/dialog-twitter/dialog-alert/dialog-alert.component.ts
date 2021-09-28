import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { IncidentsDetails } from 'app/interfaces/incidents-details';
import { ChIncidentsApiService } from 'app/services/ch-incidents-api.service';
import { DialogFormAlertComponent } from './dialog-form-alert/dialog-form-alert.component';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';


export interface UserData {
  alerta: string;
  riesgo  :  string;
  accion  :  string;
  create_at: string;
  update_at: string;
}

@Component({
  selector: 'app-dialog-alert',
  templateUrl: './dialog-alert.component.html',
  styleUrls: ['./dialog-alert.component.scss']
})
export class DialogAlertComponent implements OnInit {

  ///TABLA HISTÓRICO
displayedColumns: string[] = ['alerta', 'riesgo', 'accion', 'create_at', 'update_at'];
dataSource: MatTableDataSource<UserData>;

@ViewChild(MatPaginator) paginator: MatPaginator;
@ViewChild(MatSort) sort: MatSort;

  alertsType: IncidentsDetails[];
  constructor(private chIncidentsApiService: ChIncidentsApiService,
                public dialog: MatDialog) { }

                                  ///PAGINATOR
    ngAfterViewInit() {
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    }
  
    ///FILTRO
    applyFilter(event: Event) {
      const filterValue = (event.target as HTMLInputElement).value;
      this.dataSource.filter = filterValue.trim().toLowerCase();
  
      if (this.dataSource.paginator) {
        this.dataSource.paginator.firstPage();
      }
    }

  ngOnInit(): void {
      this.getAllAlertsType();
  }

  getAllAlertsType(){
    this.chIncidentsApiService.getAllAlertTypes().subscribe((data)=>{
        console.log(data);
        this.alertsType = data;
        });
  }

  deleteAlertTypes(alert){
    this.chIncidentsApiService.deleteAlertTypes(alert).subscribe((data)=>{
        console.log(data)
        this.getAllAlertsType();
      });
}
  
  openDialogFormAlert() 
  {
    this.dialog.open(DialogFormAlertComponent);
  }


}
