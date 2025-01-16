import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MatTableDataSource } from '@angular/material/table';
import { Observable } from 'rxjs';

import { ExtendedUser, User, UsersResponse } from '../../models/interfaces/user.interface';
import { UsersQueryParams } from '../../models/interfaces/users-query-params.interface';
import { UserListUIParams } from '../../models/interfaces/user-list-state.interface';

@Injectable({ providedIn: 'root' })
export class UserListService {

  constructor(private http: HttpClient) {
  }

  getOffset(pageIndex = 0, pageSize = 5): number {
    return pageIndex * pageSize;
  }

  getOptionalProp(prop: string, value: unknown): UsersQueryParams | object {
    return value ? { [prop]: value } : {};
  }

  getOptions(params: UserListUIParams): UsersQueryParams {
    const { search, sort, page } = params;
    const { pageSize, pageIndex } = page;
    const { active, direction } = sort || {};

    return {
      select: 'id,firstName,lastName,age,address',
      limit: pageSize || 5,
      skip: this.getOffset(pageIndex, pageSize),
      ...this.getOptionalProp('sortBy', active),
      ...this.getOptionalProp('order', direction),
      ...this.getOptionalProp('q', search),
    };
  }

  loadUsers(url: string, params: UsersQueryParams): Observable<UsersResponse> {
    return this.http.get<UsersResponse>(url, { params });
  }

  mapUsers(data: UsersResponse): MatTableDataSource<ExtendedUser> {
    return new MatTableDataSource<ExtendedUser>(
      data.users?.map(
        (user: User, index: number): ExtendedUser => ({
          position: data.skip + 1 + index,
          ...user,
        }),
      ),
    );
  }
}
