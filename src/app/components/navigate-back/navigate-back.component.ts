import { Component, OnInit } from '@angular/core';
import { NavigateBack } from 'src/app/utils/navigate-back';

@Component({
  selector: 'app-navigate-back',
  templateUrl: './navigate-back.component.html',
  styleUrls: ['./navigate-back.component.scss']
})
export class NavigateBackComponent implements OnInit {

  constructor(private navigateBack: NavigateBack) { }

  back = () : void => {
    this.navigateBack.navigateBack();
  }

  ngOnInit(): void {
  }

}
