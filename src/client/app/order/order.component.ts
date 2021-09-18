import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { County } from '../../../shared/models/county';
import { Distinct } from '../../../shared/models/distinct';
import { CountyService } from './county.service';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.scss'],
})
export class OrderComponent implements OnInit {
  county$: Observable<County[]>;
  distinct$: Observable<Distinct[]>;
  group: FormGroup;

  constructor(private countyServie: CountyService, private fb: FormBuilder) {
    this.group = this.fb.group({
      contactName: ['', Validators.required],
      county: ['', Validators.required],
      distinct: ['', Validators.required],
      address: ['', Validators.required],
      receiveCounty: ['', Validators.required],
      receiveDistinct: ['', Validators.required],
      receiveAdress: ['', Validators.required],
    });
  }

  ngOnInit() {
    this.county$ = this.countyServie.getCounties();
  }

  onCountyChange(county: County) {
    this.distinct$ = this.countyServie.getDistincts(county.countyCode);
  }
}
