import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { TwitterAccount } from 'app/interfaces/twitter-accounts';
import { ChIncidentsApiService } from 'app/services/ch-incidents-api.service';
import { DialogFormAccountComponent } from './dialog-form-account/dialog-form-account.component';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';

export interface UserData {
  id: string;
  name  :  string;
  account  :  string;
  twitter_id : string;
  category : string;
  create_at: string;
  update_at: string;
}


interface Food {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-dialog-cuentas',
  templateUrl: './dialog-cuentas.component.html',
  styleUrls: ['./dialog-cuentas.component.scss']
})
export class DialogCuentasComponent implements OnInit {

  ///TABLA HISTÓRICO
displayedColumns: string[] = ['nombre', 'cuenta', 'twitter_id', 'categoria', 'create_at', 'update_at'];
dataSource: MatTableDataSource<UserData>;

@ViewChild(MatPaginator) paginator: MatPaginator;
@ViewChild(MatSort) sort: MatSort;

    twitterAccounts : TwitterAccount[];

  constructor(public dialog: MatDialog,
    private chIncidentsApiService: ChIncidentsApiService,) { }

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
    this.getAllTwitterAccounts();
  }

  getAllTwitterAccounts(){
    this.chIncidentsApiService.getAllTwitterAccounts().subscribe((data)=>{
        console.log(data);
        this.twitterAccounts = data;
        console.log(this.twitterAccounts);
        });
  }

  openDialogUpdateAccount(twitterAccount) 
  {
    const dialogRef = this.dialog.open(DialogFormAccountComponent,{ data : twitterAccount });

    dialogRef.afterClosed().subscribe(()=>{
        this.getAllTwitterAccounts();
    })


  }


  openDialogFormAccount() 
  {
   const dialogRef =  this.dialog.open(DialogFormAccountComponent);
   dialogRef.afterClosed().subscribe(()=>{
        this.getAllTwitterAccounts();
    })
  }

  deleteTwitterAccount(twitterAccount){
      this.chIncidentsApiService.deleteTwitterAccount(twitterAccount).subscribe((data)=>{
          console.log(data)
          this.getAllTwitterAccounts();
        });

       
  }
  }

