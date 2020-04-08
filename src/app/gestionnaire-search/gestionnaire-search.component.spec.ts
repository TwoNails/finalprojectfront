import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GestionnaireSearchComponent } from './gestionnaire-search.component';

describe('GestionnaireSearchComponent', () => {
  let component: GestionnaireSearchComponent;
  let fixture: ComponentFixture<GestionnaireSearchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GestionnaireSearchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GestionnaireSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
