import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';

export interface UserData {
  id: string;
  gps: string;
  zone: string;
}

const ZONE: string[] = [
  'Anillo Periférico (Valle de México)', 'Avenida de los Insurgentes', 'Calzada de la Viga', 'Eje Central Lázaro Cárdenas'
];
const NAMES: string[] = [
  'Maia', 'Asher', 'Olivia', 'Atticus', 'Amelia', 'Jack', 'Charlotte', 'Theodore', 'Isla', 'Oliver',
  'Isabella', 'Jasper', 'Cora', 'Levi', 'Violet', 'Arthur', 'Mia', 'Thomas', 'Elizabeth'
];

@Component({
  selector: 'app-dialog-incidents-details',
  templateUrl: './dialog-incidents-details.component.html',
  styleUrls: ['./dialog-incidents-details.component.scss']
})
export class DialogIncidentsDetailsComponent implements OnInit {

displayedColumns: string[] = ['id', 'gps', 'zone'];
  dataSource: MatTableDataSource<UserData>;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;


  constructor(public dialog: MatDialog) {

    this.lat = 18.839367;
        this.lng = -97.140289;

        this.lat2 =  18.839009;
        this.lng2 = -97.139579;

        this.lat3 = 18.838933;
        this.lng3 = -97.137819;

        this.lat4 = 18.839639;
        this.lng4 = -97.138154;
     
        this.zoom = 16;

        const users = Array.from({length: 100}, (_, k) => createNewUser(k + 1));

        // Assign the data to the data source for the table to render
        this.dataSource = new MatTableDataSource(users);

        function createNewUser(id: number): UserData {
          const name = NAMES[Math.round(Math.random() * (NAMES.length - 1))] + ' ' +
            NAMES[Math.round(Math.random() * (NAMES.length - 1))].charAt(0) + '.';
        
          return {
            id: id.toString(),
            gps: Math.round(Math.random() * 100).toString(),
            zone: ZONE[Math.round(Math.random() * (ZONE.length - 1))]
          };
        }
   }

   ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  lat: number;
  lng: number;
  lat2: number;
  lng2: number;
  lat3: number;
  lng3: number;
  lat4: number;
  lng4: number;
  zoom: number

  ngOnInit(): void {
  }

}