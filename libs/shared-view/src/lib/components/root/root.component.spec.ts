import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SharedRootComponent } from './root.component';

describe('SharedRootComponent', (): void => {
  beforeEach(async (): Promise<void> => {
    await TestBed.configureTestingModule({
      imports: [SharedRootComponent],
    }).compileComponents();
  });

  it('should create the component', (): void => {
    const fixture: ComponentFixture<SharedRootComponent> = TestBed.createComponent(SharedRootComponent);
    const app: SharedRootComponent = fixture.componentInstance;

    expect(app).toBeTruthy();
  });
});
