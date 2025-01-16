import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideHttpClient, withFetch } from '@angular/common/http';

import { UserListComponent } from '@ng-nx/uni-users-view';

import { env } from '../../../environments/environment';
import { AppUsersComponent } from './users.component';

describe('AppUsersComponent', (): void => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        UserListComponent,
        AppUsersComponent
      ],
      providers: [
        provideHttpClient(withFetch()),
        {
          provide: 'env',
          useValue: env
        }
      ],
    }).compileComponents();
  });

  it('should create the component', (): void => {
    const fixture: ComponentFixture<AppUsersComponent> = TestBed.createComponent(AppUsersComponent);
    const app: AppUsersComponent = fixture.componentInstance;

    expect(app).toBeTruthy();
  });

  it('#env.users should be equal to "https://dummyjson.com/users/search"', (): void => {
    const fixture: ComponentFixture<AppUsersComponent> = TestBed.createComponent(AppUsersComponent);
    const app: AppUsersComponent = fixture.componentInstance;

    expect(app.env.users).toEqual('https://dummyjson.com/users/search');
  });
});
