import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';

import { Countries } from '../../../shared/Country.model';
import { States } from '../../../shared/State.model';
import { CountryService } from '../../../shared/country.service';
import { StateService } from '../../../shared/state.service';

@Component({
  selector: 'app-country-details',
  templateUrl: './country-details.component.html',
  styleUrls: ['./country-details.component.css']
})
export class CountryDetailsComponent implements OnInit {
  id: number;
  country: Countries;
  state: States[];

  constructor(private countryService: CountryService,
    private stateService: StateService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    this.route.params
    .subscribe((params: Params) => {
      this.id = +params['id'];
      this.country = this.countryService.getCountry(this.id);
    })
  }
  onClick()
  {
    this.state = this.stateService.getState(this.id);
    // this.router.navigate(['state']);
    // this.router.navigateByUrl('/state');
  }
}
