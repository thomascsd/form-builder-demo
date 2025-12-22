import { Component } from '@angular/core';
import { UntypedFormBuilder, UntypedFormGroup, Validators } from '@angular/forms';
import { County } from '../../../shared/models/county';
import { Distinct } from '../../../shared/models/distinct';
import { CountyService } from '../core/services/county.service';
import { HttpResourceRef } from '@angular/common/http';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.scss'],
  standalone: false,
})
export class OrderComponent {
  county!: HttpResourceRef<County[]>;
  distinct!: HttpResourceRef<Distinct[]>;
  group: UntypedFormGroup;

  constructor(
    private countyServie: CountyService,
    private fb: UntypedFormBuilder,
  ) {
    this.group = this.fb.group({
      contactName: ['', Validators.required],
      county: ['', Validators.required],
      distinct: ['', Validators.required],
      address: ['', Validators.required],
      receiveCounty: ['', Validators.required],
      receiveDistinct: ['', Validators.required],
      receiveAdress: ['', Validators.required],
    });

    this.county = this.countyServie.getCounties();
  }

  onCountyChange(county: County) {
    this.distinct = this.countyServie.getDistincts(county.countyCode);
  }
}
