import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { States } from '../../../../shared/State.model';
import { StateService } from '../../../../shared/state.service';

@Component({
  selector: 'app-total-cases',
  templateUrl: './total-cases.component.html',
  styleUrls: ['./total-cases.component.css']
})
export class TotalCasesComponent implements OnInit {
  country: number;
  state: States[];
  statename: string;
  totalcount: number;
 

  constructor( private stateService: StateService,
    private route: ActivatedRoute,
    private router: Router,
    ) { }

  ngOnInit(): void {
    // let statename :string ='';
    // let total :number;
    this.route.params
    .subscribe((params: Params) => {
      this.country = +params['id'];
      this.state = this.stateService.getState(this.country);
      this.statename = this.state[0].name;
      this.totalcount = this.state[0].totalcases;
      console.log(this.statename);
      console.log(this.totalcount);
    })
  }

}
