import { inject } from '@angular/core';
import { PageEvent } from '@angular/material/paginator';
import { patchState, signalStore, withMethods, withState } from '@ngrx/signals';

import { UserListDataStore, UserListUiStore } from '@ng-nx/uni-users-data';
import { Sort } from '@angular/material/sort';

const initialState: { url: string; } = {
  url: '',
};

export const UserListViewStore = signalStore(
  withState(initialState),
  withMethods((store, uiStore = inject(UserListUiStore), dataStore = inject(UserListDataStore)) => ({
    updateUrl(url: string): void {
      patchState(store, { url });
    },
    onSearchChange(search: string): void {
      uiStore.updateSearch(search);
      this.loadPageUsers(store.url(), 0);
    },
    onSortChange(sort: Sort): void {
      uiStore.updateSort(sort);
      this.loadPageUsers(store.url(), 0);
    },
    onPageChange(page: PageEvent): void {
      uiStore.updatePage(page);
      dataStore.loadUsers(store.url);
    },
    loadPageUsers(url: string, pageIndex = 0): void {
      uiStore.updatePageIndex(pageIndex);
      dataStore.loadUsers(url);
    }
  }))
);
