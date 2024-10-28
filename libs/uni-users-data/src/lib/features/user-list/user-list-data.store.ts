import { inject } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { patchState, signalStore, withMethods, withState } from '@ngrx/signals';
import { rxMethod } from '@ngrx/signals/rxjs-interop';
import { debounceTime, map, pipe, switchMap } from 'rxjs';

import { errorHandler, RequestParams } from '@ng-nx/common-data';

import { UserListDataState } from '../../models/interfaces/user-list-state.interface';
import { UsersQueryParams } from '../../models/interfaces/users-query-params.interface';
import { ExtendedUser, UsersResponse } from '../../models/interfaces/user.interface';
import { UserListService } from './user-list.service';
import { UserListUiStore } from './user-list-ui.store';

const initialState: UserListDataState = {
  total: 0,
  users: new MatTableDataSource<ExtendedUser>([]),
};

export const UserListDataStore = signalStore(
  { providedIn: 'root' },
  withState(initialState),
  withMethods((store, userListService = inject(UserListService), uiStore = inject(UserListUiStore)) => ({
    loadUsers: rxMethod<string>(
      pipe(
        debounceTime(500),
        map((url: string): RequestParams<UsersQueryParams> => ({ url, query: userListService.getOptions({
          search: uiStore.search(),
          sort: uiStore.sort(),
          page: uiStore.page(),
        })})),
        switchMap((req: RequestParams<UsersQueryParams>) => userListService.loadUsers(req.url, req.query)),
        errorHandler<UsersResponse>('LOAD_USERS'),
        map((data: UsersResponse) => patchState(store, {
          total: data.total,
          users: userListService.mapUsers(data),
        }))
      )
    ),
  }))
);
