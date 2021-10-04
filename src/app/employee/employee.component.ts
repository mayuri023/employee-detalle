import {Component,OnInit} from '@angular/core';

export interface PeriodicElement {
  name: string;
  position: number;
  weight: string;
  symbol: string;
  city:string;
  email:string
}

const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, name: 'Akshay', weight: 'Rane', symbol: 'HR',city: 'Banglore',email:'aky21rane@gmail.com'},
  {position: 2, name: 'Shiryam', weight: 'Swami', symbol: 'Finance',city: 'Chennai',email:'swami.shriyam34567@gmail.com'},
  {position: 3, name: 'Shamim', weight: 'Jiwani', symbol: 'Automation',city: 'Pune',email:'shamim4637jiwani@gmail.com'},
  {position: 4, name: 'Neelu', weight:'Rana', symbol: 'Testing',city: 'Mumbai',email:'Neelu87392ranatyagi@gmail.com'},
  {position: 5, name: 'Ankit', weight: 'Jha', symbol: 'development',city: 'Delhi',email:'Jhaankit007@rediffmail.com'},
];

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})

export class EmployeeComponent implements OnInit {
  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol','city','email'];
  dataSource = ELEMENT_DATA;
  constructor() { }

  ngOnInit(): void {
  }
  
}
