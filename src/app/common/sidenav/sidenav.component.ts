import { Component, OnInit } from '@angular/core';

const DATA: String[] = ['How to apply', 'Mortgage options', 'Confirm mortgage', 'Property details', 
'Valuation', 'Other occupants/Solicitor', 'Payment details', 'Review and submit'];

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss']
})
export class SidenavComponent implements OnInit {

  constructor() { }

  list = DATA;

  ngOnInit(): void {
  }

}
