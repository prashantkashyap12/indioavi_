import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainwebComponent } from './mainweb.component';

describe('MainwebComponent', () => {
  let component: MainwebComponent;
  let fixture: ComponentFixture<MainwebComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MainwebComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MainwebComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
