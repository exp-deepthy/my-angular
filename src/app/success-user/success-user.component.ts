import { Component, OnInit } from '@angular/core';
import { Messages } from '../shared/message.model';


@Component({
  selector: 'app-success-user',
  templateUrl: './success-user.component.html',
  styleUrls: ['./success-user.component.css']
})
export class SuccessUserComponent implements OnInit {

  msgList: Messages[] = [
    new Messages("Warning! This alert box could indicate a warning that might need attention.",1),
    new Messages(" Danger! This alert box could indicate a dangerous or potentially negative action.",2),
    new Messages("Primary! Indicates an important action.",3),
    new Messages("Secondary! Indicates a slightly less important action.",4),
    new Messages("Dark! Dark grey alert.",5),
    new Messages("Light! Light grey alert.",6)
  ];



  constructor() { }

  ngOnInit(): void {
    
  }

}
