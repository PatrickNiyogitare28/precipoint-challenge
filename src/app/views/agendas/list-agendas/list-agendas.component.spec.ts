import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListAgendasComponent } from './list-agendas.component';

describe('ListAgendasComponent', () => {
  let component: ListAgendasComponent;
  let fixture: ComponentFixture<ListAgendasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListAgendasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListAgendasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
