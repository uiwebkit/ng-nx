import { ExtendedUser } from './user.interface';
import { MatTableDataSource } from '@angular/material/table';
import { Sort } from '@angular/material/sort';
import { PageEvent } from '@angular/material/paginator';

export interface UserListUIParams {
  search: string;
  sort: Sort | null;
  page: PageEvent;
}

export interface UserListUIState extends UserListUIParams {
  dynamicColumns: string[];
}

export interface UserListDataState {
  total: number;
  users: MatTableDataSource<ExtendedUser>;
}
