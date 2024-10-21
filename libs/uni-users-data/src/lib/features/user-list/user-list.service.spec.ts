import { TestBed } from '@angular/core/testing';
import { provideHttpClient, withFetch } from '@angular/common/http';

// import { env } from '../../../../../../src/environments/environment';
import { UserListService } from './user-list.service';

describe('UserListService', () => {
  let service: UserListService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        UserListService,
        provideHttpClient(withFetch()),
        // { provide: 'env', useValue: env },
      ],
    });

    service = TestBed.inject(UserListService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
