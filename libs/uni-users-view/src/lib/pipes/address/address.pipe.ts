import { Pipe, PipeTransform } from '@angular/core';

import { Location } from '@ng-nx/uni-users-data';

@Pipe({
  standalone: true,
  name: 'address',
})
export class AddressPipe implements PipeTransform {
  transform(value: Location): string {
    return value.address ? `${value.address}, ${value.country}, ${value.city}, ${value.stateCode}` : `${value}`;
  }
}
