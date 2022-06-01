import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
   public breadCrumb$: Observable<string>;

  constructor(private store: Store<{breadcrumb: string}>) {
    this.breadCrumb$ = store.pipe(select('breadcrumb'));
   }

  ngOnInit(): void {
  }

}
