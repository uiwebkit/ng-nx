import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SharedLoadingComponent } from './loading.component';

describe('SharedLoadingComponent', (): void => {
  let component: SharedLoadingComponent;
  let fixture: ComponentFixture<SharedLoadingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SharedLoadingComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(SharedLoadingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', (): void => {
    expect(component).toBeTruthy();
  });
});
