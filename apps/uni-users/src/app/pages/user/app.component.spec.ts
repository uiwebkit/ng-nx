import { TestBed } from '@angular/core/testing';
import { ActivatedRoute } from '@angular/router';

import { AppUserComponent } from './user.component';

describe('AppUserComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AppUserComponent],
      providers: [{ provide: ActivatedRoute, useValue: {} }],
    }).compileComponents();
  });

  it('should create the component', () => {
    const fixture = TestBed.createComponent(AppUserComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });
});
