import { Component, OnDestroy, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { VehicleDetails } from 'app/interfaces/vehicle-details';
import { ChFleetApiService } from 'app/services/ch-fleet-api.service';
import { Label, MultiDataSet, Color } from 'ng2-charts';
import { interval, Subscription } from 'rxjs';
import { DialogVehicleTrackingAddGeofencingComponent } from './dialog-vehicle-tracking-add-geofencing/dialog-vehicle-tracking-add-geofencing.component';
import { DialogVehicleTrackingDetailsComponent } from './dialog-vehicle-tracking-details/dialog-vehicle-tracking-details.component';
import {  ViewChild } from '@angular/core';
import { ChartDataSets, ChartOptions, ChartType } from 'chart.js';
import { BaseChartDirective } from 'ng2-charts';
import { MatColors } from '../../../@fuse/mat-colors/index';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';

export interface UserData {
  vehiculo: string;
  conductor: string;
  proveedor: string;
  ubicacion: string;
  riesgo: string;
  alerta: string;
  protocolo: string;
}

@Component({
  selector: 'app-vehicle-tracking-system',
  templateUrl: './vehicle-tracking-system.component.html',
  styleUrls: ['./vehicle-tracking-system.component.scss']
})

export class VehicleTrackingSystemComponent implements OnInit, OnDestroy  {

  displayedColumns: string[] = ['vehiculo', 'conductor', 'proveedor', 'ubicacion', 'riesgo', 'alerta', 'protocolo'];
  dataSource: MatTableDataSource<UserData>;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;


  public lineChartData: ChartDataSets[] = [
    { data: [65, 59, 80, 81, 56, 55, 40, 65, 59, 80, 81, 56, 55, 40, 65], label: 'Security' },
    { data: [28, 48, 40, 19, 86, 27, 90, 28, 48, 40, 19, 86, 27, 90, 28], label: 'Safety' },
    { data: [180, 480, 770, 90, 1000, 270, 400, 65, 59, 80, 81, 56, 55, 40, 50], label: 'Logistic', yAxisID: 'y-axis-1' },
  ];
  
  public lineChartLabels: Label[] = ['6am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm', '9pm', '10pm'];
  public lineChartOptions: (ChartOptions & { annotation: any }) = {
    responsive: true,
    scales: {
      // We use this empty structure as a placeholder for dynamic theming.
      xAxes: [{}],
      yAxes: [
        {
          id: 'y-axis-0',
          position: 'left',
        },
        {
          id: 'y-axis-1',
          position: 'right',
          gridLines: {
            color: 'rgba(255,0,0,0.3)',
          },
          ticks: {
            fontColor: 'blue',
          }
        }
      ]
    },
    annotation: {
      annotations: [
        {
          type: 'line',
          mode: 'vertical',
          scaleID: 'x-axis-0',
          value: 'March',
          borderColor: 'orange',
          borderWidth: 2,
          label: {
            enabled: true,
            fontColor: 'orange',
            content: 'LineAnno'
          }
        },
      ],
    },
  };
  public lineChartColors: Color[] = [
    { // grey
      backgroundColor: 'rgba(148,159,177,0.2)',
      borderColor: 'rgba(148,159,177,1)',
      pointBackgroundColor: 'rgba(148,159,177,1)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(148,159,177,0.8)'
    },
    { // dark grey
      backgroundColor: 'rgba(77,83,96,0.2)',
      borderColor: 'rgba(77,83,96,1)',
      pointBackgroundColor: 'rgba(77,83,96,1)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(77,83,96,1)'
    },
    { // red
      backgroundColor: 'rgba(255,0,0,0.3)',
      borderColor: 'red',
      pointBackgroundColor: 'rgba(148,159,177,1)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(148,159,177,0.8)'
    }
  ];
  public lineChartLegend = true;
  public lineChartType: ChartType = 'line';
  
  @ViewChild(BaseChartDirective, { static: true }) chart: BaseChartDirective;

  public randomize(): void {
    for (let i = 0; i < this.lineChartData.length; i++) {
      for (let j = 0; j < this.lineChartData[i].data.length; j++) {
        this.lineChartData[i].data[j] = this.generateNumber(i);
      }
    }
    this.chart.update();
  }

  private generateNumber(i: number): number {
    return Math.floor((Math.random() * (i < 2 ? 100 : 1000)) + 1);
  }

  // events
  public chartClicked({ event, active }: { event: MouseEvent, active: {}[] }): void {
    console.log(event, active);
  }

  public chartHovered({ event, active }: { event: MouseEvent, active: {}[] }): void {
    console.log(event, active);
  }

  public hideOne(): void {
    const isHidden = this.chart.isDatasetHidden(1);
    this.chart.hideDataset(1, !isHidden);
  }

  public pushOne(): void {
    this.lineChartData.forEach((x, i) => {
      const num = this.generateNumber(i);
      const data: number[] = x.data as number[];
      data.push(num);
    });
    this.lineChartLabels.push(`Label ${this.lineChartLabels.length}`);
  }

  public changeColor(): void {
    this.lineChartColors[2].borderColor = 'green';
    this.lineChartColors[2].backgroundColor = `rgba(0, 255, 0, 0.3)`;
  }

  public changeLabel(): void {
    this.lineChartLabels[2] = ['1st Line', '2nd Line'];
  }

    // Doughnut
    public doughnutChartLabels: Label[] = ['Sin cumplimiento', 'En cumplimiento'];
    public doughnutChartDataSecurity: MultiDataSet = [[ 25 ,75    ],];
    public doughnutChartType: ChartType = 'doughnut';

       // Doughnut
     //  public doughnutChartLabels: Label[] = ['En cumplimiento', 'Sin cumplimiento'];
       public doughnutChartDataSafety: MultiDataSet = [[ 20, 80  ],];
   //    public doughnutChartType: ChartType = 'doughnut';

          // Doughnut
 //   public doughnutChartLabels: Label[] = ['En cumplimiento', 'Sin cumplimiento'];
    public doughnutChartDataLogistic: MultiDataSet = [[10, 90  ],];
  //  public doughnutChartType: ChartType = 'doughnut';
      
  lat: number;
  lng: number;
  zoom = 20;


/*   vehiclesSmartTracker = [];
  vehiclesFirstCall = []; */
  
  vehiclesFirstCall: VehicleDetails[];
  vehiclesSmartTracker: VehicleDetails[];

  private subscriptions: Subscription[] = [];
  subFRC;
  subSMT;

  constructor(public dialogTrackingDetails: MatDialog,
              public dialogAddGeofencing: MatDialog,
              private chFleetApiService: ChFleetApiService) {
    this.lat = 19.350608;
    this.lng = -99.266165;
    this.zoom = 6;
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
   
   ngOnInit(): void {
        this.getLastLocationInitFRC();
        this.getLastLocationInitSMT();
    }

    getLastLocationInitFRC(){
        this.chFleetApiService.getLastLocationFirstCall().subscribe((data)=>{
            this.vehiclesFirstCall = data;
            console.log(data);
            });
    }

    getLastLocationInitSMT(){
        this.chFleetApiService.getLastLocationSmartTracker().subscribe((data)=>{
            this.vehiclesSmartTracker = data;
            console.log(data);
            });
    }

    ngOnDestroy(): void {
        this.subSMT.unsubscribe();
        this.subFRC.unsubscribe();
    }


    getLastLocation(index){
        console.log(index)
        if(index == 0){
         //   this.subscriptions.forEach( sub => sub.unsubscribe);
         this.getLastLocationFRC();
         this.subSMT.unsubscribe();
        }
        if(index == 1){
         //   this.subscriptions.forEach( sub => sub.unsubscribe);
         this.getLastLocationSMT();
         this.subFRC.unsubscribe();
        }
    }

    getLastLocationFRC(){
        const intervalFRC = interval(900000);
        this.subFRC = intervalFRC.subscribe(()=>{
            this.chFleetApiService.getLastLocationFirstCall().subscribe((data)=>{
                this.vehiclesFirstCall = data;
                console.log(data);
                });
        });
    }

    getLastLocationSMT(){
        const smtRefresh = interval(180000);
        this.subSMT = smtRefresh.subscribe(()=>{
            this.chFleetApiService.getLastLocationSmartTracker().subscribe((data)=>{
                this.vehiclesSmartTracker = data;
                console.log(data);
                });
        });
 
    }

   openTrackingDetails(assetId, provider) {
    console.log("entro en la function dialog" + assetId);
    console.log("entro en la function dialog" + provider);
    const dialogRefTrackingDetails = this.dialogTrackingDetails.open(DialogVehicleTrackingDetailsComponent, {data:{assetId: assetId, provider: provider}});

  }

  //Open dialog add geofencing FRC
  openAddGeofencing(provider){
    console.log("add geofencing with" + provider);
    const dialogRefAddGeofencing = this.dialogAddGeofencing.open(DialogVehicleTrackingAddGeofencingComponent, {data:{provider: provider}});

  }

}
