import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { DynamicFormBuilder, DynamicFormGroup } from 'ngx-dynamic-form-builder';
import { County } from '../../../shared/models/county';
import { Distinct } from '../../../shared/models/distinct';
import { CountyService } from './county.service';
import { Order } from '../../../shared/models/order';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.scss']
})
export class OrderComponent implements OnInit {
  county$: Observable<County[]>;
  distinct$: Observable<Distinct[]>;
  group: DynamicFormGroup<Order>;

  constructor(private countyServie: CountyService, private fb: DynamicFormBuilder) {
    this.group = this.fb.group(Order);
  }

  ngOnInit() {
    this.county$ = this.countyServie.getCounties();
  }

  onCountyChange(county: County) {
    this.distinct$ = this.countyServie.getDistincts(county.countyCode);
  }
}
