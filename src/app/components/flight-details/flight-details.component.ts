import { HttpClient } from '@angular/common/http';
import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-flight-details',
  templateUrl: './flight-details.component.html',
  styleUrls: ['./flight-details.component.scss'],
})
export class FlightDetailsComponent implements OnInit {
  @ViewChild('myRange') hours;
  flightsDetails: any;
  constructor(private readonly http: HttpClient) { }

  ngOnInit(): void {
    this.getFlightList();
  }

  getFlightList() {
    this.http.get('/assets/content/flight-details.json').subscribe(response => {
      this.flightsDetails = response;
      console.log(response);
    })
  }
}
