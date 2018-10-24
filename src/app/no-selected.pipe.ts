import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'noSelected',
  pure: false
})
export class NoSelectedPipe implements PipeTransform {

  transform(users): boolean {
    return !users.some(user => user.selected);
  }

}
