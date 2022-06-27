import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-flight',
  templateUrl: './flight.component.html',
  styleUrls: ['./flight.component.scss'],
})
export class FlightComponent implements OnInit {
  destination = '';
  departure = '';
  departureDate = '';
  returnDate = '';
  travellers = '';
  class = '';
  constructor(private readonly router: Router) {}

  ngOnInit(): void {}

  onSubmit() {
    console.log(this.departure, this.class,this.departureDate,this.returnDate,this.destination);
    this.router.navigate(['/flight-details']);
  }
}
