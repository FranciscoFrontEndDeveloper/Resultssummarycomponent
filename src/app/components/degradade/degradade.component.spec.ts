import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DegradadeComponent } from './degradade.component';

describe('DegradadeComponent', () => {
  let component: DegradadeComponent;
  let fixture: ComponentFixture<DegradadeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DegradadeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DegradadeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
