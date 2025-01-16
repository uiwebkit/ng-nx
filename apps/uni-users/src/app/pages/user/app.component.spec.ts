import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ActivatedRoute } from '@angular/router';

import { AppUserComponent } from './user.component';

describe('AppUserComponent', (): void => {
  beforeEach(async (): Promise<void> => {
    await TestBed.configureTestingModule({
      imports: [AppUserComponent],
      providers: [{
        provide: ActivatedRoute,
        useValue: {}
      }],
    }).compileComponents();
  });

  it('should create the component', (): void => {
    const fixture: ComponentFixture<AppUserComponent> = TestBed.createComponent(AppUserComponent);
    const app: AppUserComponent = fixture.componentInstance;

    expect(app).toBeTruthy();
  });
});
