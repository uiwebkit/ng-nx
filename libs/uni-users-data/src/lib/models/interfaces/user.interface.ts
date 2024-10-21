import { Location } from '../../models/interfaces/address.interface';

export interface User {
  id: number;
  firstName: string;
  lastName: string;
  age: number;
  address: Location;
}

export interface ExtendedUser extends User {
  position: number;
}

export interface UsersResponse {
  total: number;
  skip: number;
  limit: number;
  users: User[];
}
