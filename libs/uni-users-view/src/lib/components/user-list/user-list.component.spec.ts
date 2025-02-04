import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideHttpClient, withFetch } from '@angular/common/http';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';

import { UserListComponent } from './user-list.component';

describe('UserListComponent', (): void => {
  let component: UserListComponent;
  let fixture: ComponentFixture<UserListComponent>;

  beforeEach(async (): Promise<void> => {
    await TestBed.configureTestingModule({
      imports: [UserListComponent],
      providers: [provideHttpClient(withFetch()), provideAnimationsAsync()],
    }).compileComponents();

    fixture = TestBed.createComponent(UserListComponent);
    fixture.componentRef.setInput('url', 'https://dummyjson.com/users/search');
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', (): void => {
    expect(component).toBeTruthy();
  });
});
