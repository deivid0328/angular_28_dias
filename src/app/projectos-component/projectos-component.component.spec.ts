import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectosComponentComponent } from './projectos-component.component';

describe('ProjectosComponentComponent', () => {
  let component: ProjectosComponentComponent;
  let fixture: ComponentFixture<ProjectosComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProjectosComponentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProjectosComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
