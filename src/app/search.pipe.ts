import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
    name: 'search',
    pure: false
})
export class SearchPipe implements PipeTransform {
    transform(users, value) {
        return users.filter(user => user.name.toLowerCase().includes(value.toLowerCase()));
    }
}