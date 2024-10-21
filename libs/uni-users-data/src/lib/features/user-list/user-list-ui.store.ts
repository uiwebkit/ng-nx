import { Sort } from '@angular/material/sort';
import { PageEvent } from '@angular/material/paginator';
import { patchState, signalStore, withMethods, withState } from '@ngrx/signals';
import { rxMethod } from '@ngrx/signals/rxjs-interop';
import { pipe, map } from 'rxjs';

import { UserListUIState } from '../../models/interfaces/user-list-state.interface';

const initialState: UserListUIState = {
  search: '',
  sort: null,
  page: {
    pageIndex: 0,
    pageSize: 5,
    length: 0,
  },
};

export const UserListUiStore = signalStore(
  { providedIn: 'root' },
  withState(initialState),
  withMethods(store => ({
    updateSearch(search: string): void {
      patchState(store, { search });
    },
    updateSort: rxMethod<Sort>(pipe(map((sort: Sort) => patchState(store, { sort })))),
    updatePage: rxMethod<PageEvent>(pipe(map((page: PageEvent) => patchState(store, { page })))),
    updatePageIndex(pageIndex: number) {
      patchState(store, state => ({ page: { ...(state.page as PageEvent), pageIndex } }));
    },
  }))
);
