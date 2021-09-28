import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { IncidentsDetails } from 'app/interfaces/incidents-details';
import { ChIncidentsApiService } from 'app/services/ch-incidents-api.service';
import { DialogFormKeyWordsComponent } from './dialog-form-key-words/dialog-form-key-words.component';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';

export interface UserData {
  palabra_clave: string;
  alerta  :  string;
  riesgo  :  string;
  protocolo : string;
  create_at: string;
  update_at: string;
}

interface Food {
  value: string;
  viewValue: string;
}
@Component({
  selector: 'app-dialog-key-words',
  templateUrl: './dialog-key-words.component.html',
  styleUrls: ['./dialog-key-words.component.scss']
})
export class DialogKeyWordsComponent implements OnInit {

    ///TABLA HISTÓRICO
displayedColumns: string[] = ['palabra_clave', 'alerta', 'riesgo', 'protocolo', 'create_at', 'update_at'];
dataSource: MatTableDataSource<UserData>;

@ViewChild(MatPaginator) paginator: MatPaginator;
@ViewChild(MatSort) sort: MatSort;
  
  keyWords: IncidentsDetails[];
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
        this.getAllKeyWords();
  }

  getAllKeyWords(){
    this.chIncidentsApiService.getAllKeyWords().subscribe((data)=>{
        console.log(data);
        this.keyWords = data;
        console.log(this.keyWords);
        });
  }
  
  openDialogFormKeyWords() 
  {
   const dialogRef =  this.dialog.open(DialogFormKeyWordsComponent);
   dialogRef.afterClosed().subscribe(()=>{
        this.getAllKeyWords();
    })
  }

  deleteKeyWord(keyword)

  {
    this.chIncidentsApiService.deleteKeyWord(keyword).subscribe((data)=>{
        console.log(data)
        this.getAllKeyWords();
      });
      {
        console.log(keyword)
        console.log(keyword.id)
      }
     
}


openDialogUpdateKeyWord(keyWord) 
{
  const dialogRef = this.dialog.open(DialogFormKeyWordsComponent,{ data : keyWord });

  dialogRef.afterClosed().subscribe(()=>{
      this.getAllKeyWords();
  })


}


}

