import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { County } from '../../../shared/models/county';
import { Distinct } from '../../../shared/models/distinct';
import { CountyService } from './county.service';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.scss']
})
export class OrderComponent implements OnInit {
  county$: Observable<County[]>;
  distinct$: Observable<Distinct[]>;

  constructor(private countyServie: CountyService) {}

  ngOnInit() {
    this.county$ = this.countyServie.getCounties();
  }
}
