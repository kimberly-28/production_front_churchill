import { Component, OnInit } from '@angular/core';




@Component({
  selector: 'app-dialog-message',
  templateUrl: './dialog-message.component.html',
  styleUrls: ['./dialog-message.component.scss']
})
export class DialogMessageComponent implements OnInit {

  lat: number;
  lng: number;
  lat2: number;
  lng2: number;
  lat3: number;
  lng3: number;
  lat4: number;
  lng4: number;
  zoom: number
  constructor() { 

        this.lat = 18.839367;
        this.lng = -97.140289;

        this.lat2 =  18.839009;
        this.lng2 = -97.139579;

        this.lat3 = 18.838933;
        this.lng3 = -97.137819;

        this.lat4 = 18.839639;
        this.lng4 = -97.138154;
     
        this.zoom = 16;
    }

  ngOnInit(): void {
  }
}
