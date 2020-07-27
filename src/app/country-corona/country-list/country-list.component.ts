import { Component, OnInit, Input } from '@angular/core';
import { Countries } from '../../shared/Country.model';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-country-list',
  templateUrl: './country-list.component.html',
  styleUrls: ['./country-list.component.css']
})
export class CountryListComponent implements OnInit {

  @Input() cntry: Countries;
  @Input() index: number;
  constructor( private router: Router,
    private route: ActivatedRoute){ }

  ngOnInit(): void {
  }

}
