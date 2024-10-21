import { ExtendedUser } from './user.interface';
import { MatTableDataSource } from '@angular/material/table';
import { Sort } from '@angular/material/sort';
import { PageEvent } from '@angular/material/paginator';

export interface UserListUIState {
  search: string;
  sort: Sort | null;
  page: PageEvent | null;
}

export interface UserListDataState {
  url: string;
  total: number;
  users: MatTableDataSource<ExtendedUser>;
}
