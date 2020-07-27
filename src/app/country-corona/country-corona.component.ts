import { Component, OnInit} from '@angular/core';
import { Countries } from '../shared/Country.model';
import { Router, ActivatedRoute } from '@angular/router';
import { CountryService } from '../shared/country.service';

@Component({
  selector: 'app-country-corona',
  templateUrl: './country-corona.component.html',
  styleUrls: ['./country-corona.component.css']
})
export class CountryCoronaComponent implements OnInit {
  countryList: Countries[];
  constructor( private countryService: CountryService,
    private router: Router,
    private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.countryList = this.countryService.getCountries();
  }

}
