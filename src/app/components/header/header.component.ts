import { Component, OnInit } from '@angular/core';
import { environment as env } from 'src/environments/environment';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  logo = `${env.ASSETS}images/IECEP-WHITE-BLUE.png`

  constructor() { }

  ngOnInit(): void {
  }

}
