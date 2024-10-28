import { computed } from '@angular/core';
import { Sort } from '@angular/material/sort';
import { PageEvent } from '@angular/material/paginator';
import { patchState, signalStore, withComputed, withMethods, withState } from '@ngrx/signals';

import { UserListUIState } from '../../models/interfaces/user-list-state.interface';

const initialState: UserListUIState = {
  dynamicColumns: ['firstName', 'lastName', 'age', 'address'],
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
  withComputed(({ dynamicColumns }) => ({
    columns: computed(() => ['position', ...dynamicColumns(), 'more']),
  })),
  withMethods((store) => ({
    updateSearch(search: string): void {
      patchState(store, { search });
    },
    updateSort(sort: Sort): void {
      patchState(store, { sort });
    },
    updatePage(page: PageEvent): void {
      patchState(store, { page });
    },
    updatePageIndex(pageIndex: number) {
      patchState(store, state => ({ page: { ...state.page, pageIndex } }));
    },
  }))
);
