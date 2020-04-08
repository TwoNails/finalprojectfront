import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DemandeSearchComponent } from './demande-search.component';

describe('DemandeSearchComponent', () => {
  let component: DemandeSearchComponent;
  let fixture: ComponentFixture<DemandeSearchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DemandeSearchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DemandeSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
