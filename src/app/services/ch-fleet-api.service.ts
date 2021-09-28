import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { GeofencingDetails } from 'app/interfaces/geofencing-details';
import { SecurityAlarmsDetails } from 'app/interfaces/security-alarms-details';
import { VehicleDetails } from 'app/interfaces/vehicle-details';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ChFleetApiService {

   // urlDev = "http://23.23.37.64:80/churchill/api/dev"
    url = "http://23.23.37.64/churchill/api/v1"
    

    localhost = "http://localhost:3000/geofencings"

    constructor(private http: HttpClient) { }
  
    getAllProviders(){
      return this.http.get(`${this.url}/master-tables/providers`);
    }
   
    //Events
    getGlobalEvents(){
        return this.http.get(`${this.url}/master-tables/global-events`);
    }

    getEventsFirstCall(){
        return this.http.get(`${this.url} /events/provider/FRC`);
    }

    getEventsSmartTracker(){
        return this.http.get(`${this.url} /events/provider/SMT`);
    }

    //Last Locations
    getLastLocationFirstCall(){
        return this.http.get<VehicleDetails[]>(`${this.url}/geolocation/provider/FRC/last-update`);
    }

     getLastLocationSmartTracker(){
        return this.http.get<VehicleDetails[]>(`${this.url}/geolocation/provider/SMT/last-update`);
    } 

/*     
        No working
        getLastLocationSmartTracker(){
        return this.http.get<VehicleDetails[]>(`${this.url}/geolocation/provider/SMT/last/24/hours`);
    } */
    
    //Get global event Pannic Button & Emergency CAll

    getEmergencyEmployeeEvents(){
        let params1 = new HttpParams().set('date', '2021-02-22');
        return this.http.get<SecurityAlarmsDetails[]>(`${this.url}/events/socket-events`,{params:params1});
      
    }

    //Tracking Locations
    getTrackingLocation(assetId: string, provider: string,date: string){
       //  let params1 = new HttpParams().set('date', date);
      let params1 = new HttpParams().set('date',  '2021-02-21');
        return this.http.get<VehicleDetails[]>(`${this.url}/geolocation/provider/${provider}/asset/${assetId}`,{params:params1});
       // return this.http.get<VehicleDetails[]>(`${this.url}/geolocation/provider/FRC/asset/6?date=2020-12-14`);
    }

    //------------- Geofencing services ---------------
    postNewGeofencing(registerGeofencing: GeofencingDetails){
        return this.http.post(`${this.localhost}`, registerGeofencing,  {responseType: 'text'} );
    }

    deleteGeofencing(id: number){
        return this.http.delete(`${this.localhost}/${id}`);
      }

    getAllGeofencings(){
        return this.http.get<GeofencingDetails[]>(`${this.localhost}`);
    }

}
