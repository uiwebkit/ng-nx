import { TestBed } from '@angular/core/testing';

import { SharedRootComponent } from './root.component';

describe('SharedRootComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SharedRootComponent],
    }).compileComponents();
  });

  it('should create the component', () => {
    const fixture = TestBed.createComponent(SharedRootComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });
});
