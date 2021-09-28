import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { stringify } from '@angular/compiler/src/util';

export interface UserData {
  id: string;
  alert: string;
  conductorVehicle: string;
  transportista: string;
  ubicacion: string;
}

const ALERT: string[] = [
  'Anillo Periférico (Valle de México)', 'Avenida de los Insurgentes', 'Calzada de la Viga', 'Eje Central Lázaro Cárdenas'
];

const NAMES: string[] = [
  'Maia', 'Asher', 'Olivia', 'Atticus', 'Amelia', 'Jack', 'Charlotte', 'Theodore', 'Isla', 'Oliver',
  'Isabella', 'Jasper', 'Cora', 'Levi', 'Violet', 'Arthur', 'Mia', 'Thomas', 'Elizabeth'
];

@Component({
  selector: 'app-dialog-vehicle-details',
  templateUrl: './dialog-vehicle-details.component.html',
  styleUrls: ['./dialog-vehicle-details.component.scss']
})

export class DialogVehicleDetailsComponent implements OnInit, AfterViewInit {

  displayedColumns: string[] = ['id',  'alert', 'conductorVehicle', 'transportista', 'ubicacion'];
  dataSource: MatTableDataSource<UserData>;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor() { 

    const users = Array.from({length: 100}, (_, k) => createNewUser(k + 1));

    // Assign the data to the data source for the table to render
    this.dataSource = new MatTableDataSource(users);
   
   function createNewUser(id: number): UserData {
    const name = NAMES[Math.round(Math.random() * (NAMES.length - 1))] + ' ' +
      NAMES[Math.round(Math.random() * (NAMES.length - 1))].charAt(0) + '.';
  
    return {
      id: id.toString(),
      alert: Math.round(Math.random() * 100).toString(),
      conductorVehicle: id.toString(),
      transportista:  id.toString(),
      ubicacion:  id.toString(),
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

  lat = 23.8519757;
  lng = -103.017743;
  zoom = 6;

  ngOnInit(): void {
  }

}
