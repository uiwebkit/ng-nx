import { Component, inject, ChangeDetectionStrategy, InputSignal, input, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';

import { UserListDataStore, UserListUiStore } from '@ng-nx/uni-users-data';

import { AddressPipe } from '../../pipes/address/address.pipe';
import { UserListViewStore } from './user-list-view.store';

@Component({
  selector: 'lib-user-list',
  standalone: true,
  imports: [RouterLink, FormsModule, MatFormFieldModule, MatInputModule, MatTableModule, MatPaginatorModule, MatSortModule, AddressPipe],
  providers: [UserListViewStore],
  templateUrl: 'user-list.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UserListComponent implements OnInit {
  url: InputSignal<string> = input.required();
  pageSizes: InputSignal<number[]> = input([5, 10, 25, 50, 100]);

  readonly uiStore = inject(UserListUiStore);
  readonly dataStore = inject(UserListDataStore);
  readonly viewStore = inject(UserListViewStore);

  ngOnInit(): void {
    this.dataStore.loadUsers(this.url());
    this.viewStore.updateUrl(this.url());
  }
}
