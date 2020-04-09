import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReposearchFormComponent } from './reposearch-form.component';

describe('ReposearchFormComponent', () => {
  let component: ReposearchFormComponent;
  let fixture: ComponentFixture<ReposearchFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReposearchFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReposearchFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
