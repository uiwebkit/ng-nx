import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MatTableDataSource } from '@angular/material/table';
import { Observable } from 'rxjs';

import { ExtendedUser, User, UsersResponse } from '../../models/interfaces/user.interface';
import { UsersQueryParams } from '../../models/interfaces/users-query-params.interface';
import { UserListUIState } from '../../models/interfaces/user-list-state.interface';

@Injectable({ providedIn: 'root' })
export class UserListService {
  constructor(private http: HttpClient) {}

  getOffset(pageIndex = 0, pageSize = 5): number {
    return pageIndex * pageSize;
  }

  getOptionalProp(prop: string, value: unknown): UsersQueryParams | object {
    return value ? { [prop]: value } : {};
  }

  getOptions(params: UserListUIState): UsersQueryParams {
    return {
      select: 'id,firstName,lastName,age,address',
      limit: params.page?.pageSize || 5,
      skip: this.getOffset(params.page?.pageIndex, params.page?.pageSize),
      ...this.getOptionalProp('sortBy', params.sort?.active),
      ...this.getOptionalProp('order', params.sort?.direction),
      ...this.getOptionalProp('q', params.search),
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
        })
      )
    );
  }
}
