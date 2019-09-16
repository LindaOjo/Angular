import { Component } from '@angular/core';
import {Passenger} from '../../models/passenger.interface';

@Component ({
    selector: 'passenger-dashboard',
    styleUrls: ['passenger-dashboard.component.scss'],
    template : `
            <div>
            <h3>Airline Passengers</h3>
            <ul>
            	<li *ngFor = "let passenger of passengers; let i = index;">
            	<span 
            		class="status"
            		[class.checked-in]="passenger.checkedIn"></span>
            		{{i}} : {{passenger.fullname}}
            		<p>{{ passenger | json }}</p>
            		<div class="date">
            		Check in date: 
            		{{ passenger.checkInDate? (passenger.checkInDate | date: 'yMMMMd' | uppercase ) : 'Not checked in'}}
            		</div>
            		<div class ="children">
            				Children: {{ passenger.children?.length || 0 }}
            		</div>
            		<br>
            	</li>
            </ul>
            </div>
    `
})

export class PassengerDashboardComponent {
    passengers: Passenger[] = [{
        id: 1,
        fullname: 'Layo',
        checkedIn: true,
        checkInDate: 1409742000000,
        children: [{ name: 'George', age: 12 }, { name: 'George', age: 12 }]
    },
       
   {
       id: 2,
       fullname: 'Fayo',
       checkedIn: false,
       checkInDate: null,
       children: [{ name: 'George', age: 12 }, { name: 'George', age: 12 }]
   },

   {
       id: 3,
       fullname: 'Tayo',
       checkedIn: true,
       checkInDate: 1409742000000,
       children: null
   },

       {
       id: 4,
       fullname: 'Jayo',
       checkedIn: true,
       checkInDate: 1409742000000,
       children: [{ name: 'George', age: 12 }, { name: 'George', age: 12 }]
   
   },

   {
       id: 5,
       fullname: 'Mayo',
       checkedIn: false,
       checkInDate: null,
       children: null

   }]
    
}