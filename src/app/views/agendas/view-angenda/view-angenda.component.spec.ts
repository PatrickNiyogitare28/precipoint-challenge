import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewAngendaComponent } from './view-angenda.component';

describe('ViewAngendaComponent', () => {
  let component: ViewAngendaComponent;
  let fixture: ComponentFixture<ViewAngendaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewAngendaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewAngendaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
