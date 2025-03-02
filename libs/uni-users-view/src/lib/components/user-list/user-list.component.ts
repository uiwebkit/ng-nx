import { Component, inject, ChangeDetectionStrategy, InputSignal, input, OnInit, Signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { MatPaginatorModule, PageEvent } from '@angular/material/paginator';
import { MatSortModule, Sort } from '@angular/material/sort';

import { ExtendedUser, UserListDataStore, UserListUiStore } from '@ng-nx/uni-users-data';

import { AddressPipe } from '../../pipes/address/address.pipe';
import { UserListViewStore } from './user-list-view.store';
import { DeepSignal } from '@ngrx/signals';

@Component({
  selector: 'lib-user-list',
  imports: [
    RouterLink,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    AddressPipe,
  ],
  providers: [UserListViewStore],
  templateUrl: 'user-list.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UserListComponent implements OnInit {

  url: InputSignal<string> = input.required();
  pageSizes: InputSignal<number[]> = input([5, 10, 25, 50, 100]);

  private uiStore = inject(UserListUiStore);
  private dataStore = inject(UserListDataStore);
  private viewStore = inject(UserListViewStore);

  readonly uiStoreSearch: Signal<string> = this.uiStore.search;
  readonly uiStoreDynamicColumns: Signal<string[]> = this.uiStore.dynamicColumns;
  readonly uiStoreColumns: Signal<string[]> = this.uiStore.columns;
  readonly uiStorePage: Signal<PageEvent> = this.uiStore.page;

  readonly dataStoreUsers: DeepSignal<MatTableDataSource<ExtendedUser>> = this.dataStore.users;
  readonly dataStoreTotal: Signal<number> = this.dataStore.total;

  onSearchChangeStore(search: string): void {
    this.viewStore.onSearchChange(search);
  }

  onSortChangeStore(sort: Sort): void {
    this.viewStore.onSortChange(sort);
  }

  onPageChangeStore: (page: PageEvent) => void = this.viewStore.onPageChange;

  ngOnInit(): void {
    this.dataStore.loadUsers(this.url());
    this.viewStore.updateUrl(this.url());
  }
}
