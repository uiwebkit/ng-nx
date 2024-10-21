import { Component, inject, ChangeDetectionStrategy, InputSignal, input, effect, Signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule, Sort } from '@angular/material/sort';
import { of } from 'rxjs';

import { UserListDataStore, UserListUiStore } from '@ng-nx/uni-users-data';

import { AddressPipe } from '../../pipes/address/address.pipe';
import { isDefined } from '@ng-nx/common-data';

@Component({
  selector: 'lib-user-list',
  standalone: true,
  imports: [RouterLink, FormsModule, MatFormFieldModule, MatInputModule, MatTableModule, MatPaginatorModule, MatSortModule, AddressPipe],
  templateUrl: 'user-list.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UserListComponent {
  url: InputSignal<string> = input.required();
  pageSizes: InputSignal<number[]> = input([5, 10, 25, 50, 100]);

  dynamicColumns: string[] = ['firstName', 'lastName', 'age', 'address', 'more'];
  columns: string[] = ['position', ...this.dynamicColumns];

  readonly uiStore = inject(UserListUiStore);
  readonly dataStore = inject(UserListDataStore);

  constructor() {
    //@TODO find a better solution
    let search: string;
    let sort: Sort | null;

    effect(
      () => {
        // disable for navigation back
        if (isDefined(search) || isDefined(sort)) {
          // set first page
          this.uiStore.updatePageIndex(0);
        }

        search = this.uiStore.search();
        sort = this.uiStore.sort();
      },
      { allowSignalWrites: true }
    );

    effect(
      () => {
        // pass url for the request
        this.dataStore.updateUrl(this.url());
        this.dataStore.loadUsers(of({ search, sort, page: this.uiStore.page() }));
      },
      { allowSignalWrites: true }
    );
  }
}
