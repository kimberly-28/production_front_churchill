import { Component, OnInit } from '@angular/core';
import {AfterViewInit, ViewChild} from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';
import { EventSocketEntry } from 'app/interfaces/event-socket-entry';
import { SecurityAlarmsDetails } from 'app/interfaces/security-alarms-details';
import { ChFleetApiService } from 'app/services/ch-fleet-api.service';
import { WebSocketEventsService } from 'app/services/web-socket-events.service';


@Component({
  selector: 'app-security-alarms-panic-buttons',
  templateUrl: './security-alarms-panic-buttons.component.html',
  styleUrls: ['./security-alarms-panic-buttons.component.scss']
})

export class SecurityAlarmsPanicButtonsComponent implements OnInit, AfterViewInit {

  //Socket Event Entry
  //eventEntries: string[] = [];
  eventEntries: EventSocketEntry[];

  //Security interface
  securityAlarm: SecurityAlarmsDetails[];
  dataSource = new MatTableDataSource();
  //Angular Material Table and Filter Function
  filterValues = {};
  displayedColumns: string[] = [
                                'level',
                                'status', 
                                'idTicket', 
                                'eventDate', 
                                'driver', 
                                'idAsset', 
                                'type', 
                                'provider'
                            ];
  filterSelectObj = [];
  //data source read data from web socket
  //  dataSource = new MatTableDataSource();


  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  ngAfterViewInit(): void {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  constructor(private webSocketService: WebSocketEventsService,
              private emergencyEventsService: ChFleetApiService) {
    // Object to create Filter for the colummnprop in with the reference orders.orderStatus and so on
    this.filterSelectObj = [
        {
          name: 'Ticket Status',
          columnProp: 'status',
          options: []
        }, {
          name: 'Provider',
          columnProp: 'provider',
          options: []
        }
      ]
    }

  ngOnInit(): void {
    //Socket subscribe
    this.subscribe();
    //web service emergency events
    this.emergencyEventsService.getEmergencyEmployeeEvents().subscribe((data: SecurityAlarmsDetails[])=>{
        console.log(data);
        this.dataSource.data = data;
        console.log("emergency!")
        this.filterSelectObj.filter((o) => {
            o.options = this.getFilterObject(this.securityAlarm, o.columnProp);
          });
    });

    this.dataSource.filterPredicate = this.createFilter();
    this.dataSource.paginator = this.paginator;
  }

  subscribe(): void {
    console.log('Subscribing to socket ...');
    this.webSocketService.subscribe();
    this.webSocketService.outEven.subscribe((entry: EventSocketEntry[]) => {
      console.log('Entry received from EventEmitter.', entry);
    //  const jsonEntry = JSON.stringify(entry);
      //this.eventEntries.push(jsonEntry);
      this.eventEntries = entry;
    });
  }

      // Get Uniqu values from columns to build filter
      getFilterObject(fullObj, key) {
        const uniqChk = [];
        fullObj.filter((obj) => {
          if (!uniqChk.includes(obj[key])) {
            uniqChk.push(obj[key]);
          }
          return obj;
        });
        return uniqChk;
      }
  
        // Called on Filter change
  filterChange(filter, event) {
    //let filterValues = {}
    this.filterValues[filter.columnProp] = event.target.value.trim().toLowerCase()
    this.dataSource.filter = JSON.stringify(this.filterValues)
  }

  // Custom filter method fot Angular Material Datatable
  createFilter() {
    let filterFunction = function (data: any, filter: string): boolean {
      let searchTerms = JSON.parse(filter);
      let isFilterSet = false;
      for (const col in searchTerms) {
        if (searchTerms[col].toString() !== '') {
          isFilterSet = true;
        } else {
          delete searchTerms[col];
        }
      }

      console.log(searchTerms);

      let nameSearch = () => {
        let found = false;
        if (isFilterSet) {
          for (const col in searchTerms) {
            searchTerms[col].trim().toLowerCase().split(' ').forEach(word => {
              if (data[col].toString().toLowerCase().indexOf(word) != -1 && isFilterSet) {
                found = true
              }
            });
          }
          return found
        } else {
          return true;
        }
      }
      return nameSearch()
    }

    return filterFunction
  }
  // Reset table filters
  resetFilters() {
    this.filterValues = {}
    this.filterSelectObj.forEach((value, key) => {
      value.modelValue = undefined;
    })
    this.dataSource.filter = "";
  }

 /*  applyFilter(event: Event): void {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  } */
}

