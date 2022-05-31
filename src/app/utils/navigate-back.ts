import { Location } from '@angular/common';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NavigateBack {

  constructor(private location: Location) {}
  
  navigateBack(): void {
    this.location.back();
  }
}
