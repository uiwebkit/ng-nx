import { inject } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { patchState, signalStore, withMethods, withState } from '@ngrx/signals';
import { rxMethod } from '@ngrx/signals/rxjs-interop';
import { debounceTime, distinctUntilChanged, map, pipe, switchMap } from 'rxjs';

import { errorHandler } from '@ng-nx/common-data';

import { UserListDataState, UserListUIState } from '../../models/interfaces/user-list-state.interface';
import { UsersQueryParams } from '../../models/interfaces/users-query-params.interface';
import { ExtendedUser, UsersResponse } from '../../models/interfaces/user.interface';
import { UserListService } from './user-list.service';

const initialState: UserListDataState = {
  url: '',
  total: 0,
  users: new MatTableDataSource<ExtendedUser>([]),
};

export const UserListDataStore = signalStore(
  { providedIn: 'root' },
  withState(initialState),
  withMethods((store, userListService = inject(UserListService)) => ({
    updateUrl(url: string): void {
      patchState(store, { url });
    },
    loadUsers: rxMethod<UserListUIState>(
      pipe(
        debounceTime(300),
        distinctUntilChanged(),
        map((params: UserListUIState) => userListService.getOptions(params)),
        switchMap((query: UsersQueryParams) => userListService.loadUsers(store.url(), query)),
        errorHandler<UsersResponse>('LOAD_USERS'),
        map((data: UsersResponse) =>
          patchState(store, {
            total: data.total,
            users: userListService.mapUsers(data),
          })
        )
      )
    ),
  }))
);
