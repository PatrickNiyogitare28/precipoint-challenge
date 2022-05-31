import { Location } from '@angular/common';
import { Injectable } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { setBreadCrumb } from '../store/actions/bread-crumb.action';

@Injectable({
  providedIn: 'root'
})
export class BreadCrumbHandler {

  constructor(private store: Store<{breadcrumb: string}>) {}
  
  setBreadCrumb = (payload: string) => {
    this.store.dispatch(setBreadCrumb({payload}))
  }

  getCurrentBreadCrumb = () => {
    return this.store.pipe(select('breadcrumb'))
  }
}
